import { useState } from 'react';
import AlertBox from './AlertBox'; // Adjust the path accordingly

const Deletion = () => {
    const [linkedList, setLinkedList] = useState([]);
    const [position, setPosition] = useState('head'); // 'head', 'kth', 'tail'
    const [kth, setKth] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [size, setSize] = useState(0);

    // Function to generate a random linked list
    const generateRandomList = (size) => {
        const newList = [];
        for (let i = 0; i < size; i++) {
            newList.push({ value: Math.floor(Math.random() * 100) }); // Random value between 0 and 99
        }
        return newList;
    };

    const handleGenerateList = () => {
        if (size <= 0) {
            showAlertWithMessage("Please enter a valid size");
            return;
        }
        const newList = generateRandomList(size);
        setLinkedList(newList); // Set the generated list as the current linked list
        setKth(0); // Reset k-th position
    };

    const handleDelete = () => {
        if (linkedList.length === 0) {
            showAlertWithMessage("List is empty");
            return;
        }

        let newList = [...linkedList];

        // Deletion logic based on the selected position
        if (position === 'head') {
            newList.shift(); // Remove the head node
            showAlertWithMessage("Node deleted from head");
        } else if (position === 'tail') {
            newList.pop(); // Remove the tail node
            showAlertWithMessage("Node deleted from tail");
        } else if (position === 'kth') {
            if (kth < 0 || kth >= linkedList.length) {
                showAlertWithMessage("Invalid position");
                return;
            }
            newList.splice(kth, 1); // Remove node at k-th position
            showAlertWithMessage(`Node deleted from position ${kth}`);
        }

        setLinkedList(newList); // Update the linked list state
        setKth(0); // Reset k-th position
    };

    const showAlertWithMessage = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        setAlertMessage('');
    };

    // Inline CSS styles
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
            height:'100vh'
        },
        visualization: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            position: 'relative', // Relative positioning for connecting lines
        },
        node: {
            padding: '10px 20px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Position for absolute child elements
        },
        line: {
            position: 'absolute',
            height: '2px',
            backgroundColor: '#007bff',
            top: '50%',
            transform: 'translateY(-50%)', // Center the line vertically
        },
        select: {
            padding: '10px',
            margin: '0 5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color:'white'
        },
        input: {
            padding: '10px',
            margin: '0 5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: 'white', // White text color
            backgroundcolor: 'var(--text-main, #FFFFFF)',
        },
        button: {
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#dc3545',
            color: 'white',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Linked List Deletion Visualization</h2>
            <div>
                <input
                    type="number"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    min={1}
                    placeholder="Enter size of the list"
                    style={styles.input}
                />
                <button onClick={handleGenerateList} style={styles.button}>Generate List</button>
            </div>
            <div>
                <select value={position} onChange={(e) => setPosition(e.target.value)} style={styles.select}>
                    <option value="head">Delete from Head</option>
                    <option value="tail">Delete from Tail</option>
                    <option value="kth">Delete from K-th Position</option>
                </select>
                {position === 'kth' && (
                    <input
                        type="number"
                        value={kth}
                        onChange={(e) => setKth(Number(e.target.value))}
                        min={0}
                        placeholder="Enter position"
                        style={styles.select}
                    />
                )}
                <button onClick={handleDelete} style={styles.button}>Delete Node</button>
            </div>
            <div style={styles.visualization}>
                {linkedList.length === 0 ? (
                    <p>No nodes to display</p>
                ) : (
                    linkedList.map((node, index) => (
                        <div key={index} style={styles.node}>
                            {node.value}
                            {/* Render a connecting line after every node except the last */}
                            {index < linkedList.length - 1 && (
                                <div
                                    style={{
                                        ...styles.line,
                                        width: '50px', // Adjust width as needed
                                        left: '100%', // Start from the right of the current node
                                    }}
                                />
                            )}
                        </div>
                    ))
                )}
            </div>
            {showAlert && <AlertBox message={alertMessage} onClose={handleCloseAlert} />}
        </div>
    );
};

export default Deletion;
