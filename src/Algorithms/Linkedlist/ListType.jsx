import singlyLinked from '../../assets/LinkedListImages/singlyLinked.webp';
import doublyLinked from '../../assets/LinkedListImages/doublyLinked.webp';
import circularLinked from '../../assets/LinkedListImages/circularLinked.webp';
import doublyCircularLinked from '../../assets/LinkedListImages/doublyCircularLinked.webp';
import CodeCopy from '../../Components/Codecopy';

const singlycode = `
// C program to illustrate creation
// and traversal of Singly Linked List

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = data;
    node->next = NULL;
    return node;
}

// Function to print the linked list
void printList(struct Node* n) {
    while (n != NULL) {
        printf("%d ", n->data);
        n = n->next;
    }
    printf("\\n");
}

int main() {
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    // Creating nodes and linking them
    head = createNode(1);
    second = createNode(2);
    third = createNode(3);

    head->next = second; // Link first node with the second
    second->next = third; // Link second node with the third

    // Print the linked list
    printList(head);

   
}
`;
const doublylistcode= `
// C program to illustrate creation
// and traversal of Doubly Linked List
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

void forwardTraversal(struct Node* head) {
    struct Node* curr = head;
    while (curr != NULL) {
        printf("%d ", curr->data);
        curr = curr->next;
    }
    printf("\\n");
}

void backwardTraversal(struct Node* tail) {
    struct Node* curr = tail;
    while (curr != NULL) {
        printf("%d ", curr->data);
        curr = curr->prev;
    }
    printf("\\n");
}

struct Node* createNode(int data) {
    struct Node* newNode = 
      (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

int main() {
    // Linked List 1 <-> 2 <-> 3
    struct Node* head = createNode(1);
    struct Node* second = createNode(2);
    struct Node* third = createNode(3);

    head->next = second;
    second->prev = head;
    second->next = third;
    third->prev = second;

    printf("Forward Traversal:\\n");
    forwardTraversal(head);

    printf("Backward Traversal:\\n");
    backwardTraversal(third);

    return 0;
};
`;
const circularlistcode = `
// C program to illustrate creation
// and traversal of Circular Linked List
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void printList(struct Node *last) {
    if (last == NULL) return;

    struct Node *head = last->next;
    while (1) {
        printf("%d ", head->data);
        head = head->next;
        if (head == last->next)
            break;
    }
    printf("\\n");
}

struct Node *createNode(int value) {
    struct Node *newNode = 
      (struct Node *)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

int main() {
    // Create circular linked list: 2, 3, 4
    struct Node *first = createNode(2);
    first->next = createNode(3);
    first->next->next = createNode(4);
    struct Node *last = first->next->next;
    last->next = first;

    printList(last);

    return 0;
}
`;

const doublyCircularListcode = `
// C program to illustrate creation
// and traversal of Doubly Circular Linked List
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

void forwardTraversal(struct Node* head) {
    struct Node* curr = head;
    if (head != NULL) {
        do {
            printf("%d ", curr->data);
            curr = curr->next;
        } while (curr != head);
    }
    printf("\\n");
}

void backwardTraversal(struct Node* head) {
    struct Node* curr = head->prev;
    if (head != NULL) {
        do {
            printf("%d ", curr->data);
            curr = curr->prev;
        } while (curr->next != head);
    }
    printf("\\n");
}

struct Node* createNode(int data) {
    struct Node* newNode = 
      (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

int main() {
    // Create a doubly circular linked list
    // 1 <-> 2 <-> 3 <-> 1
    struct Node* head = createNode(1);
    struct Node* second = createNode(2);
    struct Node* third = createNode(3);

    head->next = second;
    second->prev = head;
    second->next = third;
    third->prev = second;

    // Make it circular
    third->next = head;
    head->prev = third;

    printf("Forward Traversal:\\n");
    forwardTraversal(head);

    printf("Backward Traversal:\\n");
    backwardTraversal(head);

    return 0;
}
`;
const sub={
    marginTop: '20px',
    fontWeight: '700',
    fontSize: '19px',
    marginBottom: '10px',
    };







const headingStyle = {
    marginTop: '0',
    fontWeight: '800',
    fontSize: '30px',
    marginBottom: '15px',
};

const subHeadingStyle = {
    marginTop: '20px',
    marginBottom: '20px',
    fontWeight: '800',
    fontSize: '20px',
   
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
    fontSize: '18px',
};

const paraStyle = {
    fontWeight: '400',
    margin:'1px;'
};

const imgStyle = {
    maxWidth: '100%',
    marginBottom: '20px',
    borderRadius: '5px',
    
    backgroundColor: 'rgba(255,255,255,0.05)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    height:'300px',
    width:'auto',
    
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: '15px',marginBottom: '10px',
};


