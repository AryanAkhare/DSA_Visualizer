const Aim = () => {
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        height: '100vh',
        margin: '20px auto',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.6',
        color: 'var(--text-main, #FFFFFF)',
    };

    const headingStyle = {
        color: '#0f9d58',
        fontSize: '2rem',
        marginBottom: '10px',
        borderBottom: '3px solid #0f9d58',
        paddingBottom: '5px',
        textAlign: 'center',
    };

    const subHeadingStyle = {
        color: '#0f9d58',
        fontSize: '1.5rem',
        margin: '20px 0',
        textAlign: 'left',
    };

    const listStyle = {
        marginLeft: '40px',
        listStyleType: 'disc',
    };

    const innerListStyle = {
        marginLeft: '20px',
        listStyleType: 'circle',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Introduction to Hashing</h1>
            <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
            <p>In this experiment on Hashing, you will learn the following topics:</p>
            <ul style={listStyle}>
                <li>
                    Introduction
                    <ul style={innerListStyle}>
                        <li>What is hashing?</li>
                        <li>How does Hashing work?</li>
                        <li>What is a Hash function?</li>
                    </ul>
                </li>
                <li>
                    Hash Functions
                    <ul style={innerListStyle}>
                        <li>Properties of a good hash function</li>
                        <li>Common hashing techniques (e.g., Division, Multiplication)</li>
                    </ul>
                </li>
                <li>
                    Collision Resolution
                    <ul style={innerListStyle}>
                        <li>Open Addressing (Linear probing, Quadratic probing, Double hashing)</li>
                        <li>Chaining</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Aim;
