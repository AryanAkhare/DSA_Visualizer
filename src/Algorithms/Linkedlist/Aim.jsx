const Aim = () => {
    const containerStyle = {
    padding: '30px',
    backgroundColor: '#ffffff', // Change to white for a cleaner look
    borderRadius: '12px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Deeper shadow for more depth
    maxWidth: '90vw',
    height: '90vh',
    margin: '20px auto',
    fontFamily: "'Roboto', sans-serif", // Modern font
    color: 'var(--text-main, #FFFFFF)', // Darker text color for better readability
    overflowY: 'auto', // Allow scrolling if content overflows
    };
    const headingStyle = {
    color: '#2980b9', // Vibrant blue for the heading
    marginBottom: '15px',
    borderBottom: '3px solid #4CAF50', // Thicker green border for emphasis
    paddingBottom: '10px',
    textAlign: 'center',
    fontSize: '36px', // Increased font size for prominence
    letterSpacing: '1.5px', // Adding letter spacing for a modern look
    textTransform: 'uppercase', // Makes the heading stand out
    };
    const subHeadingStyle = {
    color: '#4CAF50', // Green color for subheading
    margin: '20px 0',
    fontSize: '26px', // Slightly larger font for subheading
    fontWeight: '600',
    textAlign: 'center', // Center align subheading
    };
    const listStyle = {
    marginLeft: '20px',
    listStyleType: 'disc',
    lineHeight: '1.6', // Improved line height for readability
    };
    const listItemStyle = {
    padding: '12px 0', // Added padding for spacing between items
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transitions for hover effect
    cursor: 'pointer',
    position: 'relative', // To allow for pseudo-element effects
    };
    const hoverStyle = {
    ':hover': {
    transform: 'translateY(-2px)', // Slight lift on hover
    backgroundColor: '#ecf0f1', // Light background change on hover
    borderRadius: '8px', // Slightly rounded corners on hover
    }
    };
    // Adding an animated icon on hover for each list item
    const animatedIconStyle = {
    position: 'absolute',
    left: '-25px',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    transform: 'translateY(-5px)',
    };
    const listItemWithIconStyle = {
    ...listItemStyle,
    ':hover': {
    ...hoverStyle[':hover'],
    '&::before': {
    content: "'✓'", // Example icon
    fontSize: '16px',
    color: '#27ae60',
    position: 'absolute',
    left: '-30px',
    opacity: '1',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    transform: 'translateY(0)', // Move icon up slightly on hover
    },
    },
    };
    return (
    <div style={containerStyle}>
    <h1 style={headingStyle}>Linked List</h1>
    <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
    <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
    In this experiment on Linked Lists, you will learn the following topics:
    </p>
    <ul style={listStyle}>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Introduction
    <ul style={listStyle}>
    <li style={listItemWithIconStyle}>What is a linked list?</li>
    <li style={listItemWithIconStyle}>How is a linked list stored in memory?</li>
    </ul>
    </li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Types of Linked Lists (Operations and time complexity analysis of each type)
    <ul style={listStyle}>
    <li style={listItemWithIconStyle}>Singly Linked List</li>
    <li style={listItemWithIconStyle}>Doubly Linked List</li>
    <li style={listItemWithIconStyle}>Circular Linked List</li>
    </ul>
    </li>
    </ul>
    </div>
    );
    }
    export default Aim; 
    