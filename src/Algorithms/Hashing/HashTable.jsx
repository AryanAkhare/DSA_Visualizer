import { useState } from 'react';

const HashTable = ({ size }) => {
  const [table, setTable] = useState(Array(size).fill(null));
  const [colors, setColors] = useState(Array(size).fill(''));
  const [inputValue, setInputValue] = useState('');
  const [collisionMessage, setCollisionMessage] = useState('');
  const [hashCalculation, setHashCalculation] = useState('');
  const [collisionCalculations, setCollisionCalculations] = useState([]);

  const hashFunction = (key, attempt) => {
    return ((key % size) + attempt * attempt) % size;
  };

  const insertValue = (value) => {
    let attempt = 0;
    let index;
    let inserted = false;
    const currentCollisionCalculations = [];

    while (attempt < size && !inserted) {
      index = hashFunction(value, attempt);
      const hashCalc = `${value} % ${size} + (${attempt}^2) = ${index}`;
      setHashCalculation(hashCalc);

      const newColors = [...colors];
      newColors[index] = 'yellow';
      setColors(newColors);

      if (table[index] === null) {
        const newTable = [...table];
        newTable[index] = value;
        newColors[index] = 'green';
        setTable(newTable);
        setColors(newColors);
        setCollisionMessage(`Value ${value} inserted at index ${index}`);
        inserted = true;
      } else {
        const collisionCalc = `Collision at index ${index} for value ${table[index]}`;
        currentCollisionCalculations.push(collisionCalc);
        newColors[index] = 'red';
        setColors(newColors);
        setCollisionMessage(`Collision at index ${index}! Trying the next index...`);
        attempt++;
      }

      setTimeout(() => {
        newColors[index] = '';
        setColors(newColors);
      }, 500);
    }

    if (!inserted) {
      setCollisionMessage(`Hash table is full. Could not insert ${value}.`);
    }

    setCollisionCalculations((prev) => [...prev, ...currentCollisionCalculations]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(inputValue, 10);

    if (!isNaN(value) && value >= 0) {
      insertValue(value);
    } else {
      setCollisionMessage('Please enter a non-negative integer.');
    }

    setInputValue('');
  };

  const resetTable = () => {
    setTable(Array(size).fill(null));
    setColors(Array(size).fill(''));
    setInputValue('');
    setCollisionMessage('');
    setHashCalculation('');
    setCollisionCalculations([]);
  };

  return (
    <div className="hash-container">
      <style>{`
        .hash-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: transparent;
          border-radius: 16px;
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
          gap: 20px; /* Adds space between Insert and Reset buttons */
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

        .hash-operations button:nth-child(1):not(:disabled):hover {
          background-color: #4caf50;
        }

        .hash-operations button:nth-child(2):not(:disabled):hover {
          background-color: #f44336;
        }

        .hash-visual {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          justify-items: center;
          padding: 20px;
          border: 2px solid #4caf50;
          border-radius: 15px;
          background-color: var(--text-main, #FFFFFF);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 550px;
        }

        .hash-cell {
          width: 50px;
          height: 50px;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255,255,255,0.05);
          transition: background-color 0.5s, transform 0.5s;
        }

        .hash-cell.green {
          background-color: #4caf50;
        }

        .hash-cell.yellow {
          background-color: #ffeb3b;
        }

        .hash-cell.red {
          background-color: #f44336;
        }

        .collision-message {
          margin-top: 20px;
          font-weight: bold;
          color: #ff0000;
        }

        .hash-calculation {
          margin-top: 20px;
          font-weight: bold;
          color: var(--text-main, #FFFFFF);
        }

        .hash-function-details {
          margin-top: 30px;
          font-size: 14px;
          color: var(--text-main, #FFFFFF);
          text-align: left;
        }

        .hash-function-details p {
          margin: 5px 0;
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
        h3
        {
        font-size:19px;
        }

.hash-function-details{
font-size:17px;
}
      `}
      </style>

      <div className="hash-box">
        <h2>Hash Table with Quadratic Probing</h2>
        <div className="hash-operations">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a non-negative number"
            required
          />
          <div className="button-group">
            <button onClick={handleSubmit}>Insert</button>
            <button type="button" onClick={resetTable}>Reset</button>
          </div>
        </div>

        <div className="hash-visual">
          {table.map((value, index) => (
            <div
              key={index}
              className={`hash-cell ${colors[index]}`}
            >
              {value !== null ? value : ' '}
            </div>
          ))}
        </div>

        <div className="collision-message">{collisionMessage}</div>
        <div className="hash-calculation">{hashCalculation}</div>

        <div className="hash-function-details">
          <h3>Hash Function Used:</h3>
          <p><strong>Formula:</strong> (key % size) + (attempt²) % size</p>
          <p><strong>key:</strong> The value being inserted into the hash table.</p>
          <p><strong>size:</strong> The size of the hash table (total number of slots).</p>
          <p><strong>attempt:</strong> The current attempt number for resolving collisions (starts at 0 and increments).</p>
        </div>
      </div>
    </div>
  );
};

export default HashTable;
