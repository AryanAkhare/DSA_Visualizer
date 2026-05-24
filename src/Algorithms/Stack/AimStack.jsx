const AimStack = () => {
    const containerStyle = {
        padding: '20px',
        backgroundColor: '',
        borderRadius: '8px',
        
        maxWidth: '100vw',
        height:'90vh',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif'
    };
    const headingStyle = {
        color: '#5bbaea',
        marginBottom: '10px',
        borderBottom: '2px solid #4CAF50',
        paddingBottom: '5px',
        textAlign : 'center',
        fontWeight: '800',
        fontSize: '30px',
    };
    const para={
        marginTop: '20px',
        fontWeight: '700',
        fontSize: '19px',
        marginBottom: '10px',
    }
    const subHeadingStyle = {
        color: '#4CAF50',
        margin: '20px 0 20px 0',
        marginTop: '20px',
        fontWeight: '800',
        fontSize: '20px',
        marginBottom: '20px',
    };
    const listStyle = {
        marginLeft: '20px',
        marginTop: '20px',
        fontWeight: 700,
        lineHeight: '1.6',            
        marginBottom: '8px',          
        color: 'var(--text-main, #FFFFFF)',                
        listStyleType: 'disc',        
                  
    };
    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Stack</h1>
            <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
            <p style={para}>In this experiment, you will be learn about :</p>
            <ul style={listStyle}>
                
                    
                    
                        <li>What is a Stack?</li>
                        <li>Applications, Advantages and Disadvantages of Stack</li>
                    
                
                <li>
                Gain a basic understanding of Stacks  as an abstract data type.
                </li>
                <li>
                Understand stack operations associated time complexity through interactive animations.
                </li>
                <li>
                Understand applications of Stacks.
                </li>
                <li>Special Implementation of Stack -Tower of Hanoi</li>
            </ul>
        </div>
    );
}
export default AimStack;