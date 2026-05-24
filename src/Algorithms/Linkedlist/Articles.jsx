

import React from 'react';
import img from '../../assets/LinkedListImages/linkedlist.webp';
import arlin from '../../assets/LinkedListImages/arrlin.png';
import tc from '../../assets/LinkedListImages/tc.png';
// Replace with actual image paths
// import img2 from './images/singlyLinkedList.png'; 
// import img3 from './images/doublyLinkedList.png'; 
// import img4 from './images/circularLinkedList.png'; 

const Articles = () => {
    const headingStyle = {
        marginTop: '0',
        fontWeight: '800',
        fontSize: '30px',
        marginBottom: '15px',
    };

    const subHeadingStyle = {
        marginTop: '30px',
        fontWeight: '800',
        fontSize: '20px',
        marginBottom: '10px',
    };

    const h3HeadingStyle = {
      marginTop: '20px',
      fontWeight: '700',
      fontSize: '19px',
      marginBottom: '10px',
    };

    const listStyle = {
        fontWeight: 400,
        lineHeight: '1.6',
        marginBottom: '8px',
        color: 'var(--text-main, #FFFFFF)',
        listStyleType: 'disc',
        paddingLeft: '20px',
    };

    const imgStyle = {
        maxWidth: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
        padding: '0px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        height: 'auto',
        width: 'auto',
    };

    const content = {
        marginLeft: '20px',
        padding: '20px',
        fontSize: '18px'
    };

    const para = {
        fontWeight: '400',
    };

    return (
        <div style={content}>
            <h1 style={headingStyle}>Introduction to Linked List</h1>
            {/* <p style={para}>Last Updated: 22 Oct, 2024</p> */}
            <p style={para}>
                A Linked List is a chain of nodes where each node contains information such as data and a pointer to the next node in the chain. It is a popular data structure with a wide range of real-world applications. Unlike arrays, linked list elements are not stored at contiguous locations. In a linked list, there is a head pointer, which points to the first element of the linked list, and if the list is empty, it simply points to null or nothing.
            </p>
            <p style={para}>
                In this article, we will provide a complete introduction to Linked Lists, which will help you tackle any problem based on Linked Lists.
            </p>

            <img src={img} alt="linkedlist" style={imgStyle} />

            <h2 style={subHeadingStyle}>Basic Terminologies of Linked List</h2>
            <ul style={listStyle}>
                <li><b>Head:</b> The head of a linked list is a pointer to the first node or reference of the first node of the linked list. This pointer marks the beginning of the linked list.</li>
                <li><b>Node:</b> A linked list consists of a series of nodes where each node has two parts: data and the next pointer.</li>
                <li><b>Data:</b> Data is the part of the node that stores the information in the linked list.</li>
                <li><b>Next Pointer:</b> The next pointer is the part of the node that points to the next node of the linked list.</li>
            </ul>

            <h2 style={subHeadingStyle}>Importance of Linked List</h2>
            <ul style={listStyle}>
                <li><b>Dynamic Data Structure:</b> Memory can be allocated or de-allocated at runtime based on the operations of insertion or deletion.</li>
                <li><b>Ease of Insertion/Deletion:</b> Insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion or deletion; just the address needs to be updated.</li>
                <li><b>Efficient Memory Utilization:</b> As a dynamic data structure, the size increases or decreases as per the requirement, avoiding wastage of memory.</li>
                <li><b>Implementation:</b> Various advanced data structures can be implemented using a linked list, such as stacks, queues, graphs, and hash maps.</li>
            </ul>

            <h2 style={subHeadingStyle}>Implementations of Basic Operations on Different Types of List</h2>
            <h3 style={h3HeadingStyle}>Singly Linked List</h3>
            <ul style={listStyle}>
                <li><b>Insertion:</b> Can be performed in three ways: 
                    <ul style={listStyle}l>
                      <li>At the Beginning</li>
                      <li>At a Specific Location</li>
                      <li>At the End</li>
                    </ul> 
                  </li>
                <li><b>Deletion:</b> Can be performed in three ways: 
                    <ul style={listStyle}>
                      <li>From the Beginning</li>
                      <li>From Specific Node</li>
                      <li>From the End</li>
                    </ul>
                </li>
                <li><b>Traverse:</b> Displays the elements of a Singly Linked List.</li>
                <li><b>Search:</b> Determines and retrieves a specific node from anywhere in the list.</li>
            </ul>

            <h3 style={h3HeadingStyle}>Doubly Linked List</h3>
            <ul style={listStyle}>
                <li><b>Insertion:</b> Can be performed in four ways:
                <ul style={listStyle}>
                      <li>At the Beginning</li>
                      <li>After a Given Node</li>
                      <li>At the End</li>
                      <li>Before a Given Node</li>
                    </ul></li>
                <li><b>Deletion:</b> Can be performed in three ways:
                <ul style={listStyle}>
                      <li>From the Beginning</li>
                      <li>From Specific Node</li>
                      <li>From the End</li>
                    </ul></li>
                <li><b>Display:</b> Displays the elements of a Doubly Linked List.</li>
            </ul>

            <h3 style={h3HeadingStyle}>Circular Linked List</h3>
            <ul style={listStyle}>
                <li><b>Insertion:</b> Can be performed in four ways:
                <ul style={listStyle}>
                  <li>In an Empty List</li>
                  <li>At the Beginning</li>
                  <li>At the End</li>
                  <li>In Between Nodes</li>
                </ul></li>
                <li><b>Deletion:</b> Can be performed in three ways:
                <ul style={listStyle}>
                      <li>From the Beginning</li>
                      <li>From Specific Node</li>
                      <li>From the End</li>
                    </ul></li>
                <li><b>Display:</b> Displays the elements of a Circular Linked List.</li>
            </ul>

            <h2 style={subHeadingStyle}>Linked List vs. Array:</h2>
            <img src={arlin} style={imgStyle} />


            <h2 style={subHeadingStyle}>Time Complexity Analysis of Linked List and Array:</h2>
            <img src={tc} style={imgStyle} />

            <h2 style={subHeadingStyle}>Applications of Linked Lists</h2>
            <ul style={listStyle}>
                <li>Used to implement dynamic memory allocation (e.g., malloc).</li>
                <li>Used in undo functionality in software (back and forward operations).</li>
                <li>Used in the implementation of various data structures like stacks, queues, and graphs.</li>
            </ul>

            <h2 style={subHeadingStyle}>Issues in Linked Lists</h2>
            <ul style={listStyle}>
                <li><strong>Memory Overhead:</strong> Extra memory is required for storing pointers, especially in doubly linked lists.</li>
                <li><strong>Traversal:</strong> Traversing a linked list is slower compared to arrays as elements are not stored contiguously.</li>
                <li><strong>Complexity:</strong> Insertion and deletion operations are more complex than in arrays.</li>
            </ul>

            
        </div>
    );
};

export default Articles;

