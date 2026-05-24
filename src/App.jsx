import './App.css';
import { HashRouter as BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../src/Components/Navbar.jsx';
import Footer from '../src/Components/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/Courses.jsx';
import COURSES from './Components/COURSES.jsx';
// import SideNav from './Components/SideNavbar';

// Linked list page components
import LinkedlistPage from './Algorithms/Linkedlist/LinkedlistPage.jsx';
import Aim from './Algorithms/Linkedlist/Aim.jsx';
import Articles from './Algorithms/Linkedlist/Articles.jsx';
import Test from './Algorithms/Linkedlist/Test.jsx';
import Tutorials from './Algorithms/Linkedlist/Tutorials.jsx';
import Type from './Algorithms/Linkedlist/ListType.jsx';
// import Visualization from './Algorithms/Linkedlist/Visualization.jsx';
import Insertion from './Algorithms/Linkedlist/Insertion.jsx';
import Deletion from './Algorithms/Linkedlist/Deletion.jsx';
import Traversal from './Algorithms/Linkedlist/Traversal.jsx';

//Stack page components
import StackPage from './Algorithms/Stack/StackPage.jsx';
import AimStack from './Algorithms/Stack/AimStack.jsx';
import StackConcept from './Algorithms/Stack/StackConcept.jsx';
import StackTest from './Algorithms/Stack/StackTest.jsx';
import StackTutorials from './Algorithms/Stack/StackTutorials.jsx';
import StackVisualization from './Algorithms/Stack/StackVisualization.jsx';
import MonoStack from './Algorithms/Stack/MonoStack.jsx';
import StackImplementation from './Algorithms/Stack/StackIMP.jsx';

// Hashing page components 
import HashingPage from './Algorithms/Hashing/HashingPage.jsx';
import HashingAim from './Algorithms/Hashing/HashingAim.jsx';
import HashingTest from './Algorithms/Hashing/HashingTest.jsx';
import HashingConcept from './Algorithms/Hashing/HashingConcept.jsx';
import HashingTutorials from './Algorithms/Hashing/HashingTutorials.jsx';
import HashTable from './Algorithms/Hashing/HashTable.jsx';
import HashingChaining from './Algorithms/Hashing/HashingChaining.jsx';
import PasswordHashingVisualization from './Algorithms/Hashing/PasswordHashingVisualization.jsx';
// import HashingVisualization from './Algorithms/Hashing/HashingVisualization.jsx';

// Sorting page components
import SortingPage from './Algorithms/Sorting/SortingPage.jsx';
import SortingAim from './Algorithms/Sorting/Aim_Sort.jsx';
import SortingTest from './Algorithms/Sorting/Test_Sort.jsx';
import SortingTutorials from './Algorithms/Sorting/Tutorials_Sort.jsx';
import SortingArticles from './Algorithms/Sorting/Articles_Sort.jsx';
import SortingVisualization from './Algorithms/Sorting/Visualization_Sort.jsx';

// graphs page components
import GraphsPage from './Algorithms/Dijkstra/DijkstraPage.jsx';
import GraphsAim from './Algorithms/Dijkstra/DijkstraAim.jsx';
import GraphsConcept from './Algorithms/Dijkstra/DijkstraConcept.jsx';
import GraphsAlgorithm from './Algorithms/Dijkstra/DijkstraAlgorithm.jsx';
import GraphsTest from './Algorithms/Dijkstra/DijkstraTest.jsx';
import GraphsTutorials from './Algorithms/Dijkstra/DijkstraTutorials.jsx';
import GraphsArticles from './Algorithms/Dijkstra/DijkstraArticle.jsx';
import GraphsVisualization from './Algorithms/Dijkstra/DijkstraVisualization.jsx';

// queues page components
import QueuesPage from './Algorithms/Queue/QueuePage.jsx';
import QueuesAim from './Algorithms/Queue/AimQueue.jsx';
import QueuesTest from './Algorithms/Queue/TestQueue.jsx';
import QueuesTypes from './Algorithms/Queue/QueueTypes.jsx';
import QueuesConcepts from './Algorithms/Queue/QueueConcept.jsx';
import QueuesVisualization from './Algorithms/Queue/QueueVisualization';
import QueueImplementation from './Algorithms/Queue/QueueImplement.jsx'
import QueueTutorial from './Algorithms/Queue/QueueTutorial.jsx'

// New placeholder pages
import TreesPage from './Algorithms/Trees/TreesPage.jsx';
import DPPage from './Algorithms/DP/DPPage.jsx';
import GreedyPage from './Algorithms/Greedy/GreedyPage.jsx';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<HomePage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<COURSES />} />
          
          <Route path="/courses/:courseId/Linked List" element={<LinkedlistPage />}>
            <Route index element={<Aim />} />
            <Route path="articles" element={<Articles />} />
            <Route path="type" element={<Type />} />
            <Route path="visualization">
              <Route path="insertion" element={<Insertion />} />
              <Route path="deletion" element={<Deletion />} />
              <Route path="traversal" element={<Traversal />} />
            </Route>
            <Route path="test" element={<Test />} />
            
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="*" element={<Navigate to={`.`} />} />
          </Route>

          <Route path="/courses/:courseId/Stacks" element={<StackPage />}>
            <Route index element={<AimStack />} />
            <Route path="mono" element={<MonoStack />} />
            <Route path="visualization" element={<StackVisualization />} />
            <Route path="test" element={<StackTest />} />
            <Route path="concept" element={<StackConcept />} />
            <Route path="tutorial" element={<StackTutorials />} />
            <Route path="implementation" element={<StackImplementation />} />
            <Route path="*" element={<Navigate to={`.`} />} />
          </Route>

          <Route path="/courses/:courseId/Hashing" element={<HashingPage />}>
            <Route index element={<HashingAim />} />
            <Route path="visualization">
              <Route path="QuadraticProbing" element={<HashTable size={10} />} />
              <Route path="SeparateChaining" element={<HashingChaining />} />
            </Route>
            
            <Route path='password' element={<PasswordHashingVisualization />} />
            <Route path="test" element={<HashingTest />} />
            <Route path="concept" element={<HashingConcept />} />
            <Route path="tutorials" element={<HashingTutorials />} />
            <Route path="*" element={<Navigate to={'.'} />} />
          </Route>

          <Route path="/courses/:courseId/Sorting" element={<SortingPage />}>
            <Route index element={<SortingAim />} />
            <Route path="visualization" element={<SortingVisualization />} />
            <Route path="test" element={<SortingTest />} />
            <Route path="articles" element={<SortingArticles />} />
            <Route path="tutorials" element={<SortingTutorials />} />
            <Route path="*" element={<Navigate to={'.'} />} />
          </Route>

          <Route path="/courses/:courseId/Graphs" element={<GraphsPage />}>
            <Route index element={<GraphsAim />} />
            <Route path="concept" element={<GraphsConcept/>} />
            <Route path="Algorithm" element={<GraphsAlgorithm/>} />
            <Route path="visualization" element={<GraphsVisualization />} />
            <Route path="test" element={<GraphsTest />} />
            <Route path="articles" element={<GraphsArticles />} />
            <Route path="tutorials" element={<GraphsTutorials />} />
            <Route path="*" element={<Navigate to={'.'} />} />
          </Route>

          <Route path="/courses/:courseId/Queues" element={<QueuesPage />}>
            <Route index element={<QueuesAim />} />
            <Route path="visualization" element={<QueuesVisualization />} />
            <Route path="implementation" element={<QueueImplementation />} />
            <Route path="test" element={<QueuesTest />} />
            <Route path="articles" element={<QueuesConcepts />} />
            <Route path="type" element={<QueuesTypes />} />
            <Route path="tutorial" element={<QueueTutorial />} />
            <Route path="*" element={<Navigate to={'.'} />} />
          </Route>

          {/* New Algorithm Routes */}
          <Route path="/courses/:courseId/Trees" element={<TreesPage />} />
          <Route path="/courses/:courseId/Dynamic Programming" element={<DPPage />} />
          <Route path="/courses/:courseId/Greedy Algorithms" element={<GreedyPage />} />

        </Routes>
                
        <Footer />
      </BrowserRouter>
  );
}

export default App;

