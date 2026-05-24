import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TowerofHanoi = ({ numDisks = 4 }) => {
  const [towers, setTowers] = useState([[], [], []]);
  const [moves, setMoves] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    resetTowers();
  }, [numDisks]);

  const resetTowers = () => {
    const initialTowers = [[], [], []];
    for (let i = numDisks; i >= 1; i--) {
      initialTowers[0].push(i);
    }
    setTowers(initialTowers);
    setMoves([]);
    setCurrentMoveIndex(0);
    generateMoves(numDisks, 0, 2, 1);
  };

  const generateMoves = (n, from, to, aux) => {
    if (n === 1) {
      setMoves((prevMoves) => [...prevMoves, { from, to }]);
    } else {
      generateMoves(n - 1, from, aux, to);
      setMoves((prevMoves) => [...prevMoves, { from, to }]);
      generateMoves(n - 1, aux, to, from);
    }
  };

  const moveDisk = (from, to) => {
    const newTowers = [...towers];
    const disk = newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);
  };

  useEffect(() => {
    if (isAnimating && currentMoveIndex < moves.length) {
      const { from, to } = moves[currentMoveIndex];
      moveDisk(from, to);
      setTimeout(() => {
        setCurrentMoveIndex((prev) => prev + 1);
        setIsAnimating(false);
      }, 800); // slightly longer for smooth animation to finish
    }
  }, [currentMoveIndex, isAnimating, moves]);

  const nextMove = () => {
    if (currentMoveIndex < moves.length && !isAnimating) {
      setIsAnimating(true);
    }
  };

  const previousMove = () => {
    if (currentMoveIndex > 0 && !isAnimating) {
      const { from, to } = moves[currentMoveIndex - 1];
      const newTowers = [...towers];
      const disk = newTowers[to].pop();
      newTowers[from].push(disk);
      setTowers(newTowers);
      setCurrentMoveIndex((prev) => prev - 1);
    }
  };

  const retry = () => {
    resetTowers();
  };

  const totalMoves = Math.pow(2, numDisks) - 1;

  return (
    <div className="monoStackContainer">
      <div className='cont'>
        <div className="hanoi-container">
          <style>{`
            .cont {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: var(--font-body, 'Inter');
            }
            .hanoi-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: rgba(255, 255, 255, 0.03);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
              padding: 40px;
              width: 100%;
              max-width: 650px; 
              margin: 30px 0;
            }

            .hanoi-head{
              font-family: var(--font-heading, 'Outfit');
              font-size: 36px;
              font-weight: 800;
              margin-bottom: 30px;
              text-align: center;
              background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .hanoi-towers {
              display: flex;
              justify-content: space-around; 
              width: 100%;
              margin-bottom: 30px;
              align-items: flex-end;
              height: 250px;
            }

            .hanoi-tower {
              width: 140px;
              height: 220px;
              position: relative;
              display: flex;
              flex-direction: column-reverse;
              align-items: center;
              margin: 0 10px;
            }

            .hanoi-rod {
              position: absolute;
              bottom: 0;
              width: 12px;
              height: 100%;
              background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(102, 252, 241, 0.6) 100%);
              border-radius: 10px 10px 0 0;
              z-index: 0;
              box-shadow: 0 0 10px rgba(102, 252, 241, 0.3);
            }
            
            .hanoi-base {
              position: absolute;
              bottom: -10px;
              width: 100%;
              height: 10px;
              background: rgba(102, 252, 241, 0.3);
              border-radius: 5px;
              box-shadow: 0 0 15px rgba(102, 252, 241, 0.4);
            }

            .hanoi-disk {
              background: linear-gradient(135deg, var(--accent-purple, #aa00ff), var(--accent-cyan, #66FCF1));
              color: white;
              height: 30px;
              margin-bottom: 2px;
              border-radius: 15px;
              font-weight: bold;
              text-align: center;
              display: flex; 
              justify-content: center; 
              align-items: center; 
              z-index: 1;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }

            .hanoi-info {
              color: var(--text-muted, #C5C6C7);
              font-size: 16px;
              margin-bottom: 10px;
              font-weight: 500;
            }

            .hanoi-controls {
              display: flex;
              justify-content: space-between; 
              gap: 15px;
              width: 100%; 
              margin-top: 20px;
            }

            .monoStackButton {
              padding: 12px 20px;
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
              flex: 1; 
            }

            .monoStackButton:disabled {
              cursor: not-allowed;
              opacity: 0.4;
            }

            .monoStackButton:not(:disabled):hover {
              transform: translateY(-2px);
              background: linear-gradient(135deg, var(--accent-teal, #45A29E), var(--accent-cyan, #66FCF1));
              border-color: transparent;
              box-shadow: 0 8px 20px rgba(102, 252, 241, 0.3);
            }

            .monoStackButton:nth-child(3):not(:disabled):hover {
               background: linear-gradient(135deg, #aa00ff, #ff007f);
               box-shadow: 0 8px 20px rgba(170, 0, 255, 0.3);
            }
          `}</style>

          <h2 className="hanoi-head">Interactive Visualizer</h2>
          
          <div className="hanoi-towers">
            {towers.map((tower, towerIndex) => (
              <div key={towerIndex} className="hanoi-tower">
                <div className="hanoi-rod"></div>
                <div className="hanoi-base"></div>
                {tower.map((disk) => (
                  <motion.div
                    key={`disk-${disk}`}
                    layoutId={`disk-${disk}`}
                    className="hanoi-disk"
                    style={{ width: `${disk * 25 + 40}px` }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {disk}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          
          <p className="hanoi-info">
            Total steps required: <span style={{ color: '#66FCF1' }}>{totalMoves}</span>
          </p>
          <p className="hanoi-info">
            Steps left: <span style={{ color: '#aa00ff' }}>{totalMoves - currentMoveIndex}</span>
          </p>

          <div className="hanoi-controls">
            <button className="monoStackButton" onClick={previousMove} disabled={currentMoveIndex === 0 || isAnimating}>
              Previous
            </button>
            <button className="monoStackButton" onClick={nextMove} disabled={currentMoveIndex === moves.length || isAnimating}>
              Next Step
            </button>
            <button className="monoStackButton" onClick={retry} disabled={isAnimating}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const headingStyle = {
  marginTop: '0',
  fontWeight: '800',
  fontSize: '40px',
  marginBottom: '10px',
  fontFamily: "var(--font-heading, 'Outfit')",
  background: 'linear-gradient(135deg, #ffffff 0%, #66FCF1 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const subHeadingStyle = {
  marginTop: '30px',
  fontWeight: '700',
  fontSize: '25px',
  marginBottom: '20px',
  textAlign: 'left',
  fontFamily: "var(--font-heading, 'Outfit')",
  color: 'var(--text-main, #FFFFFF)'
};

const listStyle = {
  fontWeight: 400,
  lineHeight: '1.6',
  marginBottom: '15px',
  color: 'var(--text-muted, #C5C6C7)',
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const content = {
  padding: '40px 20px',
  fontSize: '18px',
  color: 'var(--text-main, #FFFFFF)'
};

const para = {
  fontWeight: '400',
  color: 'var(--text-muted, #C5C6C7)',
  lineHeight: '1.7',
  marginBottom: '15px'
};

const MonoStack = () => {
  return (
    <div style={content}>
      <h1 style={headingStyle}>Tower of Hanoi</h1>
      <div>
        <div>
          <h2 style={subHeadingStyle}>Overview</h2>
          <p style={para}>
            The <b style={{color: '#66FCF1'}}>Tower of Hanoi</b> is a classic mathematical puzzle that involves three rods and a number of disks of different sizes. The <b>objective</b> is to move the entire stack of disks from one rod to another, following specific rules. This problem is often used to illustrate <b style={{color: '#aa00ff'}}>recursion</b> in programming and <b>algorithm design</b>.
          </p>

          <h2 style={subHeadingStyle}>Problem Description</h2>
          <ol style={listStyle}>
            <li>
              <b>Initial Setup</b>: The disks are stacked in ascending order on one rod (smallest on top).
            </li>
            <li style={{marginTop: '10px'}}>
              <b>Objective</b>: Move the stack of disks to another rod, following these rules:
              <ul style={{...listStyle, marginTop: '10px'}}>
                <li>Only <b>one disk</b> can be moved at a time.</li>
                <li>Each move consists of taking the <b>upper disk</b> from one of the stacks and placing it on top of another stack.</li>
                <li>No <b style={{color: '#ff007f'}}>larger disk</b> may be placed on top of a smaller disk.</li>
              </ul>
            </li>
          </ol>

          <h2 style={subHeadingStyle}>How it Works?</h2>
          <p style={para}>The solution to the Tower of Hanoi problem can be achieved using a <b>recursive algorithm</b>. Here’s a step-by-step explanation:</p>
          <ol style={listStyle}>
            <li>Move <b>n-1 disks</b> from the source rod to the auxiliary rod, using the destination rod as a temporary holding area.</li>
            <li>Move the <b>nth disk</b> from the source rod to the destination rod.</li>
            <li>Move the <b>n-1 disks</b> that were left on the auxiliary rod to the destination rod, using the source rod as a temporary holding area.</li>
          </ol>

          <h2 style={subHeadingStyle}>Visualizing Tower of Hanoi</h2>
          <div style={{ flex: 1 }}>
            <TowerofHanoi numDisks={4} />
          </div>

          <h2 style={subHeadingStyle}>Time Complexity</h2>
          <p style={para}>The <b>time complexity</b> of the Tower of Hanoi problem is <b style={{color: '#ff007f'}}>O(2^n)</b>, where n is the number of disks. This is because each move doubles the number of moves required for the next disk.</p>

        </div>
      </div>
    </div>
  );
};

export default MonoStack;
