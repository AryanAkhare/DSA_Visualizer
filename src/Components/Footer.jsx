import logo from '../assets/logotemp.jpeg';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-gray-800 relative z-10 font-['Inter']">
      <div className="container mx-auto px-5 py-8 flex items-center sm:flex-row flex-col justify-between">
        
        {/* Left Side: Logo & Brand */}
        <div className="flex font-medium items-center md:justify-start justify-center text-white">
          <img
            src={logo} 
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-[#66FCF1] shadow-[0_0_10px_rgba(102,252,241,0.5)] object-cover"
          />
          <span className="ml-4 text-xl font-bold tracking-wide font-['Outfit']">Algolens</span>
          
          <span className="hidden sm:inline-block border-l border-gray-600 h-6 mx-4"></span> 
          
          <p className="text-sm text-gray-400 sm:ml-2 sm:mt-0 mt-4">
              © 2024 Algolens —
              <a
                  href="https://www.rbunagpur.in/"
                  className="text-gray-300 ml-1 hover:text-[#66FCF1] transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                  @rcoem
            </a>
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start gap-4">
            <a className="text-gray-400 hover:text-[#66FCF1] transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a className="text-gray-400 hover:text-[#66FCF1] transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
            <a className="text-gray-400 hover:text-[#66FCF1] transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
            <a className="text-gray-400 hover:text-[#66FCF1] transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </a>
        </span>
      </div>
    </footer>
  );
}
