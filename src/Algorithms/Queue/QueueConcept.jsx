import React, { useState } from 'react';
import dummyimages from '../../assets/dummy.webp';
import enq1 from '../../assets/QueueImages/enq1.webp';
import enq2 from '../../assets/QueueImages/enq2.webp';
import enq3 from '../../assets/QueueImages/enq3.webp';
import enq4 from '../../assets/QueueImages/enq4.webp';
import enq5 from '../../assets/QueueImages/enq5.webp';
import enq6 from '../../assets/QueueImages/enq6.webp';

import deq1 from '../../assets/QueueImages/deq1.webp';
import deq2 from '../../assets/QueueImages/deq2.webp';
import deq3 from '../../assets/QueueImages/deq3.webp';
import deq4 from '../../assets/QueueImages/deq4.webp';
import deq5 from '../../assets/QueueImages/deq5.webp';
import deq6 from '../../assets/QueueImages/deq6.webp';

import img1 from '../../assets/QueueImages/queueConcept1.webp';
import img2 from '../../assets/QueueImages/queueConcept2.webp';
import img3 from '../../assets/QueueImages/queueConcept3.webp';
import img4 from '../../assets/QueueImages/queueConcept4.webp';

const QueueConcept = () => {
    const [enqIndex, setEnqIndex] = useState(0);
    const [deqIndex, setDeqIndex] = useState(0);

    const enqueueImages = [enq1, enq2, enq3, enq4, enq5, enq6];
    const dequeueImages = [deq1, deq2, deq3, deq4, deq5, deq6];

    const nextEnqueueImage = () => {
        setEnqIndex((prevIndex) => (prevIndex + 1) % enqueueImages.length);
    };

    const prevEnqueueImage = () => {
        setEnqIndex((prevIndex) => (prevIndex - 1 + enqueueImages.length) % enqueueImages.length);
    };

    const nextDequeueImage = () => {
        setDeqIndex((prevIndex) => (prevIndex + 1) % dequeueImages.length);
    };

    const prevDequeueImage = () => {
        setDeqIndex((prevIndex) => (prevIndex - 1 + dequeueImages.length) % dequeueImages.length);
    };

    const headingStyle = {
        marginTop: '0',
        fontWeight: '700',
        fontSize: '40px',
        marginBottom: '10px',
    };

    const subHeadingStyle = {
        marginTop: '20px',
        fontWeight: '700',
        fontSize: '25px',
        marginBottom: '20px',
        };

    const h3HeadingStyle = {
        color: '#4CAF50',
        margin: '20px 0',
    };

    const listStyle = {
        fontWeight: 400,
        lineHeight: '1.6',            
        marginBottom: '8px',          
        color: 'var(--text-main, #FFFFFF)',                
        listStyleType: 'disc',        
        paddingLeft: '20px',          
    };

    const ing = {
        maxWidth: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
        padding: '0px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        height: '400px',
        width: 'auto',
    };

    const imageContainerStyle = {
        margin:'20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '2px solid #333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '400px',
        
        backgroundColor: '#f9f9f9'
        
        
    };
    const sub={
        marginTop: '20px',
        fontWeight: '700',
        fontSize: '21px',
        marginBottom: '10px',
        };

    const buttonStyle = {
        margin: '5px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
    };
    const content={
        marginLeft: '20px',
        padding: '20px',
        fontSize: '21px'
        };
        const para={
            fontWeight: '400',
        }

    return (
        <div style={content}>
            <h1 style={headingStyle}>Queue Data Structure</h1>
            <p style ={para}>Queue Data Structure is a linear data structure that follows <b>FIFO (First In First Out)</b>  Principle, so the first element inserted is the first to be popped out. In this article, we will cover all the basics of Queue, Operations on Queue, its implementation, advantages, disadvantages which will help you solve all the problems based on Queue.</p>

            <h2 style={subHeadingStyle}>What is Queue Data Structure?</h2>
            <p style ={para}>Queue Data Structure is a linear data structure that is open at both ends and the operations are performed in <b>FIFO (First In First Out)</b> order.</p>

            <img src={img1} alt="Queue" style={ing} />
            <h3 style={sub}>FIFO Principle of Queue Data Structure:</h3>
            <ul style={listStyle}>
                <li>A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served.</li>
                <li>The first entry removed is called the front of the queue, and the last entry added is called the rear.</li>
            </ul>
            <img src={img2} alt="fifo" style={ing} />

            <h2 style={subHeadingStyle}>Representation of Queue Data Structure:</h2>
            <img src={img3} alt="rep" style={ing} />

            <h2 style={subHeadingStyle}>Types of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <img src={img4} alt="Queue types" style={ing} />
                <li><b>Simple Queue:</b> Follows FIFO, insertion at the back, deletion from the front.</li>
                <li><b>Double-Ended Queue (Dequeue):</b> Insertions and deletions can be done from both ends.</li>
                <li><b>Priority Queue:</b> Elements are accessed based on priority.</li>
            </ul>

            <h2 style={subHeadingStyle}>Basic Operations in Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li><b>Enqueue:</b> Adds an element to the end of the queue.</li>
                <li><b>Dequeue:</b> Removes the front element.</li>
                <li><b>Front:</b> Returns the front element without removing it.</li>
                <li><b>Rear:</b> Returns the rear element without removing it.</li>
                <li><b>isEmpty:</b> Checks if the queue is empty.</li>
                <li><b>isFull:</b> Checks if the queue is full.</li>
            </ul>

            <h3 style={sub}>1. Enqueue Operation:</h3>
            <p style ={para}>Enqueue adds an element to the end of the queue. The following steps outline the algorithm:</p>
            <ul style={listStyle}>
                <li><b>Step 1:</b> Check if the queue is full.</li>
                <li><b>Step 2:</b> Increment the rear pointer and add the element at the rear.</li>
            </ul>

            <div style={imageContainerStyle}>
                <img src={enqueueImages[enqIndex]} alt={`enq${enqIndex + 1}`} />
                <div>
                    <button onClick={prevEnqueueImage} style={buttonStyle}>Previous Enqueue</button>
                    <button onClick={nextEnqueueImage} style={buttonStyle}>Next Enqueue</button>
                </div>
            </div>

            <h3 style={sub}>2. Dequeue Operation:</h3>
            <p style ={para}>Dequeue removes an element from the front of the queue. The following steps outline the algorithm:</p>
            <ul style={listStyle}>
                <li><b>Step 1:</b> Check if the queue is empty.</li>
                <li><b>Step 2:</b> Increment the front pointer and remove the element.</li>
            </ul>

            <div style={imageContainerStyle}>
                <img src={dequeueImages[deqIndex]} alt={`deq${deqIndex + 1}`} style={ing} />
                <div>
                    <button onClick={prevDequeueImage} style={buttonStyle}>Previous Dequeue</button>
                    <button onClick={nextDequeueImage} style={buttonStyle}>Next Dequeue</button>
                </div>
            </div>
             <h3 style={sub}>3. Front Operation:</h3>
            <p style ={para}>Returns the front element without removing it.</p>

            <h3 style={sub}>4. Rear Operation:</h3>
            <p style ={para}>Returns the last element (rear) without removing it.</p>

            <h3 style={sub}>5. isEmpty Operation:</h3>
            <p style ={para}>Returns true if the queue is empty, false otherwise.</p>

            <h3 style={sub}>6. isFull Operation:</h3>
            <p style ={para}>Returns true if the queue is full, false otherwise.</p>

            <h2 style={subHeadingStyle}>Applications of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li>Queue is commonly used in computer systems, where tasks are waiting for resources like printers, disk storage, or CPU in time-sharing systems.</li>
                <li>Within a program, multiple requests can be kept in a queue, and tasks created by other tasks can be queued for execution.</li>
                <li>Queue is used in job scheduling, such as Printer Spooling.</li>
                <li>Queues are effective when multiple consumers need to access a single resource.</li>
                <li>In networks, queues are utilized in devices like routers, switches, and mail queues.</li>
                <li>Queue is also used in algorithms like Breadth-First Search (BFS) and Topological Sort.</li>
            </ul>


            <h2 style={subHeadingStyle}>Advantages of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li>A large amount of data can be managed efficiently with ease.</li>
                <li>Operations like insertion and deletion are simple due to the <b>FIFO (First In First Out)</b> rule.</li>
                <li>Queues are useful when multiple consumers need to use a particular service.</li>
                <li>Queues offer fast performance for inter-process communication.</li>
                <li>Queues can be used in the implementation of other data structures.</li>
            </ul>


            <h2 style={subHeadingStyle}>Disadvantages of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li>Operations such as inserting or deleting elements from the middle are time-consuming.</li>
                <li>Searching for an element takes <b>O(n)</b>  time.</li>
                <li>The maximum size of a queue must be predefined in the case of array-based implementations.</li>
</ul>
        </div>
    );
};

export default QueueConcept;
