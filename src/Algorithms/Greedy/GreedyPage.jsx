export default function GreedyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0B0C10] text-white font-['Inter'] relative overflow-hidden px-4 text-center pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,252,241,0.05),transparent_40%)] pointer-events-none"></div>
      <div className="z-10 p-10 bg-white bg-opacity-5 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl max-w-2xl transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-extrabold font-['Outfit'] mb-6 bg-gradient-to-r from-white to-[#66FCF1] text-transparent bg-clip-text">
          Greedy Algorithms
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Learn to make the locally optimal choice at each stage. Visualize algorithms like Huffman Coding, Kruskal's, and Prim's Algorithm.
        </p>
        <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#45A29E] to-[#66FCF1] text-white font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(102,252,241,0.4)] animate-pulse">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
