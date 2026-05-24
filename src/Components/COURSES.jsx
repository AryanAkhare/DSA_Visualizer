import styles from '../Stylesheets/COURSES.module.css';
import CourseCard from '../Components/CourseCard.jsx';
import { Link , useNavigate } from 'react-router-dom';
import demo1 from '../assets/testPaper.svg'
import demo2 from '../assets/react.svg'
const dataStructure = [
  {
    id: 1,
    title: 'Stacks',
    description: 'Dive into the foundational data structures of stacks.',
    longDescription: 'Explore the principles and applications of stacks',
    image:demo1
  },
  {
    id:2,
    title:'Queues',
    description: 'Dive into the foundational data structures of queue.',
    longDescription: 'Explore the principles and applications of queue',
    
  },
  {
    id: 3,
    title: 'Hashing',
    description: 'Master the techniques of efficient data retrieval with hashing.',
    longDescription: 'Learn the powerful concept of hashing...',
    
  },
  {
    id: 6,
    title: 'Linked List',
    description: 'Understand the dynamic data structure of linked lists.',
    longDescription: 'Explore the intricacies of linked lists...',
    
  },
  {
    id: 7,
    title: 'Sorting',
    description: 'Learn the algorithms behind efficient data processing.',
    longDescription: 'Get to grips with the fundamental algorithms...',
    
  },
  {
    id: 8,
    title: 'Graphs',
    description: 'Uncover the secrets of hierarchical and networked data structures.',
    longDescription: 'Delve into the world of trees and graphs...',
    image:demo2
  },
  {
    id: 9,
    title: 'Trees',
    description: 'Explore hierarchical structures like Binary Trees, BSTs, and Heaps.',
    longDescription: 'Visualize hierarchical relationships and recursive structures...'
  },
  {
    id: 10,
    title: 'Dynamic Programming',
    description: 'Solve complex problems by breaking them into overlapping subproblems.',
    longDescription: 'Master the art of memoization and tabulation...'
  },
  {
    id: 11,
    title: 'Greedy Algorithms',
    description: 'Learn to make the locally optimal choice at each stage.',
    longDescription: 'Explore algorithms like Huffman Coding and Kruskal’s...'
  }
];

export default function COURSES() {
  const navigate = useNavigate();

  const handleCardClick = (course) => {
    // Navigate to the SideNav with courseId and courseTitle
    navigate(`/courses/${course.id}/${course.title}`);
  };
  return (
    <div className={styles.container}>
        <div className={styles.courseGrid}>
          {dataStructure.map(ds => (
            <Link key={ds.id} to={`/courses/${ds.title}`}>
              <CourseCard course={ds} onClick={handleCardClick} />
            </Link>
          ))}
        </div>
    </div>
  );
}
