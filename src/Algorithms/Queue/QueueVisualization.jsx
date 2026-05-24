import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QueueVisualization = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');
  const maxSize = 5;

  const handleEnqueue = () => {
    if (queue.length < maxSize && input !== '') {
      setQueue([...queue, { id: Date.now(), value: input }]);
      setInput('');
    }
  };

  const handleDequeue = () => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      newQueue.shift();
      setQueue(newQueue);
    }
  };

  const handleFront = () => {
    if (queue.length > 0) {
      alert(`Front element: ${queue[0].value}`);
    }
  };

  const handleRear = () => {
    if (queue.length > 0) {
      alert(`Rear element: ${queue[queue.length - 1].value}`);
    }
  };

  const isEmpty = () => queue.length === 0;
  const isFull = () => queue.length === maxSize;

  return (
    <div className="queue-wrapper">
       <style>{`
        .queue-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          min-height: 100vh;
          font-family: var(--font-body, 'Inter');
        }

        .queue-glass-card {
          background-color: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 40px;
          width: 100%;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .queue-title {
          font-family: var(--font-heading, 'Outfit');
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .queue-controls {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          margin-bottom: 40px;
        }

        .queue-input {
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

        .queue-input:focus {
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

        .enqueue-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #45A29E, #66FCF1);
          box-shadow: 0 8px 20px rgba(102, 252, 241, 0.3);
        }

        .dequeue-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #aa00ff, #ff007f);
          box-shadow: 0 8px 20px rgba(170, 0, 255, 0.3);
        }

        .front-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #2575fc, #6a11cb);
          box-shadow: 0 8px 20px rgba(37, 117, 252, 0.3);
        }

        .rear-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #fceb00, #ff8a00);
          box-shadow: 0 8px 20px rgba(255, 138, 0, 0.3);
        }

        .queue-visualization-area {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          max-width: 500px;
          height: 120px;
          padding: 15px;
          border-top: 4px solid rgba(102, 252, 241, 0.5);
          border-bottom: 4px solid rgba(102, 252, 241, 0.5);
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 0 20px rgba(102, 252, 241, 0.05), 0 10px 30px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
          gap: 15px;
        }

        .queue-item-capsule {
          background: linear-gradient(135deg, var(--accent-purple, #aa00ff), var(--accent-cyan, #66FCF1));
          color: white;
          width: 70px;
          height: 70px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .queue-item-front {
          background: linear-gradient(135deg, #2575fc, #6a11cb);
          box-shadow: 0 0 15px rgba(37, 117, 252, 0.5);
        }

        .queue-item-rear {
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
      
    <div className="queue-glass-card">
      <h2 className="queue-title">Queue Visualization</h2>
      
      <div className="queue-controls">
        <input
          className="queue-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          onKeyDown={(e) => e.key === 'Enter' && handleEnqueue()}
        />
        <div className="btn-group">
          <button className="action-btn enqueue-btn" onClick={handleEnqueue} disabled={isFull()}>Enqueue</button>
          <button className="action-btn dequeue-btn" onClick={handleDequeue} disabled={isEmpty()}>Dequeue</button>
          <button className="action-btn front-btn" onClick={handleFront} disabled={isEmpty()}>Front</button>
          <button className="action-btn rear-btn" onClick={handleRear} disabled={isEmpty()}>Rear</button>
        </div>
      </div>

      <div className="queue-visualization-area">
        <AnimatePresence>
          {queue.map((item, index) => {
            const isFront = index === 0;
            const isRear = index === queue.length - 1;
            let capsuleClass = "queue-item-capsule";
            if (isFront) capsuleClass += " queue-item-front";
            else if (isRear) capsuleClass += " queue-item-rear";

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={capsuleClass}
              >
                {item.value}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {queue.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="empty-placeholder"
          >
            Queue is empty
          </motion.div>
        )}
      </div>

      <div className="status-bar">
        <div className="status-badge">Empty: <span>{isEmpty() ? 'Yes' : 'No'}</span></div>
        <div className="status-badge">Full: <span>{isFull() ? 'Yes' : 'No'}</span></div>
        <div className="status-badge">Size: <span>{queue.length} / {maxSize}</span></div>
      </div>
    </div>
  </div>
  );
};

export default QueueVisualization;