const LinkedListTypes = () => {
    return (
        <div style={contentStyle}>
            <h1 style={headingStyle}>Types of Linked Lists</h1>

            <p style={paraStyle}>
                A <strong>linked list</strong> is a linear data structure where elements are not stored in contiguous memory locations. Each element in a linked list is called a <strong>node</strong> and contains a <em>data</em> field and a <em>reference (link)</em> to the next node.
            </p>
            <br />

            <h2 style={subHeadingStyle}>1. Singly Linked List</h2>
            <p style={paraStyle}>
                A <strong>singly linked list</strong> is the simplest form of a linked list where each node contains data and a pointer to the next node. In this type, traversal is possible only in one direction (forward).
            </p>
            <p style={paraStyle}>
            The node contains a pointer to the next node means that the node stores the address of the next node in the sequence. A single linked list allows the traversal of data only in one way. Below is the image for the same:
            </p>
            <img src={singlyLinked} alt="Singly Linked List" style={imgStyle} />
            <p style={paraStyle}>Below is the creation and traversal of Singly Linked List:</p>
            <CodeCopy code={singlycode}/>
            <h3 style={sub} >Output</h3>
            <div style={outputStyle}>
            1 2 3 
            </div>
            <p><strong>Time Complexity:</strong> O(n), where n is the number of nodes. 
            <br></br>
            <strong>Auxiliary Space:</strong> O(1)</p>
            <br />


            
            <h2 style={subHeadingStyle}>2. Doubly Linked List</h2>
            <p style={paraStyle}>
                A <strong>doubly linked list</strong> is more complex, where each node contains three parts: data, a pointer to the next node, and a pointer to the previous node. This allows traversal in both forward and backward directions.
            </p>
            <p style={paraStyle}>Therefore, it contains three parts of data, a pointer to the next node, and a pointer to the previous node. This would enable us to traverse the list in the backward direction as well.</p>
            <p style={paraStyle}>
                Below is an image representation of a doubly linked list:
            </p>
            <img src={doublyLinked} alt="Doubly Linked List" style={imgStyle} />
            <p style={paraStyle}>Below is the creation and traversal of Doubly Linked List:</p>
            <CodeCopy code={doublylistcode}/>
            <h3 style={sub} >Output</h3>
            <div style={outputStyle}>
            Forward Traversal:<br></br>
            1 2 3 <br></br>
            Backward Traversal:<br></br>
            3 2 1 <br></br>
            </div>
            <p><strong>Time Complexity:</strong> O(n), where n is the number of nodes. 
                <br></br>
                <strong>Auxiliary Space:</strong> O(1)</p>
            <br />






            <h2 style={subHeadingStyle}>3. Circular Linked List</h2>
            <p style={paraStyle}>
                A <strong>circular linked list</strong>, is a type of linked list in which the last node’s next pointer points back to the first node of the list, creating a circular structure. This design allows for continuous traversal of the list, as there is no null to end the list.
            </p>
            <p style={paraStyle}>While traversing a circular linked list, we can begin at any node and traverse the list in any direction forward and backward until we reach the same node we started. Thus, a circular linked list has no beginning and no end. Below is the image for the same:</p>
            
            <img src={circularLinked} alt="Circular Linked List" style={imgStyle} />
            <p style={paraStyle}>Below is the creation and traversal of Circular Linked List:</p>
            <CodeCopy code={circularlistcode}/>
            <h3 style={sub} >Output</h3>
            <div style={outputStyle}>
            2 3 4 
            </div>
            <p><strong>Time Complexity:</strong> O(n), where n is the number of nodes. 
                <br></br>
                <strong>Auxiliary Space:</strong> O(1)</p>
                <br />






            <h2 style={subHeadingStyle}>4. Doubly Circular Linked List</h2>
            <p style={paraStyle}>
                A <strong>doubly circular linked list</strong> Doubly Circular linked list or a circular two-way linked list is a complex type of linked list that contains a pointer to the next as well as the previous node in the sequence. The difference between the doubly linked and circular doubly list is the same as that between a singly linked list and a circular linked list. The circular doubly linked list does not contain null in the previous field of the first node.
            </p>
            <p style={paraStyle}>
                Below is an image representation of a doubly circular linked list:
            </p>
            <img src={doublyCircularLinked} alt="Doubly Circular Linked List" style={imgStyle} />
            <p style={paraStyle}>Below is the creation and traversal of Doubly Circular Linked List:</p>
            <CodeCopy code={doublyCircularListcode}/>
            <h3 style={sub} >Output</h3>
            <div style={outputStyle}>
            Forward Traversal:<br></br>
            1 2 3 <br></br>
            Backward Traversal:<br></br>
            3 2 1 <br></br>
            </div>
            <p><strong>Time Complexity:</strong> O(n), where n is the number of nodes. 
            <br></br>
            <strong>Auxiliary Space:</strong> O(1)</p>
            <br />








            <h2 style={subHeadingStyle}>5. Multilevel Linked List</h2>
            <p style={paraStyle}>
                A <strong>multilevel linked list</strong> is an advanced data structure designed to represent hierarchical relationships among elements. Each node in this structure contains three main components: data, a next pointer, and a child pointer. The next pointer links to the next node in the same level of the list, allowing for linear traversal within that level. The child pointer, on the other hand, points to a sub-list or nested linked list, creating a hierarchical or tree-like structure. This enables each node to have its own sub-list of nodes, allowing for complex nested relationships. Please refer to Multi Linked List for Implementation.
            </p>
            <p style={paraStyle}>
                {/* Code to create and traverse multilevel linked list goes here */}
            </p>
            <br />

            <h2 style={subHeadingStyle}>6. Skip List</h2>
            <p style={paraStyle}>
                A <strong>skip list</strong> is a data structure that allows for efficient search, insertion and deletion of elements in a sorted list. It is a probabilistic data structure, meaning that its average time complexity is determined through a probabilistic analysis. Skip lists are implemented using a technique called “coin flipping.” In this technique, a random number is generated for each insertion to determine the number of layers the new element will occupy. This means that, on average, each element will be in log(n) layers, where n is the number of elements in the bottom layer. Please refer to  Introduction of Skip List.
            </p>
            <p style={paraStyle}>
                {/* Code to create and traverse skip list goes here */}
            </p>
            <br />

            
        </div>
    );
};

export default LinkedListTypes;
