import React, { useState, useEffect } from "react";

const Visualization_Sort = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [delay, setDelay] = useState(100);
  const [hasPressedStop, setHasPressedStop] = useState(false);
  const [sortedIndexes, setSortedIndexes] = useState(new Set());
  const [comparedIndexes, setComparedIndexes] = useState([]);

  useEffect(() => {
    createNewArray(20);
  }, []);

  const createNewArray = (noOfBars = 20) => {
    const newArray = Array.from({ length: noOfBars }, () =>
      Math.floor(Math.random() * 251) + 20
    );
    setArray(newArray);
    setSortedIndexes(new Set());
    setComparedIndexes([]);
    setIsSorting(false);
  };

  const delayTime = (milisec) => {
    return new Promise((resolve) => setTimeout(resolve, milisec));
  };

  const merge = async (low, mid, high) => {
    const left = array.slice(low, mid + 1);
    const right = array.slice(mid + 1, high + 1);
    let i = 0;
    let j = 0;
    let k = low;

    while (i < left.length && j < right.length) {
      if (hasPressedStop) return;
      setComparedIndexes([k, j + mid + 1]);
      await delayTime(delay);
      if (left[i] <= right[j]) {
        array[k] = left[i];
        sortedIndexes.add(k);
        i++;
      } else {
        array[k] = right[j];
        sortedIndexes.add(k);
        j++;
      }
      setSortedIndexes(new Set(sortedIndexes));
      setArray([...array]);
      k++;
    }

    while (i < left.length) {
      if (hasPressedStop) return;
      setComparedIndexes([k, i + low]);
      await delayTime(delay);
      array[k] = left[i];
      sortedIndexes.add(k);
      setSortedIndexes(new Set(sortedIndexes));
      setArray([...array]);
      i++;
      k++;
    }

    while (j < right.length) {
      if (hasPressedStop) return;
      setComparedIndexes([k, j + mid + 1]);
      await delayTime(delay);
      array[k] = right[j];
      sortedIndexes.add(k);
      setSortedIndexes(new Set(sortedIndexes));
      setArray([...array]);
      j++;
      k++;
    }

    setComparedIndexes([]);
  };

  const mergeSort = async (l, r) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSort(l, m);
      await mergeSort(m + 1, r);
      await merge(l, m, r);
    }
  };

  const handleSort = async () => {
    setIsSorting(true);
    setHasPressedStop(false);
    await mergeSort(0, array.length - 1);
    setIsSorting(false);
  };

  return (
    <div className="sort-wrapper">
      <div className="sort-glass-card">
        <h2 className="sort-title">Merge Sort Visualizer</h2>
        
        <div className="sort-controls">
          <button className="action-btn" onClick={handleSort} disabled={isSorting}>
            Merge Sort
          </button>
          <button className="action-btn" onClick={() => createNewArray(20)} disabled={isSorting}>
            Reset Bars
          </button>
          
          <div className="slider-container">
            <span className="slider-label">Delay:</span>
            <input
              className="slider"
              type="range"
              min="10"
              max="1000"
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
              disabled={isSorting}
            />
            <span className="slider-value">{delay} ms</span>
          </div>
        </div>
        
        <div className="flex-container">
          {array.map((value, index) => {
            let barColor = "var(--bar-unsorted)";
            if (comparedIndexes.includes(index)) {
              barColor = "var(--bar-comparing)";
            } else if (sortedIndexes.has(index)) {
              barColor = "var(--bar-sorted)";
            }
            
            return (
              <div
                key={index}
                className="bar"
                style={{
                  background: barColor,
                  height: `${value * 1.5}px`,
                  boxShadow: comparedIndexes.includes(index) ? '0 0 15px rgba(255, 0, 127, 0.6)' : 'none'
                }}
              >
                <span className="bar-value">{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
        :root {
          --bar-unsorted: linear-gradient(to top, #2575fc, #6a11cb);
          --bar-comparing: linear-gradient(to top, #ff007f, #aa00ff);
          --bar-sorted: linear-gradient(to top, #45A29E, #66FCF1);
        }

        .sort-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          min-height: 100vh;
          font-family: var(--font-body, 'Inter');
        }

        .sort-glass-card {
          background-color: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 40px;
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
        }

        .sort-title {
          font-family: var(--font-heading, 'Outfit');
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sort-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          background: rgba(0, 0, 0, 0.2);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .action-btn {
          padding: 12px 25px;
          font-size: 15px;
          font-family: var(--font-heading, 'Outfit');
          font-weight: 600;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .action-btn:not(:disabled):hover {
          background: linear-gradient(135deg, #45A29E, #66FCF1);
          box-shadow: 0 8px 20px rgba(102, 252, 241, 0.3);
          border-color: transparent;
          transform: translateY(-2px);
        }

        .slider-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .slider-label {
          color: var(--text-muted, #C5C6C7);
          font-weight: bold;
        }

        .slider-value {
          color: var(--accent-cyan, #66FCF1);
          font-weight: bold;
          min-width: 60px;
        }

        .slider {
          -webkit-appearance: none;
          width: 150px;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          outline: none;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #66FCF1;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(102, 252, 241, 0.5);
        }

        .flex-container {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 450px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
          gap: 4px;
        }

        .bar {
          position: relative;
          width: 30px;
          min-height: 20px;
          border-radius: 6px 6px 0 0;
          transition: height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .bar-value {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.8);
          font-weight: bold;
          font-size: 12px;
          font-family: monospace;
        }
      `}
      </style>
    </div>
  );
};

export default Visualization_Sort;
