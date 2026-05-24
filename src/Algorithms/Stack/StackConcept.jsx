import isEmpty from '../../assets/StackImages/isempty.webp';
import isFull from '../../assets/StackImages/isfull.webp';
import pop from '../../assets/StackImages/pop.webp';
import push from '../../assets/StackImages/push.webp';
import stack from '../../assets/StackImages/stack.webp';
import top from '../../assets/StackImages/top.webp';
import comp from '../../assets/StackImages/comp.png';
import rep from '../../assets/StackImages/representation.webp';

const StackConcept = () => {
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
    const content={
    marginLeft: '20px',
    padding: '20px',
    fontSize: '21px'
    };
    const sub={
    marginTop: '20px',
    fontWeight: '700',
    fontSize: '21px',
    marginBottom: '10px',
    };
    const para={
        fontWeight: '400',
    }

    return (
        <div style={content}>
            <h1 style={headingStyle}>Stack Data Structure</h1>
            <h2 style={subHeadingStyle}>What is a Stack?</h2>
            <p style ={para}>
                A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last comes out first and FILO implies that the element that is inserted first comes out last.
            </p>
            
            <img src={stack} alt=""  style={ing}/>

            <h2 style={subHeadingStyle}>What is Stack Data Structure?</h2>
            <p style={para}>
                <ul style={listStyle}>
                    <li>
                        Stack is a linear data structure based on LIFO(Last In First Out) principle in which the insertion of a new element and removal of an existing element takes place at the same end represented as the top of the stack.
                    </li>
                    <li>
                        To implement the stack, it is required to maintain the pointer to the top of the stack, which is the last element to be inserted because we can access the elements only on the top of the stack.
                    </li>
                    <li>
                        <h3 style={sub}>
                            LIFO(Last In First Out) Principle in Stack Data Structure:
                        </h3>
                        <p>This strategy states that the element that is inserted last will come out first. You can take a pile of plates kept on top of each other as a real-life example. The plate which we put last is on the top and since we remove the plate that is at the top, we can say that the plate that was put last comes out first.</p>
                    </li>
                </ul>
            </p>

            <h2 style={subHeadingStyle}>Representation of Stack Data Structure:</h2>
            <p>Stack follows LIFO (Last In First Out) Principle so the element which is pushed last is popped first.</p>
            
            <img src={rep} alt="" style={ing}/>

            <h2 style={subHeadingStyle}>Types of Stack Data Structure:</h2>
            <ul style={listStyle}>
                <li>
                    <b>Fixed Size Stack:</b> As the name suggests, a fixed size stack has a fixed size and cannot grow or shrink dynamically. If the stack is full and an attempt is made to add an element to it, an overflow error occurs. If the stack is empty and an attempt is made to remove an element from it, an underflow error occurs.
                </li>
                <li>
                    <b>Dynamic Size Stack:</b> A dynamic size stack can grow or shrink dynamically. When the stack is full, it automatically increases its size to accommodate the new element, and when the stack is empty, it decreases its size. This type of stack is implemented using a linked list, as it allows for easy resizing of the stack.
                </li>
            </ul>

            <h2 style={subHeadingStyle}>Basic Operations on Stack Data Structure:</h2>
            <p>In order to make manipulations in a stack, there are certain operations provided to us.</p>
            <ul style={listStyle}>
                <li><b>push()</b> to insert an element into the stack.</li>
                <li><b>pop()</b> to remove an element from the stack.</li>
                <li><b>top()</b> Returns the top element of the stack.</li>
                <li><b>isEmpty()</b> returns true if stack is empty else false.</li>
                <li><b>isFull()</b> returns true if the stack is full else false.</li>
            </ul>
            <br />

            <h3 style={subHeadingStyle}>Push Operation in Stack Data Structure:</h3>
            <p styles={para}>
                The push operation adds a new element to the top of the stack. The top element of the stack remains unchanged. The time complexity of the push operation in a stack is O(1). If the stack is full, then it is said to be an <b>Overflow condition</b>.
            </p>
            <h4 style={sub}>Algorithm for Push Operation:</h4>
            <ul style={listStyle}>
                <li>Before pushing the element to the stack, we check if the stack is full.</li>
                <li>If the stack is full (top == capacity-1), then Stack Overflows and we cannot insert the element to the stack.</li>
                <li>Otherwise, we increment the value of top by 1 (top = top + 1) and the new value is inserted at the top position.</li>
                <li>The elements can be pushed into the stack until we reach the capacity of the stack.</li>
            </ul>
            <img src={push} alt="" style={ing}/>

            <h3 style={subHeadingStyle}>Pop Operation in Stack Data Structure:</h3>
            <p style={para}>
                Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an <b>Underflow condition</b>.
            </p>
            <h4 style={sub}>Algorithm for Pop Operation:</h4>
            <ul style={listStyle}>
                <li>Before popping the element from the stack, we check if the stack is empty.</li>
                <li>If the stack is empty (top == -1), then Stack Underflows and we cannot remove any element from the stack.</li>
                <li>Otherwise, we store the value at top, decrement the value of top by 1 (top = top – 1) and return the stored top value.</li>
            </ul>
            <img src={pop} alt="" style={ing}/>

            <h3 style={subHeadingStyle}>Top or Peek Operation in Stack Data Structure:</h3>
            <p style={para}>
                Returns the top element of the stack.
            </p>
            <h4 style={sub}>Algorithm for Top Operation:</h4>
            <ul style={listStyle}>
                <li>Before returning the top element from the stack, we check if the stack is empty.</li>
                <li>If the stack is empty (top == -1), we simply print “Stack is empty”.</li>
                <li>Otherwise, we return the element stored at index = top.</li>
            </ul>
            <img src={top} alt="" style={ing}/>

            <h3 style={subHeadingStyle}>isEmpty Operation in Stack Data Structure:</h3>
            <p style={para}>
                Returns true if the stack is empty, else false.
            </p>
            <h4 style={sub}>Algorithm for isEmpty Operation:</h4>
            <ul style={listStyle}>
                <li>Check for the value of top in stack.</li>
                <li>If (top == -1), then the stack is empty so return true.</li>
                <li>Otherwise, the stack is not empty so return false.</li>
            </ul>
            <img src={isEmpty} alt="" style={ing} />

            <h3 style={subHeadingStyle}>isFull Operation in Stack Data Structure:</h3>
            <p style={para}>
                Returns true if the stack is full, else false.
            </p>
            <h4 style={sub}>Algorithm for isFull Operation:</h4>
            <ul style={listStyle}>
                <li>Check for the value of top in stack.</li>
                <li>If (top == capacity-1), then the stack is full so return true.</li>
                <li>Otherwise, the stack is not full so return false.</li>
            </ul>
            <img src={isFull} alt="" style={ing}  />

            <h2 style={subHeadingStyle}>Complexity Analysis of Operations on Stack Data Structure:</h2>
            <img src={comp} alt="" style={ing}/>

            <h2 style={subHeadingStyle}>Advantages of Stack Data Structure:</h2>
            <ul style={listStyle}>
                <li><b>Simplicity:</b> Stacks are a simple and easy-to-understand data structure, making them suitable for a wide range of applications.</li>
                <li><b>Efficiency:</b> Push and pop operations on a stack can be performed in constant time (O(1)), providing efficient access to data.</li>
                <li><b>Last-in, First-out (LIFO):</b> Stacks follow the LIFO principle, ensuring that the last element added to the stack is the first one to be removed.</li>
                <li><b>Memory management:</b> Stacks are used in memory management and function calls, making them essential in programming languages.</li>
            </ul>

            <h2 style={subHeadingStyle}>Disadvantages of Stack Data Structure:</h2>
            <ul style={listStyle}>
                <li><b>Limited access:</b> Stacks do not allow random access to elements; only the top element can be accessed directly.</li>
                <li><b>Fixed size:</b> In the case of fixed-size stacks, they may run out of space, leading to overflow errors.</li>
                <li><b>Not suitable for all applications:</b> Stacks may not be suitable for all data processing needs, especially when more complex operations are required.</li>
            </ul>
        </div>
    );
};

export default StackConcept;
