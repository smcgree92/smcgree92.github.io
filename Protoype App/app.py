import streamlit as st
import fitz  # PyMuPDF
from openai import OpenAI
import json
import os
import tempfile

# Set page title and configuration
st.set_page_config(
    page_title="Search First AI - Document Analyzer",
    layout="wide"
)

# Your Mistral API key
API_KEY = "lYR7h1czuC8h5sbi10rp05ch4OQ3LzUa"

# Initialize OpenAI client with Mistral's API endpoint
@st.cache_resource
def get_client():
    return OpenAI(
        api_key=API_KEY,
        base_url="https://api.mistral.ai/v1"
    )

client = get_client()

def extract_text_from_pdf(uploaded_file):
    """Extract text from an uploaded PDF file"""
    # Save uploaded file to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix='.pdf') as tmp_file:
        tmp_file.write(uploaded_file.getbuffer())
        tmp_path = tmp_file.name
    
    try:
        # Extract text using PyMuPDF
        doc = fitz.open(tmp_path)
        text = ""
        
        for page in doc:
            text += page.get_text()
        
        # Close and clean up
        doc.close()
        os.unlink(tmp_path)
        
        return text
    except Exception as e:
        st.error(f"Error extracting text from PDF: {e}")
        # Clean up
        if os.path.exists(tmp_path):
            os.unlink(tmp_path)
        return None

def analyze_text(text, doc_type):
    """Analyze document text using Mistral AI"""
    
    # System message and prompt based on document type
    if doc_type == "Title Register":
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
    elif doc_type == "Lease Document":
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
    elif doc_type == "Property Information Form":
        system_message = "You are a specialized UK conveyancing AI assistant focused on property information forms."
        user_message = f"""
        Analyze this Property Information Form (TA6/TA10) and extract key disclosures in JSON format:
        
        {text[:3000]}
        
        Extract:
        - Property address
        - Boundary information
        - Planning permissions
        - Building works
        - Disputes
        - Guarantees/warranties
        - Environmental issues
        
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
        with st.spinner("Analyzing document with AI..."):
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
        st.error(f"API Error: {e}")
        return None

# App UI
st.title("Search First AI")
st.subheader("AI-Powered Conveyancing Document Analyzer")
st.write("Upload a property document to extract key information automatically")

# Sidebar for document type selection
with st.sidebar:
    st.header("Document Settings")
    doc_type = st.selectbox(
        "Select document type",
        ["Title Register", "Lease Document", "Property Information Form", "Other Document"]
    )

# Main area
uploaded_file = st.file_uploader("Choose a PDF file", type="pdf")

if uploaded_file is not None:
    st.write("File uploaded successfully!")
    
    # Display file details
    file_details = {
        "Filename": uploaded_file.name,
        "File size": f"{uploaded_file.size / 1024:.2f} KB"
    }
    st.write(file_details)
    
    # Extract text button
    if st.button("Process Document"):
        with st.spinner("Extracting text from document..."):
            text = extract_text_from_pdf(uploaded_file)
            
            if text:
                st.success(f"Successfully extracted {len(text)} characters from document")
                
                # Display a sample of the text
                with st.expander("Preview extracted text"):
                    st.text(text[:500] + "...")
                
                # Analyze the text
                result = analyze_text(text, doc_type)
                
                if result:
                    # Try to parse as JSON
                    try:
                        parsed_result = json.loads(result)
                        
                        # Show results in a nice format
                        st.subheader("Document Analysis Results")
                        
                        # Format results in columns
                        col1, col2 = st.columns(2)
                        
                        for i, (key, value) in enumerate(parsed_result.items()):
                            if i % 2 == 0:
                                with col1:
                                    st.markdown(f"**{key}:**")
                                    st.write(value)
                                    st.write("---")
                            else:
                                with col2:
                                    st.markdown(f"**{key}:**")
                                    st.write(value)
                                    st.write("---")
                        
                        # Show raw JSON in expander
                        with st.expander("View raw JSON"):
                            st.json(parsed_result)
                            
                    except json.JSONDecodeError:
                        st.error("Couldn't parse result as JSON")
                        st.write("Raw result:")
                        st.write(result)
                else:
                    st.error("Analysis failed")
            else:
                st.error("Failed to extract text from the document")

# Footer
st.markdown("---")
st.caption("Search First AI - Revolutionizing UK property conveyancing with AI")