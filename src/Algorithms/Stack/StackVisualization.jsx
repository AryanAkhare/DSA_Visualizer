import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StackVisualization = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');
  const [isPopping, setIsPopping] = useState(false);
  const maxSize = 5;

  const handlePush = () => {
    if (stack.length < maxSize && input !== '') {
      setStack([...stack, { id: Date.now(), value: input }]);
      setInput('');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setIsPopping(true);
      setTimeout(() => {
        const newStack = [...stack];
        newStack.pop();
        setStack(newStack);
        setIsPopping(false);
      }, 500); // Wait for the pop animation before actually removing
    }
  };

  const handlePeek = () => {
    if (stack.length > 0) {
      alert(`Top element: ${stack[stack.length - 1].value}`);
    }
  };

  const isEmpty = () => stack.length === 0;
  const isFull = () => stack.length === maxSize;

  return (
    <div className="stack-wrapper">
      <style>{`
        .stack-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          min-height: 100vh;
          font-family: var(--font-body, 'Inter');
        }

        .stack-glass-card {
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
          align-items: center;
        }

        .stack-title {
          font-family: var(--font-heading, 'Outfit');
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stack-controls {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          margin-bottom: 40px;
        }

        .stack-input {
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

        .stack-input:focus {
          outline: none;
          border-color: #66FCF1;
          box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
        }

        .btn-group {
          display: flex;
          justify-content: center;
          gap: 15px;
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

        .push-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #45A29E, #66FCF1);
          box-shadow: 0 8px 20px rgba(102, 252, 241, 0.3);
        }

        .pop-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #aa00ff, #ff007f);
          box-shadow: 0 8px 20px rgba(170, 0, 255, 0.3);
        }

        .peek-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #2575fc, #6a11cb);
          box-shadow: 0 8px 20px rgba(37, 117, 252, 0.3);
        }

        .stack-visualization-area {
          display: flex;
          flex-direction: column-reverse; /* Bottom items stay at bottom */
          justify-content: flex-start;
          width: 200px;
          height: 350px;
          padding: 15px;
          border-left: 4px solid rgba(102, 252, 241, 0.5);
          border-right: 4px solid rgba(102, 252, 241, 0.5);
          border-bottom: 4px solid rgba(102, 252, 241, 0.5);
          border-radius: 0 0 15px 15px;
          background: rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 -10px 20px rgba(102, 252, 241, 0.05), 0 10px 30px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }

        .stack-item-capsule {
          background: linear-gradient(135deg, var(--accent-purple, #aa00ff), var(--accent-cyan, #66FCF1));
          color: white;
          padding: 12px;
          margin-top: 5px;
          border-radius: 12px;
          font-weight: bold;
          text-align: center;
          font-size: 18px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          width: 100%;
        }

        .stack-item-top {
          background: linear-gradient(135deg, #ff007f, #aa00ff);
          box-shadow: 0 0 15px rgba(255, 0, 127, 0.5);
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

        .status-bar {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .status-badge {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: var(--text-muted, #C5C6C7);
          font-size: 14px;
        }
        
        .status-badge span {
          color: #66FCF1;
          font-weight: bold;
        }
      `}</style>

      <div className="stack-glass-card">
        <h2 className="stack-title">Stack Visualizer</h2>
        
        <div className="stack-controls">
          <input
            className="stack-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            onKeyDown={(e) => e.key === 'Enter' && handlePush()}
          />
          <div className="btn-group">
            <button className="action-btn push-btn" onClick={handlePush} disabled={isFull()}>Push</button>
            <button className="action-btn pop-btn" onClick={handlePop} disabled={isEmpty() || isPopping}>Pop</button>
            <button className="action-btn peek-btn" onClick={handlePeek} disabled={isEmpty()}>Peek</button>
          </div>
        </div>

        <div className="stack-visualization-area">
          <AnimatePresence>
            {stack.map((item, index) => {
              const isTop = index === stack.length - 1;
              const isBeingPopped = isTop && isPopping;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: -100, scale: 0.8 }}
                  animate={{ 
                    opacity: isBeingPopped ? 0 : 1, 
                    y: isBeingPopped ? -100 : 0,
                    scale: 1
                  }}
                  exit={{ opacity: 0, y: -100, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`stack-item-capsule ${isTop && !isBeingPopped ? 'stack-item-top' : ''}`}
                >
                  {item.value}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {stack.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="empty-placeholder"
            >
              Stack is empty
            </motion.div>
          )}
        </div>

        <div className="status-bar">
          <div className="status-badge">Empty: <span>{isEmpty() ? 'Yes' : 'No'}</span></div>
          <div className="status-badge">Full: <span>{isFull() ? 'Yes' : 'No'}</span></div>
          <div className="status-badge">Size: <span>{stack.length} / {maxSize}</span></div>
        </div>
      </div>
    </div>
  );
};

export default StackVisualization;
