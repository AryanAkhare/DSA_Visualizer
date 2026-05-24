import { useState } from 'react';
import CodeCopy from '../../Components/Codecopy';

const StackImplementation = () => {
    const [outputText1, setOutputText1] = useState('10 pushed into stack\n20 pushed into stack\n30 pushed into stack\n30 Popped from stack\nTop element is : 20\nElements present in stack : 20 10');
    const [outputText2, setOutputText2] = useState('10 pushed into stack\n20 pushed into stack\n30 pushed into stack\n30 Popped from stack\nTop element is : 20\nElements present in stack : 20 10');

    const codeSnippet = ` 
#include <iostream>
// C program for array implementation of stack
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

// A structure to represent a stack
struct Stack {
    int top;
    unsigned capacity;
    int* array;
};

// function to create a stack of given capacity. It initializes size of
// stack as 0
struct Stack* createStack(unsigned capacity)
{
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    stack->capacity = capacity;
    stack->top = -1;
    stack->array = (int*)malloc(stack->capacity * sizeof(int));
    return stack;
}

// Stack is full when top is equal to the last index
int isFull(struct Stack* stack)
{
    return stack->top == stack->capacity - 1;
}

// Stack is empty when top is equal to -1
int isEmpty(struct Stack* stack)
{
    return stack->top == -1;
}

// Function to add an item to stack.  It increases top by 1
void push(struct Stack* stack, int item)
{
    if (isFull(stack))
        return;
    stack->array[++stack->top] = item;
    printf("%d pushed to stack\n", item);
}

// Function to remove an item from stack.  It decreases top by 1
int pop(struct Stack* stack)
{
    if (isEmpty(stack))
        return INT_MIN;
    return stack->array[stack->top--];
}

// Function to return the top from stack without removing it
int peek(struct Stack* stack)
{
    if (isEmpty(stack))
        return INT_MIN;
    return stack->array[stack->top];
}

// Driver program to test above functions
int main()
{
    struct Stack* stack = createStack(100);

    push(stack, 10);
    push(stack, 20);
    push(stack, 30);

    printf("%d popped from stack\n", pop(stack));

    return 0;
}

`;

const codeSnippet2 = `// C program for linked list implementation of stack
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

// A structure to represent a stack node
struct StackNode {
    int data;
    struct StackNode* next;
};

// Function to create a new stack node
struct StackNode* newNode(int data) {
    struct StackNode* stackNode = (struct StackNode*)malloc(sizeof(struct StackNode));
    if (stackNode == NULL) { // Check for successful memory allocation
        fprintf(stderr, "Memory allocation failed\\n");
        exit(EXIT_FAILURE);
    }
    stackNode->data = data;
    stackNode->next = NULL;
    return stackNode;
}

// Function to check if the stack is empty
int isEmpty(struct StackNode* root) {
    return !root;
}

// Function to push an element onto the stack
void push(struct StackNode** root, int data) {
    struct StackNode* stackNode = newNode(data);
    stackNode->next = *root;
    *root = stackNode;
    printf("%d pushed to stack\\n", data);
}

// Function to pop an element from the stack
int pop(struct StackNode** root) {
    if (isEmpty(*root)) {
        fprintf(stderr, "Stack underflow\\n"); // Error message for underflow
        return INT_MIN; // Indicate an error
    }
    struct StackNode* temp = *root;
    *root = (*root)->next;
    int popped = temp->data;
    free(temp);

    return popped;
}

// Function to get the top element of the stack
int peek(struct StackNode* root) {
    if (isEmpty(root)) {
        fprintf(stderr, "Stack is empty\\n"); // Error message for empty stack
        return INT_MIN; // Indicate an error
    }
    return root->data;
}

// Main function to demonstrate stack operations
int main() {
    struct StackNode* root = NULL;

    // Pushing elements onto the stack
    push(&root, 10);
    push(&root, 20);
    push(&root, 30);

    // Popping an element from the stack
    printf("%d popped from stack\\n", pop(&root));

    // Getting the top element of the stack
    printf("Top element is %d\\n", peek(root));

    return 0;
}`;


    const headingStyle = {
        marginTop: '0',
        fontWeight: '800',
        fontSize: '30px',
        marginBottom: '10px',
    };

    const subHeadingStyle = {
        marginTop: '20px',
        fontWeight: '800',
        fontSize: '20px',
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
      
    const ing = {
        maxWidth: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        height: '400px',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const content = {
        marginLeft: '20px',
        padding: '20px',
        fontSize: '18px'
    };

    const sub = {
        marginTop: '20px',
        fontWeight: '700',
        fontSize: '19px',
        marginBottom: '10px',
    };

    const para = {
        fontWeight: '400',
    };
    
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
    };

    return (
        <div style={content}>
            <h1 style={headingStyle}>Implementation of Stack Data Structure</h1>
            <p style={para}>The basic operations that can be performed on a stack include push, pop, and peek. There are two ways to implement a stack – </p>
            <ul style={listStyle}>
                <li>Using Array</li>
                <li>Using Linked List</li>
            </ul>

            <h2 style={subHeadingStyle}>Implementation of Stack Data Structure using Array:</h2>
            <p style={para}>In an array-based implementation, the push operation is implemented by incrementing the index of the top element and storing the new element at that index. The pop operation is implemented by returning the value stored at the top index and then decrementing the index of the top element.</p>
            
            {/* code block and output */}
            <CodeCopy code={codeSnippet} />
            <h3 style={sub}>Output</h3>
            
            <div style={outputStyle}>
                {outputText1}
            </div>

            <h3 style={sub}>Advantages of Array Implementation:</h3>
            <ul style={listStyle}>
                <li>Easy to implement.</li>
                <li>Memory is saved as pointers are not involved.</li>
            </ul>
            
            <h3 style={sub}>Disadvantages of Array Implementation:</h3>
            <ul style={listStyle}>
                <li>It is not dynamic i.e., it doesn’t grow and shrink depending on needs at runtime. [But in case of dynamic sized arrays like vector in C++, list in Python, ArrayList in Java, stacks can grow and shrink with array implementation as well].</li>
                <li>The total size of the stack must be defined beforehand.</li>
            </ul>

            <h2 style={subHeadingStyle}>Implementation of Stack Data Structure using Linked List:</h2>
            <p style={para}>In a linked list-based implementation, the push operation is implemented by creating a new node with the new element and setting the next pointer of the current top node to the new node. The pop operation is implemented by setting the next pointer of the current top node to the next node and returning the value of the current top node.</p>
            
            {/* code block and output */}
            <CodeCopy code={codeSnippet} />
            <h3 style={sub}>Output</h3>
            
            <div style={outputStyle}>
                {outputText2}
            </div>

            <h3 style={sub}>Advantages of Linked List implementation:</h3>
            <ul style={listStyle}>
                <li>The linked list implementation of a stack can grow and shrink according to the needs at runtime.</li>
                <li>It is used in many virtual machines like JVM.</li>
            </ul>
            
            <h3 style={sub}>Disadvantages of Linked List implementation:</h3>
            <ul style={listStyle}>
                <li>Requires extra memory due to the involvement of pointers.</li>
                <li>Random accessing is not possible in stack.</li>
            </ul>
        </div>
    );
}

export default StackImplementation;

