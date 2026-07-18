import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Marketplace', path: '/marketpage' },
        { name: 'Community', path: '/feedpage' },
        { name: 'My Collection', path: '/collectionpage' },
        { name: 'My Account', path: '/accountpage' },
    ];

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 bg-transparent pointer-events-none">
                <nav className="pointer-events-auto bg-black/90 backdrop-blur-md px-6 py-3 mx-auto max-w-6xl flex items-center justify-between relative shadow-lg rounded-full border border-zinc-800 transition-all duration-300">
                    <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                        Collector's Hub
                    </Link>

                    <div className="hidden md:flex items-center bg-zinc-900 border border-zinc-800 rounded-full px-1 py-1 gap-2">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link 
                                    key={item.name} 
                                    to={item.path} 
                                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${isActive ? 'bg-zinc-800 border border-zinc-700 font-medium text-white shadow-sm' : 'text-zinc-400 hover:text-white' }`} 
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="flex items-center gap-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0 shadow-md transition-transform hover:scale-105">
                            Sign In
                            <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </button>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {menuOpen && (
                        <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-black/95 backdrop-blur-md border border-zinc-800 flex flex-col p-5 gap-2 md:hidden shadow-xl rounded-2xl z-50">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link 
                                        key={item.name} 
                                        to={item.path} 
                                        onClick={() => setMenuOpen(false)}
                                        className={`px-4 py-3 rounded-xl text-sm ${isActive ? 'bg-zinc-900 font-medium text-white border border-zinc-700' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white' }`} 
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <button className="flex items-center justify-center gap-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-medium px-5 py-3 rounded-full cursor-pointer border-0 mt-3 w-full">
                                Sign In
                                <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
};

export default Navbar;