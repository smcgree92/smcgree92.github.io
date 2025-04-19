from openai import OpenAI
import json
import sys
import fitz  # PyMuPDF

print("=== Search First AI PDF Document Analyzer ===")

# Your Mistral API key
API_KEY = "lYR7h1czuC8h5sbi10rp05ch4OQ3LzUa"

# Initialize OpenAI client with Mistral's API endpoint
client = OpenAI(
    api_key=API_KEY,
    base_url="https://api.mistral.ai/v1"
)

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file"""
    try:
        doc = fitz.open(pdf_path)
        text = ""
        
        for page in doc:
            text += page.get_text()
        
        return text
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        return None

def analyze_text(text, doc_type="title_register"):
    """Analyze document text using Mistral AI"""
    
    # System message and prompt based on document type
    if doc_type == "title_register":
        system_message = "You are a specialized UK conveyancing AI assistant focused on Land Registry documents."
        user_message = f"""
        Analyze this Land Registry Title Register and extract the following information in JSON format:
        
        {text[:3000]}
        
        Extract:
        - Title number
        - Property address
        - Tenure type (freehold/leasehold)
        - Registered owners
        - Entry date
        - Price paid (if available)
        - Any restrictions
        
        Return ONLY a valid JSON object with these fields.
        """
    elif doc_type == "lease":
        system_message = "You are a specialized UK conveyancing AI assistant focused on lease documents."
        user_message = f"""
        Analyze this lease document and extract the following information in JSON format:
        
        {text[:3000]}
        
        Extract:
        - Property address
        - Lease term (years)
        - Start date
        - Ground rent
        - Service charge details
        - Key restrictions
        
        Return ONLY a valid JSON object with these fields.
        """
    else:
        system_message = "You are a specialized UK conveyancing AI assistant."
        user_message = f"""
        Analyze this property document and extract all relevant legal information in JSON format:
        
        {text[:3000]}
        
        Return ONLY a valid JSON object.
        """
    
    try:
        response = client.chat.completions.create(
            model="mistral-small-latest", 
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ],
            temperature=0.1
        )
        
        return response.choices[0].message.content
    except Exception as e:
        print(f"API Error: {e}")
        return None

def analyze_pdf(pdf_path, doc_type="title_register"):
    """Process a PDF document and extract information"""
    print(f"Processing {pdf_path}...")
    
    # Extract text from PDF
    text = extract_text_from_pdf(pdf_path)
    if not text:
        print("Failed to extract text from PDF")
        return None
    
    print(f"Extracted {len(text)} characters of text")
    
    # Analyze the text
    print("Sending to Mistral API for analysis...")
    result = analyze_text(text, doc_type)
    
    if not result:
        print("Analysis failed")
        return None
    
    # Try to parse as JSON
    try:
        parsed_result = json.loads(result)
        print("\nExtracted Information:")
        print(json.dumps(parsed_result, indent=2))
        return parsed_result
    except json.JSONDecodeError:
        print("\nCouldn't parse result as JSON. Raw result:")
        print(result)
        return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 pdf_analyzer.py <pdf_file_path> [document_type]")
        print("Document types: title_register, lease, other")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    doc_type = sys.argv[2] if len(sys.argv) > 2 else "title_register"
    
    analyze_pdf(pdf_path, doc_type)
