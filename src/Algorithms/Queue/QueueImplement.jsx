import React from 'react';
import { useState } from 'react';
import img1 from '../../assets/QueueImages/qimp.webp';
import img2 from '../../assets/QueueImages/tcqueue.png';
import CodeCopy from '../../Components/Codecopy';

// Define styles
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

const listStyle = {
    fontWeight: 400,
    lineHeight: '1.6',
    marginBottom: '8px',
    color: 'var(--text-main, #FFFFFF)',
    listStyleType: 'disc',
    paddingLeft: '20px',
};
const contentStyle = {
    marginLeft: '20px',
    padding: '20px',
    fontSize: '21px'
};

const paraStyle = {
    fontWeight: '400',
};

const imgStyle = {
    maxWidth: '100%',
    height: '300px',
    marginBottom: '20px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
};
const ing = {
    maxWidth: '100%',
    marginBottom: '20px',
    borderRadius: '5px',
    
    backgroundColor: 'rgba(255,255,255,0.05)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    height:'400px',
    width:'auto',
    
    justifyContent: 'center',
    alignItems: 'center',
    
};
const sub={
    marginTop: '20px',
        fontWeight: '700',
        fontSize: '21px',
        marginBottom: '10px',
    };
    const code = `
    // C program for array implementation of queue
    #include <limits.h>
    #include <stdio.h>
    #include <stdlib.h>
    
    // A structure to represent a queue
    struct Queue {
        int front, rear, size;
        unsigned capacity;
        int* array;
    };
    
    // function to create a queue
    // of given capacity.
    // It initializes size of queue as 0
    struct Queue* createQueue(unsigned capacity)
    {
        struct Queue* queue = (struct Queue*)malloc(
            sizeof(struct Queue));
        queue->capacity = capacity;
        queue->front = queue->size = 0;
    
        // This is important, see the enqueue
        queue->rear = capacity - 1;
        queue->array = (int*)malloc(
            queue->capacity * sizeof(int));
        return queue;
    }
    
    // Queue is full when size becomes
    // equal to the capacity
    int isFull(struct Queue* queue)
    {
        return (queue->size == queue->capacity);
    }
    
    // Queue is empty when size is 0
    int isEmpty(struct Queue* queue)
    {
        return (queue->size == 0);
    }
    
    // Function to add an item to the queue.
    // It changes rear and size
    void enqueue(struct Queue* queue, int item)
    {
        if (isFull(queue))
            return;
        queue->rear = (queue->rear + 1)
                    % queue->capacity;
        queue->array[queue->rear] = item;
        queue->size = queue->size + 1;
        printf("%d enqueued to queue\\n", item);
    }
    
    // Function to remove an item from queue.
    // It changes front and size
    int dequeue(struct Queue* queue)
    {
        if (isEmpty(queue))
            return INT_MIN;
        int item = queue->array[queue->front];
        queue->front = (queue->front + 1)
                    % queue->capacity;
        queue->size = queue->size - 1;
        return item;
    }
    
    // Function to get front of queue
    int front(struct Queue* queue)
    {
        if (isEmpty(queue))
            return INT_MIN;
        return queue->array[queue->front];
    }
    
    // Function to get rear of queue
    int rear(struct Queue* queue)
    {
        if (isEmpty(queue))
            return INT_MIN;
        return queue->array[queue->rear];
    }
    
    // Driver program to test above functions./
    int main()
    {
        struct Queue* queue = createQueue(1000);
    
        enqueue(queue, 10);
        enqueue(queue, 20);
        enqueue(queue, 30);
        enqueue(queue, 40);
    
        printf("%d dequeued from queue\\n\\n",
            dequeue(queue));
    
        printf("Front item is %d\\n", front(queue));
        printf("Rear item is %d\\n", rear(queue));
    
        return 0;
    }
    `;
    const outputStyle = {
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        color: 'var(--text-main, #FFFFFF)',
        fontSize: '16px',
        marginTop: '10px',marginRight: '12px',
        marginLeft: '15px'
    };
    



