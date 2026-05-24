import styled from "styled-components";
import { Link } from "react-router-dom";

const courseData = [
  {
    id: 1,
    title: "Data Structures",
    price: "Fundamentals",
    description: "Understand stacks, queues and linked lists for effective data handling.",
    link: "/course/beginner",
    items: ["Stacks", "Queues", "Linked Lists"],
  },
  {
    id: 2,
    title: "Algorithms",
    price: "Search & Sort",
    description: "Learn key algorithms for efficient data searching and sorting.",
    link: "/course/intermediate",
    items: ["Binary Search", "Quick Sort", "Merge Sort"],
  },
  {
    id: 3,
    title: "Advanced",
    price: "DSA",
    description: "Master trees, dynamic programming, and greedy algorithms for complex problem-solving.",
    link: "/course/advanced",
    items: ["Trees & Graphs", "Dynamic Programming", "Greedy Algorithms"],
  },
];

const Courses = () => {
  return (
    <StyledWrapper>
      {courseData.map((course) => (
        <section className="eduzone-course-card" key={course.id}>

          <header>
            <h2 className="eduzone-course-title">{course.title}</h2>
            <h1 className="eduzone-course-price">{course.price}</h1>
          </header>

          <p className="eduzone-course-desc">{course.description}</p>

          <ul className="eduzone-course-lists">
            {course.items.map((item, index) => (
              <li className="eduzone-course-list" key={index}>
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <Link to={`/courses/:${courseData.id}`} className="eduzone-course-action">
            Get Started
          </Link>

        </section>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 6rem 2rem 4rem 2rem; 
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  
  /* Modern Mesh Gradient Background */
  background-color: var(--bg-main, #0B0C10);
  background-image: 
      radial-gradient(circle at 85% 50%, rgba(102, 252, 241, 0.05), transparent 30%),
      radial-gradient(circle at 15% 30%, rgba(170, 0, 255, 0.05), transparent 30%);
  position: relative;
  overflow: hidden;

  &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 0;
      pointer-events: none;
  }

  .eduzone-course-card {
    flex: 1 1 300px;
    max-width: 350px;
    border-radius: 20px;
    
    /* Glassmorphism Styling */
    background-color: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 450px; 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: rgba(102, 252, 241, 0.4);
      box-shadow: 0 20px 40px rgba(102, 252, 241, 0.15), 0 0 0 1px rgba(170, 0, 255, 0.2);
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .eduzone-course-title {
    font-family: var(--font-heading, 'Outfit');
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 600;
    color: var(--text-muted, #C5C6C7);
    margin-bottom: 0.5rem;
  }

  .eduzone-course-price {
    font-family: var(--font-heading, 'Outfit');
    font-size: 2.2rem;
    line-height: 1.1;
    font-weight: 800;
    color: var(--text-main, #FFFFFF);
    margin: 0;
    
    background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .eduzone-course-desc {
    margin: 1.5rem 0;
    color: var(--text-muted, #C5C6C7);
    font-family: var(--font-body, 'Inter');
    font-size: 1rem;
    line-height: 1.6;
    flex-grow: 1;
  }

  .eduzone-course-lists {
    margin-bottom: 2rem;
    color: var(--text-main, #FFFFFF);
    list-style: none;
    padding: 0;
  }

  .eduzone-course-list {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    font-family: var(--font-body, 'Inter');
    font-size: 0.95rem;
    font-weight: 500;
  }

  .eduzone-course-list svg {
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.8rem;
    color: var(--accent-cyan, #66FCF1);
    transition: color 0.3s ease;
  }
  
  .eduzone-course-list:hover svg {
    color: var(--accent-purple, #aa00ff);
  }

  .eduzone-course-action {
    display: block;
    width: 100%;
    background: linear-gradient(135deg, var(--accent-teal, #45A29E), var(--accent-cyan, #66FCF1));
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    font-family: var(--font-heading, 'Outfit');
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 252, 241, 0.2);
    box-sizing: border-box;
    
    &:hover {
      background: linear-gradient(135deg, var(--accent-purple, #aa00ff), #3c00ff);
      box-shadow: 0 8px 20px rgba(170, 0, 255, 0.4);
      transform: translateY(-2px);
    }
  }
`;

export default Courses;
