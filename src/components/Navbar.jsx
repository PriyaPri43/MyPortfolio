import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Changed from <a href>
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const { theme, toggleTheme } = useTheme();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-gray-900 dark:bg-primary dark:text-gray-300 z-50 shadow-lg border-b border-gray-200 dark:border-gray-800'>
            <div className='z-10'>
                <NavLink to="/" className='text-2xl font-bold text-accentLight dark:text-accent cursor-pointer'>
                    &lt; {portfolioData.name.split(" ")[0]} /&gt;
                </NavLink>
            </div>

            {/* menu */}
            <ul className='hidden md:flex gap-8 font-medium'>
                {links.map((link) => (
                    <li key={link.name} className='text-sm uppercase tracking-wider'>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? 'text-accentLight dark:text-accent border-b-2 border-accentLight dark:border-accent pb-1 transition-all' : 'hover:text-accentLight dark:hover:text-accent duration-300 transition-colors'
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Theme toggle */}
            <div className='hidden md:flex items-center gap-4'>
                <button onClick={toggleTheme} aria-label="Toggle theme" className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-xl hover:text-accentLight dark:hover:text-accent transition-colors'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white dark:bg-primary flex flex-col justify-center items-center transition-all duration-300 ease-in-out'}>
                <ul className='text-center space-y-8'>
                    {links.map((link) => (
                        <li key={link.name} className='text-2xl hover:text-accentLight dark:hover:text-accent duration-300'>
                            <NavLink onClick={handleClick} to={link.path}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-6 mt-8">
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accentLight dark:hover:text-accent transition-colors"><FaGithub /></a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accentLight dark:hover:text-accent transition-colors"><FaLinkedin /></a>
                </div>
                <button onClick={toggleTheme} className='mt-6 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
