import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { MdLock } from 'react-icons/md';
import { motion } from 'framer-motion';

const PasswordHashingVisualization = () => {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');

  const hashPassword = (text) => {
    return CryptoJS.SHA256(text).toString();
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setPassword(text);
    setHashedPassword(hashPassword(text));
  };

  const clearInput = () => {
    setPassword('');
    setHashedPassword('');
  };

  return (
    <div className="hash-wrapper">
      <style>{`
        .hash-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          min-height: 100vh;
          font-family: var(--font-body, 'Inter');
        }

        .hash-glass-card {
          background-color: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 40px;
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
        }

        .hash-title {
          font-family: var(--font-heading, 'Outfit');
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .input-container {
          position: relative;
          margin-bottom: 20px;
          width: 100%;
        }

        .lock-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--accent-cyan, #66FCF1);
          font-size: 24px;
        }

        .hash-input {
          width: 100%;
          padding: 15px 15px 15px 50px;
          font-size: 16px;
          font-family: var(--font-body, 'Inter');
          background: rgba(0, 0, 0, 0.2);
          color: var(--text-main, #FFFFFF);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .hash-input:focus {
          outline: none;
          border-color: #66FCF1;
          box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
        }

        .clear-btn {
          width: 100%;
          padding: 15px;
          font-size: 16px;
          font-family: var(--font-heading, 'Outfit');
          font-weight: 600;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 30px;
        }

        .clear-btn:hover {
          background: linear-gradient(135deg, #ff007f, #aa00ff);
          box-shadow: 0 8px 20px rgba(170, 0, 255, 0.3);
          border-color: transparent;
          transform: translateY(-2px);
        }

        .hash-output-card {
          background: rgba(0, 0, 0, 0.2);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 20px;
        }

        .subheading {
          font-size: 14px;
          color: var(--accent-cyan, #66FCF1);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hash-display {
          background: rgba(255, 255, 255, 0.03);
          padding: 15px;
          border-radius: 8px;
          font-family: monospace;
          color: var(--text-main, #FFFFFF);
          word-break: break-all;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hash-display:last-child {
          margin-bottom: 0;
        }

        .hash-note {
          background: linear-gradient(135deg, rgba(102, 252, 241, 0.1), rgba(170, 0, 255, 0.1));
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(102, 252, 241, 0.2);
        }

        .hash-note h3 {
          margin-top: 0;
          color: var(--accent-cyan, #66FCF1);
          font-family: var(--font-heading, 'Outfit');
          margin-bottom: 10px;
        }

        .hash-note p {
          margin: 0;
          color: var(--text-muted, #C5C6C7);
          line-height: 1.5;
          font-size: 14px;
        }
      `}</style>

      <motion.div 
        className="hash-glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hash-title">Password Hashing</h1>
        
        <div className="input-container">
          <MdLock className="lock-icon" />
          <input
            type="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="hash-input"
          />
        </div>
        
        <button className="clear-btn" onClick={clearInput}>
          Clear
        </button>
        
        <div className="hash-output-card">
          <h2 className="subheading">Original Password:</h2>
          <div className="hash-display">
            {password ? password : <span style={{ opacity: 0.5 }}>No password entered</span>}
          </div>
          
          <h2 className="subheading">SHA-256 Hash:</h2>
          <motion.div 
            className="hash-display"
            key={hashedPassword}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{ color: hashedPassword ? '#aa00ff' : 'var(--text-main, #FFFFFF)' }}
          >
            {hashedPassword || <span style={{ opacity: 0.5 }}>Hash will appear here</span>}
          </motion.div>
        </div>
        
        <div className="hash-note">
          <h3>Why Hash Passwords?</h3>
          <p>
            Hashing is a one-way mathematical function. It ensures that even if someone gains access to the database, 
            they won't see your actual password, only its hashed representation.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordHashingVisualization;
