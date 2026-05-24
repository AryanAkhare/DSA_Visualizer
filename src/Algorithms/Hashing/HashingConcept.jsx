import React,{useState} from 'react';
import p1 from '../../assets/HashingImages/p1.webp';
import p2 from '../../assets/HashingImages/p2.webp';
import p3 from '../../assets/HashingImages/p3.webp';
import pic1 from '../../assets/HashingImages/p4(1).webp';
import pic2 from '../../assets/HashingImages/p4(2).webp';
import pic3 from '../../assets/HashingImages/p4(3).webp';
import pic4 from '../../assets/HashingImages/p4(4).webp';
import pic5 from '../../assets/HashingImages/p4(5).webp';
import pit1 from '../../assets/HashingImages/p5(1).webp';
import pit2 from '../../assets/HashingImages/p5(2).webp';
import pit3 from '../../assets/HashingImages/p5(3).webp';
import pit4 from '../../assets/HashingImages/p5(4).webp';
import pit5 from '../../assets/HashingImages/p5(5).webp';
import tilt1 from '../../assets/HashingImages/p6(1).webp';
import tilt2 from '../../assets/HashingImages/p6(2).webp';
import tilt3 from '../../assets/HashingImages/p6(3).webp';
import tilt4 from '../../assets/HashingImages/p6(4).webp';
import lit1 from '../../assets/HashingImages/p7(1).webp';
import lit2 from '../../assets/HashingImages/p7(2).webp';
import lit3 from '../../assets/HashingImages/p7(3).webp';
import lit4 from '../../assets/HashingImages/p7(4).webp';
import lit5 from '../../assets/HashingImages/p7(5).webp';
const g1=[ pic1, pic2, pic3, pic4, pic5];
const g2=[ pit1, pit2, pit3, pit4, pit5];
const g3=[tilt1,tilt2,tilt3,tilt4];
const g4=[lit1,lit2,lit3,lit4,lit5];
const HashingConcept = () => {

    const headingStyle = {
        marginTop: '0',
        fontWeight: '800',
        fontSize: '36px',
        marginBottom: '10px',
        animation: 'fadeIn 0.5s ease-in-out'
    };

    const subHeadingStyle = {
        marginTop: '20px',
        fontWeight: '800',
        fontSize: '24px',
        marginBottom: '20px',
        animation: 'fadeIn 0.5s ease-in-out'
    };

    const listStyle = {
        fontWeight: 400,
        lineHeight: '1.6',
        marginBottom: '8px',
        color: 'var(--text-main, #FFFFFF)',
        listStyleType: 'disc',
        paddingLeft: '20px',
        animation: 'fadeIn 0.5s ease-in-out'
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
        fontSize: '18px',
        color: '#2c3e50',
    };

    const sub = {
        marginTop: '20px',
        fontWeight: '700',
        fontSize: '19px',
        marginBottom: '10px',
        animation: 'fadeIn 0.5s ease-in-out'
    };

    const para = {
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '1.6',
        marginBottom: '15px',
        animation: 'fadeIn 0.5s ease-in-out'
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % g1.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + g1.length) % g1.length);
    };

    const galleryStyle = {
        display: 'flex',
        flexDirection: 'column',  
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
    };
    
    const imgStyle = {
        maxWidth: '100%',
        height: '400px',
        width: 'auto',
        borderRadius: '5px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',  
    };
    const arrowContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        backgroundColor: 'rgba(50, 50, 50, 0.1)', // Lightish black color for background
        padding: '10px 0', // Vertical padding for the button area
        borderRadius: '5px', // Optional: rounded corners for the button area
    };
    const arrowStyle = {
        cursor: 'pointer',
        fontSize: '28px',
        margin: '0 30px',
        userSelect: 'none',
        color: 'white', 
    fontWeight: 'bold', 
    padding: '10px 15px',  
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  
    borderRadius: '50%',
    };

    return (
        <div style={content} >
            <h1 style={headingStyle}>Hashing</h1>

            <h2 style={subHeadingStyle}>Introduction to Hashing</h2>
            <p style={para}>
                Hashing refers to the process of generating a fixed-size output from an input of variable size using mathematical formulas known as hash functions. This technique determines an index or location for the storage of an item in a data structure.
            </p>
            <img src={p1} alt="" style={ing} />
            <h2 style={subHeadingStyle}>What is Hashing?</h2>
            <p style={para}>
                Hashing in Data Structures refers to the process of transforming a given key to another value. It involves mapping data to a specific index in a hash table using a hash function that enables fast retrieval of information based on its key. The transformation of a key to the corresponding value is done using a Hash Function and the value obtained from the hash function is called Hash Code.
            </p>

            <h2 style={subHeadingStyle}>Components of Hashing</h2>
            <ul style={listStyle}>
                <li><strong>Key:</strong> A Key can be anything string or integer which is fed as input in the hash function, the technique that determines an index or location for storage of an item in a data structure.</li>
                <li><strong>Hash Function:</strong> The hash function receives the input key and returns the index of an element in an array called a hash table. The index is known as the hash index.</li>
                <li><strong>Hash Table:</strong> Hash table is a data structure that maps keys to values using a special function called a hash function. Hash stores the data in an associative manner in an array where each data value has its own unique index.</li>
            </ul>
            <img src={p2} alt="" style={ing} />
            <h2 style={subHeadingStyle}>How does Hashing work?</h2>
            <p style={para}>
                Suppose we have a set of strings <strong>"ab", "cd", "efg"</strong> and we would like to store it in a table.
            </p>
            <p style={para}>
                Our main objective here is to search or update the values stored in the table quickly in O(1) time and we are not concerned about the ordering of strings in the table. So the given set of strings can act as a key and the string itself will act as the value of the string, but how to store the value corresponding to the key?
            </p>
            <ol style={listStyle}>
                <li>
                    Step 1: We know that hash functions (which is some mathematical formula) are used to calculate the hash value which acts as the index of the data structure where the value will be stored.
                </li>
                <li>
                    Step 2: So, let’s assign <strong>"a" = 1</strong>, <strong>"b" = 2</strong>, etc., to all alphabetical characters.
                </li>
                <li>
                    Step 3: Therefore, the numerical value by summation of all characters of the string:
                    <div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', borderRadius: '15px' }}>
                        <ul style={{ ...listStyle, fontStyle: 'italic' }}>
                            <li><strong>"ab" = 1 + 2 = 3</strong></li>
                            <li><strong>"cd" = 3 + 4 = 7</strong></li>
                            <li><strong>"efg" = 5 + 6 + 7 = 18</strong></li>
                        </ul>
                    </div>
                </li>
                <li>
                    Step 4: Now, assume that we have a table of size 7 to store these strings. The hash function that is used here is the sum of the characters in key mod Table size. We can compute the location of the string in the array by taking the sum(string) mod 7.
                </li>
                <li>
                    Step 5: So we will then store:
                    <ul style={listStyle}>
                        <li><strong>"ab" in 3 mod 7 = 3</strong></li>
                        <li><strong>"cd" in 7 mod 7 = 0</strong></li>
                        <li><strong>"efg" in 18 mod 7 = 4</strong></li>
                    </ul>
                </li>
            </ol>
            <img src={p3} alt="" style={ing} />
            <p style={para}>
                The above technique enables us to calculate the location of a given string by using a simple hash function and rapidly find the value that is stored in that location. Therefore the idea of hashing seems like a great way to store (key, value) pairs of the data in a table.
            </p>

            <h2 style={subHeadingStyle}>What is a Hash function?</h2>
            <p style={para}>
                The hash function creates a mapping between key and value, this is done through the use of mathematical formulas known as hash functions. The result of the hash function is referred to as a hash value or hash. The hash value is a representation of the original string of characters but usually smaller than the original.
                <br />
                <br />
                For example: Consider an array as a Map where the key is the index and the value is the value at that index. So for an array A if we have index i which will be treated as the key then we can find the value by simply looking at the value at A[i].
            </p>

            <h2 style={subHeadingStyle}>Types of Hash functions</h2>
            <ul style={listStyle}>
                <li>Division Method</li>
                <li>Mid Square Method</li>
                <li>Folding Method</li>
                <li>Multiplication Method</li>
            </ul>

            <h2 style={subHeadingStyle}>Properties of a Good hash function</h2>
            <p style={para}>
                A hash function that maps every item into its own unique slot is known as a perfect hash function. We can construct a perfect hash function if we know the items and the collection will never change but the problem is that there is no systematic way to construct a perfect hash function given an arbitrary collection of items. Fortunately, we will still gain performance efficiency even if the hash function isn’t perfect. We can achieve a perfect hash function by increasing the size of the hash table so that every possible value can be accommodated. As a result, each item will have a unique slot. Although this approach is feasible for a small number of items, it is not practical when the number of possibilities is large.
                <br /><br />
                So, we can construct our hash function to do the same but the things that we must be careful about while constructing our own hash function.
                <br /><br />
                A good hash function should have the following properties:
            </p>
            <ol style={{ ...listStyle, listStyleType: 'decimal' }}>
                <li>Uniform Distribution: Hash function must evenly distribute the keys into the hash table so that a single slot is not overloaded.</li>
                <li>Minimize Collisions: The hash function should be designed to minimize the chances of two keys mapping to the same index.</li>
                <li>Deterministic: A hash function must always produce the same output for the same input.</li>
                <li>Efficient: The hash function should be efficient to compute.</li>
            </ol>

            <h2 style={subHeadingStyle}>What are Collisions?</h2>
            <p style={para}>
                A hash collision occurs when two keys hash to the same index in a hash table. This means that the hash function produced the same hash value for two different keys. Collisions are inevitable because the number of possible keys is larger than the number of available hash table slots.
            </p>
            <p style={para}>
                Collisions can have a significant impact on the performance of a hash table, leading to increased retrieval times. If many keys hash to the same index, the performance can degrade to O(n) for operations like searching or inserting. To mitigate this issue, various collision resolution techniques can be employed.
            </p>

            <h2 style={subHeadingStyle}>Collision Resolution Techniques</h2>
            <p style={para}>There are several methods to handle collisions:</p>
            <ul style={listStyle}>
                <li><strong>Separate-Chaining:</strong> The idea is to make each cell of the hash table point to a linked list of records that have the same hash function value. Chaining is simple but requires additional memory outside the table.
<br/>
Example: We have given a hash function and we have to insert some elements in the hash table using a separate chaining method for collision resolution technique.</li>
                    <div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', borderRadius: '15px' }}>
                    Hash function = key % 5,
                    <br/> 
                    Elements = 12, 15, 22, 25 and 37.
                    </div>

        <div style={galleryStyle}>
            <img src={g1[currentIndex]} alt="" style={imgStyle} />
            <div style={arrowContainerStyle}>
                <span style={arrowStyle} onClick={handlePrev}>&larr;</span>
                <span style={arrowStyle} onClick={handleNext}>&rarr;</span>
            </div>
        </div>
        <br/><br/>
                <li><strong>Open Addressing:</strong> This method finds another open slot in the hash table when a collision occurs. There are various strategies for probing for the next available slot, such as linear probing, quadratic probing, and double hashing.</li>
            <br/>
            <ul style={{ ...listStyle, listStyleType: 'decimal' }}>
<li><strong>Linear probing :-</strong>In linear probing, the hash table is searched sequentially that starts from the original location of the hash. If in case the location that we get is already occupied, then we check for the next location.</li>
<br/>
<strong>Algorithm</strong>
<div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', borderRadius: '15px' }}>
<ul style={{ ...listStyle, listStyleType: 'decimal' }}>
<li>Calculate the hash key. i.e.  key = data % size</li> 
<br/>
<li><ul style={listStyle}>Check, if  hashTable[key]  is empty 
<li>store the value directly by  hashTable[key] = data</li>
</ul>
</li><br/> 
<li><ul style={listStyle}>If the hash index already has some value then
<br/>
<li>check for next index using  key = (key+1) % size</li> 
</ul>
</li>
<br/>
<li>Check, if the next index is available hashTable[key] then store the value. Otherwise try for next index.</li> 
<br/>
<li>Do the above process till we find the space.</li>
</ul>
</div>
<div style={galleryStyle}>
            <img src={g2[currentIndex]} alt="" style={imgStyle} />
            <div style={arrowContainerStyle}>
                <span style={arrowStyle} onClick={handlePrev}>&larr;</span>
                <span style={arrowStyle} onClick={handleNext}>&rarr;</span>
            </div>
        </div>
<br/><br/>
                <li><strong>Quadratic Probing :-</strong></li>Quadratic probing is an open addressing scheme in computer programming for resolving hash collisions in hash tables. Quadratic probing operates by taking the original hash index and adding successive values of an arbitrary quadratic polynomial until an open slot is found.
<br/>
An example sequence using quadratic probing is:
<div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', borderRadius: '15px' }}>
H  + (1 ^ 2)  ,  H  + (2 ^ 2)  ,  H  + (3 ^ 2)  ,  H  + (4 ^ 2)  ………………….  H  + (k ^ 2)
                    </div>
                    This method is also known as the mid-square method because in this method we look for i 2 ‘th probe (slot) in i’th iteration and the value of i = 0, 1, . . . n – 1. We always start from the original hash location. If only the location is occupied then we check the other slots.
<br/><br/>
Let hash(x) be the slot index computed using the hash function and n be the size of the hash table.
<div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', borderRadius: '15px' }}>
If the slot hash(x) % n is full, then we try (hash(x) + 1  2  ) % n.<br/> 
 If (hash(x) + 1  2  ) % n is also full, then we try (hash(x) + 2  2  ) % n.<br/> 
 If (hash(x) + 2  2  ) % n is also full, then we try (hash(x) + 3  2  ) % n.<br/> 
 This process will be repeated for all the values of  i  until an empty slot is found 
                    </div>
                    <br/><br/>
                    Example: Let us consider table Size = 7, hash function as Hash(x) = x % 7 and collision resolution strategy to be f(i) = i 2 . Insert = 22, 30, and 50
                    <br/>
                    <div style={galleryStyle}>
            <img src={g3[currentIndex]} alt="" style={imgStyle} />
            <div style={arrowContainerStyle}>
                <span style={arrowStyle} onClick={handlePrev}>&larr;</span>
                <span style={arrowStyle} onClick={handleNext}>&rarr;</span>
            </div>
        </div>
<br/><br/>
        <li><strong>Double Hashing :-</strong></li>Double hashing is a collision resolving technique in Open Addressed Hash tables. Double hashing make use of two hash function,
<br/>
<ul style={listStyle}>
    <li>The first hash function is h1(k) which takes the key and gives out a location on the hash table. But if the new location is not occupied or empty then we can easily place our key.</li>
    <li>But in case the location is occupied (collision) we will use secondary hash-function h2(k) in combination with the first hash-function h1(k) to find the new location on the hash table.</li>
</ul>
This combination of hash functions is of the form
<div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', borderRadius: '15px' }}>
h(k, i) = (h1(k) + i * h2(k)) % n
                    </div>
where
<br/>
<ul style={listStyle}>
<li>i is a non-negative integer that indicates a collision number,</li>
<li>k = element/key which is being hashed</li>
<li>n = hash table size.</li>
</ul>
<br/>
Example: Insert the keys 27, 43, 692, 72 into the Hash Table of size 7. where first hash-function is h1​(k) = k mod 7 and second hash-function is h2(k) = 1 + (k mod 5)
        <div style={galleryStyle}>
            <img src={g4[currentIndex]} alt="" style={imgStyle} />
            <div style={arrowContainerStyle}>
                <span style={arrowStyle} onClick={handlePrev}>&larr;</span>
                <span style={arrowStyle} onClick={handleNext}>&rarr;</span>
            </div>
        </div>
            </ul>
            </ul>
            <h2 style={subHeadingStyle}>Conclusion</h2>
            <p style={para}>
                Hashing is a powerful technique for organizing and retrieving data efficiently. Understanding how collisions occur and employing appropriate resolution strategies can significantly improve the performance of hash tables. By ensuring a good hash function and managing collisions effectively, we can achieve optimal performance in our applications.
            </p>
        </div>
    );
};

export default HashingConcept;
