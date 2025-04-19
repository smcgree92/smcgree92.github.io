from openai import OpenAI
import json
import sys

print("=== Search First AI Document Analyzer ===")

# Your Mistral API key
API_KEY = "lYR7h1czuC8h5sbi10rp05ch4OQ3LzUa"

# Initialize OpenAI client with Mistral's API endpoint
client = OpenAI(
    api_key=API_KEY,
    base_url="https://api.mistral.ai/v1"
)

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
            temperature=0.1  # Lower temperature for more deterministic results
        )
        
        return response.choices[0].message.content
    except Exception as e:
        print(f"API Error: {e}")
        return None

# Test with a sample title register
def test_with_sample():
    sample_text = """
    REGISTER OF TITLE: ABC12345
    
    A: Property Register
    The Freehold land shown edged with red on the plan of the above Title filed at the Registry and being 123 Main Street, London, NW1 6XE.
    
    B: Proprietorship Register
    PROPRIETOR: JOHN SMITH and JANE SMITH of 123 Main Street, London, NW1 6XE.
    
    C: Charges Register
    The land is subject to the following restrictions:
    A Deed dated 10 November 1998 made between (1) John Smith and (2) Jane Smith contains restrictive covenants.
    """
    
    print("Analyzing sample text...")
    result = analyze_text(sample_text, "title_register")
    
    if result:
        try:
            parsed_result = json.loads(result)
            print("\nExtracted Information:")
            print(json.dumps(parsed_result, indent=2))
        except json.JSONDecodeError:
            print("\nCouldn't parse result as JSON. Raw result:")
            print(result)
    else:
        print("Analysis failed.")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        test_with_sample()
    else:
        # Here you would add code to read from a file
        # For now, just run the sample test
        test_with_sample()
