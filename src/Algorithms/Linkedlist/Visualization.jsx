import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Visualization = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleAppend = () => {
    if (input !== '') {
      setList([...list, { id: Date.now(), value: input }]);
      setInput('');
    }
  };

  const handleRemove = () => {
    if (list.length > 0) {
      const newList = [...list];
      newList.pop();
      setList(newList);
    }
  };

  return (
    <div className="ll-wrapper">
      <style>{`
        .ll-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          min-height: 100vh;
          font-family: var(--font-body, 'Inter');
        }

        .ll-glass-card {
          background-color: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 40px;
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ll-title {
          font-family: var(--font-heading, 'Outfit');
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ll-controls {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          margin-bottom: 40px;
        }

        .ll-input {
          padding: 15px;
          font-size: 16px;
          font-family: var(--font-body, 'Inter');
          background: rgba(0, 0, 0, 0.2);
          color: var(--text-main, #FFFFFF);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          text-align: center;
          transition: all 0.3s ease;
        }

        .ll-input:focus {
          outline: none;
          border-color: #66FCF1;
          box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
        }

        .btn-group {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 12px 25px;
          font-size: 15px;
          font-family: var(--font-heading, 'Outfit');
          font-weight: 600;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:disabled {
          cursor: not-allowed;
          opacity: 0.4;
        }

        .action-btn:not(:disabled):hover {
          transform: translateY(-2px);
          border-color: transparent;
        }

        .append-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #45A29E, #66FCF1);
          box-shadow: 0 8px 20px rgba(102, 252, 241, 0.3);
        }

        .remove-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #aa00ff, #ff007f);
          box-shadow: 0 8px 20px rgba(170, 0, 255, 0.3);
        }

        .ll-visualization-area {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          min-height: 160px;
          padding: 20px;
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 0 20px rgba(102, 252, 241, 0.05);
          position: relative;
          overflow-x: auto;
          gap: 10px;
        }

        .ll-node-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .ll-node-capsule {
          background: linear-gradient(135deg, var(--accent-purple, #aa00ff), var(--accent-cyan, #66FCF1));
          color: white;
          width: 80px;
          height: 80px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          box-shadow: 0 4px 15px rgba(102, 252, 241, 0.3);
          border: 1px solid rgba(255,255,255,0.2);
          position: relative;
        }

        .ll-node-label {
          font-size: 10px;
          color: rgba(255,255,255,0.7);
          margin-top: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ll-arrow {
          margin: 0 15px;
          color: var(--accent-cyan, #66FCF1);
          font-size: 24px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.5; transform: scale(0.9); }
        }

        .empty-placeholder {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(255, 255, 255, 0.3);
          font-weight: 500;
          font-size: 16px;
        }
      `}</style>
      
      <div className="ll-glass-card">
        <h2 className="ll-title">Linked List Visualizer</h2>
        
        <div className="ll-controls">
          <input
            className="ll-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            onKeyDown={(e) => e.key === 'Enter' && handleAppend()}
          />
          <div className="btn-group">
            <button className="action-btn append-btn" onClick={handleAppend}>Append Node</button>
            <button className="action-btn remove-btn" onClick={handleRemove} disabled={list.length === 0}>Remove Tail</button>
          </div>
        </div>

        <div className="ll-visualization-area">
          <AnimatePresence mode="popLayout">
            {list.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -50, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="ll-node-wrapper"
              >
                <div className="ll-node-capsule">
                  <span>{item.value}</span>
                  <span className="ll-node-label">{index === 0 ? 'HEAD' : 'NODE'}</span>
                </div>
                {/* Arrow to next node (or null pointer at the end) */}
                <div className="ll-arrow">
                  {index === list.length - 1 ? '→ null' : '→'}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {list.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="empty-placeholder"
            >
              List is empty
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Visualization;