const QueueImplementation = () => {
    return (
        <div style={contentStyle}>
            <h1 style={headingStyle}>Queue Data Structure</h1>
            <p style={paraStyle}>
                Similar to <strong>Stack</strong>, <strong>Queue</strong> is a linear data structure that follows a particular order 
                in which the operations are performed for storing data. The order is <strong>First In First Out (FIFO)</strong>. 
                One can imagine a queue as a line of people waiting to receive something in sequential order which starts 
                from the beginning of the line. It is an ordered list in which insertions are done at one end, 
                known as the <strong>rear</strong>, and deletions are done from the other end, known as the <strong>front</strong>. 
                A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.
            </p>
            <p style={paraStyle}>
                The difference between <strong>stacks</strong> and <strong>queues</strong> is in removing. In a stack, we remove the most recently added item; 
                in a queue, we remove the item that was least recently added.
            </p>
            <img src={img1} style={imgStyle} alt="Queue Illustration" />

            <h2 style={subHeadingStyle}>Basic Operations on Queue:</h2>
            <ul style={listStyle}>
                <li><strong>enqueue()</strong>: Inserts an element at the end of the queue (at the rear end).</li>
                <li><strong>dequeue()</strong>: Removes and returns an element that is at the front end of the queue.</li>
                <li><strong>front()</strong>: Returns the element at the front end without removing it.</li>
                <li><strong>rear()</strong>: Returns the element at the rear end without removing it.</li>
                <li><strong>isEmpty()</strong>: Indicates whether the queue is empty or not.</li>
                <li><strong>isFull()</strong>: Indicates whether the queue is full or not.</li>
                <li><strong>size()</strong>: Returns the size of the queue (the total number of elements it contains).</li>
            </ul>

            <h2 style={subHeadingStyle}>Types of Queues:</h2>
            <ul style={listStyle}>
                <li><strong>Simple Queue:</strong> The most basic version of a queue. Insertions (enqueue) occur at the rear end, and deletions (dequeue) occur at the front end. However, if items are popped from the front and the rear reaches the capacity of the queue, even if there are empty spaces before the front, the queue will show as full. This can be solved with a circular queue.</li>
                <li><strong>Circular Queue:</strong> In a circular queue, the elements form a circular ring, and the last element connects to the first element. This allows better memory utilization as elements can be inserted into empty spaces left by dequeued elements.</li>
                <li><strong>Priority Queue:</strong> Elements are arranged in a queue based on a priority system. For example, elements with higher values or lower values may get priority, creating a queue in decreasing or increasing order of values, respectively.</li>
                <li><strong>Dequeue (Double Ended Queue):</strong> Allows insertion and deletion from both ends of the queue, unlike other queues that allow operations from only one end.</li>
            </ul>

            <h2 style={subHeadingStyle}>Applications of Queue:</h2>
            <ul style={listStyle}>
                <li>When resources are shared among multiple consumers, such as <strong>CPU scheduling</strong> or <strong>disk scheduling</strong>.</li>
                <li>For asynchronous data transfer between two processes (e.g., <strong>IO Buffers</strong>, <strong>pipes</strong>, <strong>file IO</strong>).</li>
                <li>As an essential component in other data structures (e.g., <strong>Breadth First Search</strong>).</li>
            </ul>

            <h2 style={subHeadingStyle}>Array Implementation of Queue:</h2>
            <p style={paraStyle}>
                For implementing a queue, we need to track two indices: <strong>front</strong> and <strong>rear</strong>. We enqueue an item at the rear and dequeue an item from the front. The issue arises when the front reaches the end of the array. The solution is to increase the front and rear in a circular manner.
            </p>

            <h3 style={sub}>Steps for Enqueue:</h3>
            <ul style={listStyle}>
                <li>Check if the queue is full.</li>
                <li>If full, print <strong>overflow</strong> and exit.</li>
                <li>If not full, increment the rear index and add the element.</li>
            </ul>

            <h3 style={sub}>Steps for Dequeue:</h3>
            <ul style={listStyle}>
                <li>Check if the queue is empty.</li>
                <li>If empty, print <strong>underflow</strong> and exit.</li>
                <li>If not empty, return the element at the front and increment the front index.</li>
            </ul>

            <h3 style={sub}>Array Implementation</h3>
            <CodeCopy code={code}/>
            <h3 style={sub} >Output</h3>
            <div style={outputStyle}>
            10 enqueued to queue<br />
            20 enqueued to queue<br />
            30 enqueued to queue<br />
            40 enqueued to queue<br />
            10 dequeued from queue<br />
            Front item is 20<br />
            Rear item is 40
            </div>
            
            
            <h3 style={sub}>Complexity Analysis:</h3>
            <img src={img2} style={ing} alt="Queue" />

            <h3 style={sub}>Advantages of Array Implementation:</h3>
            <ul style={listStyle}>
                <li><strong>Easy to implement</strong>.</li>
                <li>Efficient management of large amounts of data.</li>
                <li>Follows <strong>FIFO</strong> rule for ease of insertion and deletion.</li>
            </ul>

            <h3 style={sub}>Disadvantages of Array Implementation:</h3>
            <ul style={listStyle}>
                <li>Static data structure with a fixed size.</li>
                <li>Can run into issues with linear increments of front and rear indices without a circular approach.</li>
                <li>Maximum size of the queue must be defined beforehand.</li>
            </ul>





        </div>
    );
};

export default QueueImplementation;
