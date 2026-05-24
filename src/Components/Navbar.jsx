import { Link } from "react-router-dom";
import logo from '../assets/logotemp.jpeg';

export default function Navbar() {
    return (
        <header className="w-full fixed top-0 z-50 text-gray-300 bg-[#0B0C10] bg-opacity-60 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
                    <img
                        alt="logo"
                        className="w-12 h-12 object-cover object-center rounded-full inline-block border-2 border-[#66FCF1] shadow-[0_0_10px_rgba(102,252,241,0.5)]"
                        src={logo}
                    />
                    <span className="ml-4 text-2xl font-bold tracking-wide font-['Outfit']">Algolens</span>
                </Link>
                <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-6 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center font-['Inter']">
                    <ul className="flex space-x-8 md:space-x-12 text-md md:text-lg font-medium">
                        <li>
                            <Link to="/" className="relative text-gray-400 hover:text-[#66FCF1] transition-colors duration-300 group">
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#66FCF1] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="relative text-gray-400 hover:text-[#66FCF1] transition-colors duration-300 group">
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#66FCF1] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses" className="relative text-gray-400 hover:text-[#66FCF1] transition-colors duration-300 group">
                                Courses
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#66FCF1] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
