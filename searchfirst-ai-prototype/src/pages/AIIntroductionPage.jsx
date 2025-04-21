import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProgressBar from '../components/ProgressBar';

const AIIntroductionPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);

  // AI introduction messages that will be animated
  const introMessages = [
    {
      sender: 'ai',
      text: "Hello! I'm your AI conveyancing assistant. Welcome to Search First AI.",
      time: "Today, 10:05"
    },
    {
      sender: 'ai',
      text: "I'll be guiding you through the entire property transaction process, handling all the legal work that would traditionally be done by a solicitor.",
      time: "Today, 10:05"
    },
    {
      sender: 'ai',
      text: "Our process is broken down into simple steps, and I'll explain everything in plain English - no legal jargon!",
      time: "Today, 10:06"
    },
    {
      sender: 'ai',
      text: "Here's how we'll work together to complete your property purchase:",
      time: "Today, 10:06",
      isTimelineIntro: true
    }
  ];

  // Process timeline
  const timeline = [
    {
      title: "Property Information Collection",
      description: "I'll gather all necessary information about your property."
    },
    {
      title: "Property Searches",
      description: "I'll conduct comprehensive searches to identify any issues with the property."
    },
    {
      title: "Document Preparation",
      description: "I'll prepare all the legal documents required for your transaction."
    },
    {
      title: "Exchange of Contracts",
      description: "I'll handle the exchange of contracts with the other party."
    },
    {
      title: "Completion",
      description: "I'll manage the transfer of funds and ownership to complete your transaction."
    }
  ];

  // Simulate message typing effect
  useEffect(() => {
    if (messages.length < introMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          introMessages[prev.length]
        ]);
      }, 1000); // Add a new message every second
      
      return () => clearTimeout(timer);
    } else if (!animationComplete) {
      // Mark animation as complete after all messages are displayed
      setAnimationComplete(true);
    }
  }, [messages, animationComplete]);

  // Handle user message send
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [
      ...prev,
      {
        sender: 'user',
        text: inputValue,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    // Clear input
    setInputValue('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: "That's a great question! I'm here to make this process as smooth as possible. Let's continue to the next step where we'll collect some details about your property.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  // Handle continue button
  const handleContinue = () => {
    navigate('/app/property-details');
  };

  return (
    <MainLayout>
      <div className="content-container">
          {/* Progress Bar */}
          <ProgressBar step={2} totalSteps={5} />

          <div className="chat-container" style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            marginBottom: '2rem'
          }}>
            <div className="chat-header" style={{
              backgroundColor: 'var(--teal)',
              color: 'white',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div className="ai-avatar" style={{
                backgroundColor: 'white',
                color: 'var(--teal)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                <i className="fas fa-robot"></i>
              </div>
              <h2 style={{ margin: 0 }}>Search AI Assistant</h2>
            </div>
            
            <div className="chat-messages" style={{
              padding: '1.5rem',
              maxHeight: '500px',
              overflowY: 'auto'
            }}>
              {messages.map((message, index) => (
                <div key={index}>
                  <div className={`message ${message.sender}-message`} style={{
                    backgroundColor: message.sender === 'ai' ? 'var(--light-teal)' : '#f0f0f0',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    maxWidth: '80%',
                    marginLeft: message.sender === 'user' ? 'auto' : '0'
                  }}>
                    <p style={{ margin: 0 }}>{message.text}</p>
                    <div className="message-meta" style={{
                      fontSize: '0.8rem',
                      color: '#777',
                      marginTop: '0.5rem',
                      textAlign: 'right'
                    }}>
                      {message.time}
                    </div>
                  </div>
                  
                  {/* Process timeline within AI messages */}
                  {message.isTimelineIntro && (
                    <div className="timeline" style={{
                      margin: '1rem 0 2rem',
                      paddingLeft: '2rem',
                      borderLeft: '4px solid var(--teal)'
                    }}>
                      {timeline.map((item, idx) => (
                        <div key={idx} className="timeline-item" style={{
                          marginBottom: '1.5rem',
                          position: 'relative'
                        }}>
                          <div style={{
                            position: 'absolute',
                            left: '-2.35rem',
                            top: '0.25rem',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--teal)',
                            border: '3px solid white'
                          }}></div>
                          <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                          <p style={{ margin: 0 }}>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="chat-input" style={{
              padding: '1rem',
              display: 'flex',
              borderTop: '1px solid #eee'
            }}>
              <form onSubmit={handleSendMessage} style={{ display: 'flex', width: '100%' }}>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  style={{
                    flex: '1',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    marginRight: '0.5rem'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    backgroundColor: 'var(--teal)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="btn-container" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            <button 
              id="continue-btn" 
              className="btn"
              onClick={handleContinue}
              disabled={!animationComplete}
              style={{
                width: 'auto',
                opacity: animationComplete ? 1 : 0.5
              }}
            >
              Continue to Property Details
            </button>
          </div>
        </div>
    </MainLayout>
  );
};

export default AIIntroductionPage;
