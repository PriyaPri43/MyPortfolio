import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <div className="bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
                </div>

                <div className="flex space-x-6 text-2xl">
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-accentLight dark:hover:text-accent transition-colors"><FaGithub /></a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accentLight dark:hover:text-accent transition-colors"><FaLinkedin /></a>
                    {/* Add more social links if available */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
