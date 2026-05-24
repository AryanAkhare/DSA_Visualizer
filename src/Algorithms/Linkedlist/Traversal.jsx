import  { useState, useEffect } from 'react';
import AlertBox from './AlertBox'; // Adjust the path accordingly

const Traversal = () => {
    const [linkedList, setLinkedList] = useState([]);
    const [size, setSize] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [traversedNodes, setTraversedNodes] = useState(new Set()); // Track traversed nodes
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isTraversing, setIsTraversing] = useState(false);

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
        setCurrentIndex(0); // Reset current index for traversal
        setTraversedNodes(new Set()); // Reset traversed nodes
        setIsTraversing(false); // Stop traversal if it was already running
    };

    const handleTraverse = () => {
        if (linkedList.length === 0) {
            showAlertWithMessage("List is empty");
            return;
        }
        setIsTraversing(true);
    };

    useEffect(() => {
        let timer;
        if (isTraversing && currentIndex < linkedList.length) {
            timer = setTimeout(() => {
                setTraversedNodes((prev) => new Set(prev).add(currentIndex)); // Add current index to traversed nodes
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 1000); // Traverse every second
        } else if (currentIndex >= linkedList.length) {
            setIsTraversing(false);
        }
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, [isTraversing, currentIndex, linkedList]);

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
        currentNode: {
            backgroundColor: '#28a745', // Green for the current node
            color: 'white', // White text for better contrast
        },
        traversedNode: {
            backgroundColor: '#007bff', // Blue for traversed nodes
            color: 'white', // White text for better contrast
        },
        line: {
            position: 'absolute',
            height: '2px',
            backgroundColor: '#007bff',
            top: '50%',
            transform: 'translateY(-50%)', // Center the line vertically
        },
        input: {
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: 'white', // White text color
            backgroundcolor: 'var(--text-main, #FFFFFF)', // Dark background for contrast
        },
        button: {
            padding: '10px 15px',
            margin:'10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Linked List Traversal Visualization</h2>
            <div style={styles.subcontainer}>
                <input
                    type="number"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    min={1}
                    placeholder="Enter size of the list"
                    style={styles.input}
                />
                <button onClick={handleGenerateList} style={styles.button}>Generate List</button>
                <button onClick={handleTraverse} style={styles.button}>Start Traversal</button>
            </div>
            <div style={styles.visualization}>
                {linkedList.map((node, index) => (
                    <div 
                        key={index} 
                        style={{
                            ...styles.node,
                            ...(index === currentIndex ? styles.currentNode : {}),
                            ...(traversedNodes.has(index) ? styles.traversedNode : {}),
                        }}
                    >
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
                ))}
            </div>
            <div style={styles.visualization}>
                <h3>Current Node: {linkedList.length > 0 ? linkedList[currentIndex]?.value || 'N/A' : 'N/A'}</h3>
            </div>
            {showAlert && <AlertBox message={alertMessage} onClose={handleCloseAlert} />}
        </div>
    );
};

export default Traversal;
