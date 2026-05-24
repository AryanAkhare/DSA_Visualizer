import { useState, useEffect } from 'react';

const hashFunction = (value, size) => {
  return value % size; // Simple modulo hash function
};

const HashingChaining = () => {
  const [hashTable, setHashTable] = useState(new Array(10).fill(null).map(() => []));
  const [userInput, setUserInput] = useState(''); // For the user's input
  const [dataItems, setDataItems] = useState([]); // Array to hold entered values
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [latestValue, setLatestValue] = useState(null); // Track the most recently added value

  useEffect(() => {
    if (dataItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < dataItems.length - 1) {
          const nextIndex = prevIndex + 1;
          const value = dataItems[nextIndex];
          const hashedIndex = hashFunction(value, hashTable.length);
          const newTable = [...hashTable];
          newTable[hashedIndex] = [...newTable[hashedIndex], value]; // Insert into chain
          setHashTable(newTable);
          setLatestValue(value); // Update the latest value
          return nextIndex;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 1000); // 1-second delay for each move

    return () => clearInterval(interval);
  }, [dataItems, hashTable]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(userInput);
    if (!isNaN(value)) {
      setDataItems((prevItems) => [...prevItems, value]);
      setUserInput('');
    }
  };

  const handleReset = () => {
    setHashTable(new Array(10).fill(null).map(() => [])); // Reset the hash table
    setDataItems([]); // Clear all data items
    setCurrentIndex(-1); // Reset current index
    setLatestValue(null); // Reset latest value
  };

  return (
    <div className="hash-container">
      <style>{`
        .hash-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          background-color: transparent;
          border-radius: 16px;
          position: relative;
          padding: 20px;
        }

        h2 {
          font-size: 36px;
          font-weight: 600;
          color: var(--text-main, #FFFFFF);
          margin-bottom: 25px;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hash-box {
          background-color: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
          width: 550px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hash-operations {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
        }

        .hash-operations input {
          padding: 12px;
          font-size: 16px;
          background-color: transparent;
          color: var(--text-main, #FFFFFF);
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: border-color 0.3s;
          width: 100%;
          width: 240px;
          margin: 0 auto;
        }

        input:focus {
          outline: none;
          border-color: #4caf50;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        button {
          padding: 12px 20px;
          font-size: 16px;
          background-color: var(--text-main, #FFFFFF);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
        }

        button:disabled {
          cursor: not-allowed;
          background-color: #555;
          color: #ccc;
        }

        button:not(:disabled):hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .hash-table {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-height: 60vh; /* Limit the table height */
          overflow-y: auto; /* Enable vertical scrolling */
          margin-top: 20px;
          position: relative;
        }

        .hash-bucket {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          border: 2px solid #4caf50;
          border-radius: 8px;
          padding: 10px;
          margin-bottom: 10px;
          background-color: var(--text-main, #FFFFFF);
          color: white;
          flex-wrap: nowrap; /* Prevent wrapping */
          white-space: nowrap; /* No line breaks */
        }

        .bucket-index {
          font-weight: bold;
          font-size: 16px;
        }

        .bucket-chain {
          display: flex;
          gap: 8px;
          overflow-x: auto; /* Allow horizontal scrolling if chain is too long */
        }

        .chain-item {
          background-color: #4caf50;
          color: white;
          padding: 8px 15px;
          border-radius: 50px;
          font-weight: bold;
          transition: background-color 0.5s, transform 0.5s;
        }

        .chain-item.latest {
          background-color: #ffeb3b;
        }

        .empty-bucket {
          font-size: 12px;
          color: #aaa;
        }

        .reset-button {
          background-color: #f44336;
        }
      `}</style>

      <div className="hash-box">
        <h2>Hashing with Separate Chaining</h2>
        <div className="hash-operations">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter value"
          />
          <div className="button-group">
            <button onClick={handleSubmit}>Add</button>
            <button className="reset-button" onClick={handleReset}>Reset</button>
          </div>
        </div>

        <div className="hash-table">
          {hashTable.map((bucket, index) => (
            <div className="hash-bucket" key={index}>
              <div className="bucket-index">{index}</div>
              <div className="bucket-chain">
                {bucket.length > 0 ? (
                  bucket.map((item, i) => (
                    <div
                      key={i}
                      className={`chain-item ${item === latestValue ? 'latest' : ''}`}
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="empty-bucket">Empty</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HashingChaining;
