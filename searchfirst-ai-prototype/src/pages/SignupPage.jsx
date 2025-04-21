import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProgressBar from '../components/ProgressBar';

const SignupPage = () => {
  const navigate = useNavigate();
  
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  // Error states
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    dob: false,
    password: false,
    confirmPassword: false,
    transaction: false,
    terms: false
  });
  
  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const validatePhone = (phone) => {
    const re = /^[0-9]{10,11}$/;
    return re.test(phone.replace(/\s+/g, ''));
  };
  
  const validatePassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
  };
  
  const validateDob = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age >= 18;
  };
  
  // Check form validity
  const isFormValid = () => {
    return (
      fullName.trim() !== '' &&
      validateEmail(email) &&
      validatePhone(phone) &&
      validateDob(dob) &&
      validatePassword(password) &&
      password === confirmPassword &&
      selectedTransaction !== null &&
      termsAccepted
    );
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check all fields and update errors
    const newErrors = {
      fullName: fullName.trim() === '',
      email: !validateEmail(email),
      phone: !validatePhone(phone),
      dob: !validateDob(dob),
      password: !validatePassword(password),
      confirmPassword: password !== confirmPassword,
      transaction: selectedTransaction === null,
      terms: !termsAccepted
    };
    
    setErrors(newErrors);
    
    // If form is valid, proceed
    if (isFormValid()) {
      navigate('/app/ai-introduction');
    }
  };
  
  // Handle back to main website
  const goToMainWebsite = () => {
    navigate('/'); // Navigate to main website
  };
  
  return (
    <MainLayout>
      <div className="content-container">
          {/* Back to Main Website Button */}
          <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
            <button 
              onClick={goToMainWebsite}
              className="btn btn-secondary"
              style={{ width: 'auto', padding: '0.5rem 1rem' }}
            >
              ← Back to Main Website
            </button>
          </div>
          
          {/* Hero Section */}
          <div className="hero">
            <h1>AI-Powered Conveyancing</h1>
            <p>Experience faster, cheaper, and more transparent property transfers with our revolutionary AI platform. No solicitor fees, no delays, no stress.</p>
          </div>

          {/* Progress Bar */}
          <ProgressBar step={1} totalSteps={5} />

          {/* Account Creation Form */}
          <div className="form-container">
            <h2>Create Your Account</h2>
            <p>To begin your AI-powered conveyancing journey, we need a few details from you.</p>
            
            <form id="signup-form" onSubmit={handleSubmit}>
              {/* Personal Details */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullname">Full Legal Name</label>
                  <input 
                    type="text" 
                    id="fullname" 
                    className="form-control" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required 
                  />
                  {errors.fullName && (
                    <div className="error-message" style={{ display: 'block' }}>
                      Please enter your full legal name
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                  {errors.email && (
                    <div className="error-message" style={{ display: 'block' }}>
                      Please enter a valid email address
                    </div>
                  )}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-control" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                  />
                  {errors.phone && (
                    <div className="error-message" style={{ display: 'block' }}>
                      Please enter a valid phone number
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input 
                    type="date" 
                    id="dob" 
                    className="form-control" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required 
                  />
                  {errors.dob && (
                    <div className="error-message" style={{ display: 'block' }}>
                      You must be at least 18 years old
                    </div>
                  )}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Create Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="form-control" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                  <p className="form-note">Must be at least 8 characters with a number and a special character</p>
                  {errors.password && (
                    <div className="error-message" style={{ display: 'block' }}>
                      Password must be at least 8 characters with a number and a special character
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input 
                    type="password" 
                    id="confirm-password" 
                    className="form-control" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                  {errors.confirmPassword && (
                    <div className="error-message" style={{ display: 'block' }}>
                      Passwords do not match
                    </div>
                  )}
                </div>
              </div>
              
              <div className="form-divider"></div>
              
              {/* Transaction Type Selection */}
              <div className="transaction-type">
                <h3>What type of transaction are you looking to complete?</h3>
                
                <div className="transaction-cards">
                  <div 
                    className={`transaction-card ${selectedTransaction === 'buying' ? 'selected' : ''}`}
                    onClick={() => setSelectedTransaction('buying')}
                  >
                    <i className="fas fa-home"></i>
                    <h4>Buying</h4>
                    <p>Purchasing a property</p>
                  </div>
                  
                  <div 
                    className={`transaction-card ${selectedTransaction === 'selling' ? 'selected' : ''}`}
                    onClick={() => setSelectedTransaction('selling')}
                  >
                    <i className="fas fa-sign"></i>
                    <h4>Selling</h4>
                    <p>Selling your property</p>
                  </div>
                  
                  <div 
                    className={`transaction-card ${selectedTransaction === 'both' ? 'selected' : ''}`}
                    onClick={() => setSelectedTransaction('both')}
                  >
                    <i className="fas fa-exchange-alt"></i>
                    <h4>Both</h4>
                    <p>Selling and buying</p>
                  </div>
                </div>
                {errors.transaction && (
                  <div className="error-message" style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
                    Please select a transaction type
                  </div>
                )}
              </div>
              
              {/* Terms Acceptance */}
              <div className="terms-container">
                <input 
                  type="checkbox" 
                  id="terms-checkbox" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required 
                />
                <div className="terms-text">
                  <p>I agree to the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a>. I understand that Search First AI will process my data as described in the Privacy Policy.</p>
                  {errors.terms && (
                    <div className="error-message" style={{ display: 'block' }}>
                      You must accept the terms to continue
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn" 
                disabled={!isFormValid()}
              >
                Create Account & Continue
              </button>
            </form>
          </div>
        </div>
    </MainLayout>
  );
};

export default SignupPage;