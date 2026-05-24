# DSA Visualizer

Hey there! Welcome to **DSA Visualizer**, an interactive learning platform I built to make Data Structures and Algorithms a little less intimidating. 

Reading about algorithms in textbooks or staring at raw code can get pretty dry. I wanted to build something that actually shows you how data moves under the hood—with slick animations, a modern dark-mode UI, and hands-on practice.

🔗 **[Check out the live site here!](https://AryanAkhare.github.io/DSA_Visualizer/)**

---

## What it does

- **Interactive Visualizers:** Play around with different data structures and see them change in real-time.
  - **Stacks & Queues:** Watch push/pop and enqueue/dequeue operations animated on a clean glassmorphism track.
  - **Linked Lists:** Add or remove nodes and see how the pointers (neon arrows) shift around.
  - **Sorting (Merge Sort):** Watch arrays split apart and merge back together, with color-coded bars to show what's being compared and sorted.
  - **Dijkstra's Algorithm:** A pathfinding visualizer that highlights shortest paths and visited nodes on a glowing canvas.
  - **Hashing:** Convert text to cryptographic hashes (like SHA-256) in real-time.
- **Learn the Theory:** Read up on the concepts before you dive into the visuals.
- **Quizzes:** Test what you've learned right inside the app.

---

## How it's built

I kept the stack pretty straightforward but focused heavily on making the UI feel premium:
- **React + Vite** for the frontend
- **Framer Motion** for all the smooth component animations
- **Vanilla CSS Modules** for styling (lots of frosted glass and neon accents)
- **CryptoJS** for the hashing algorithms

---

## Wanna run it locally?

If you want to poke around the code or run it on your own machine, it's super easy:

1. Clone the repo:
   ```bash
   git clone https://github.com/AryanAkhare/DSA_Visualizer.git
   cd DSA_Visualizer
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Spin up the dev server:
   ```bash
   npm run dev
   ```

---

## Contributing

If you find a bug, have an idea for a new algorithm to visualize, or just want to improve the code, feel free to open an issue or a pull request. I'm always open to ideas!

1. Fork it
2. Create your feature branch (`git checkout -b feature/CoolNewAlgorithm`)
3. Commit your changes (`git commit -m 'Added something cool'`)
4. Push to the branch (`git push origin feature/CoolNewAlgorithm`)
5. Open a Pull Request
