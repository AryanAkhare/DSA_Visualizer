export default function DPPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0B0C10] text-white font-['Inter'] relative overflow-hidden px-4 text-center pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(170,0,255,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="z-10 p-10 bg-white bg-opacity-5 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl max-w-2xl transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-extrabold font-['Outfit'] mb-6 bg-gradient-to-r from-white to-[#aa00ff] text-transparent bg-clip-text">
          Dynamic Programming
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Master memoization and tabulation. Visualize state transitions for complex problems like the Knapsack Problem and Longest Common Subsequence.
        </p>
        <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#aa00ff] to-[#3c00ff] text-white font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(170,0,255,0.4)] animate-pulse">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
