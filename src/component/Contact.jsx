import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Replace with your actual PHP backend URL
      const response = await fetch('http://localhost/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      
      const data = await response.json();
      setMessage(data.message || `Thank you, ${name}! Message received successfully.`);
      setName('');
    } catch (error) {
      setMessage('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-form">
            <div className="form-group">
              <label className="label">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Enter your name"
              />
            </div>
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="submit-button"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {message && (
            <div 
              className="message-box"
              style={{
                backgroundColor: message.includes('Error') ? '#ff4444' : '#4caf50'
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;