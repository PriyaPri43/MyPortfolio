import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div name='home' className='w-full min-h-screen bg-white dark:bg-primary flex flex-col justify-center items-center text-center px-4 relative overflow-hidden text-gray-900 dark:text-gray-100'>

            {/* Dynamic Background Elements */}
            <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-accentLight dark:bg-accent opacity-10 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-purple-600 opacity-10 rounded-full blur-[100px] animation-delay-2000 animate-blob"></div>
            <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-[80px] animation-delay-4000 animate-blob"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className='max-w-[1000px] mx-auto flex flex-col justify-center items-center z-10'
            >
                <motion.p
                    className='text-accentLight dark:text-accent font-semibold tracking-[0.2em] text-lg mb-4 uppercase'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Welcome to my world
                </motion.p>

                <h1 className='text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-6'>
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 animate-shimmer bg-[length:200%_auto]">{portfolioData.name}</span>
                </h1>

                <div className='text-3xl sm:text-5xl font-bold text-gray-600 dark:text-[#8892b0] mb-8 h-[60px] sm:h-[80px] flex items-center justify-center'>
                    <TypeAnimation
                        sequence={[
                            'MERN Stack Developer',
                            2000,
                            'React.js Specialist',
                            2000,
                            'Full Stack Engineer',
                            2000,
                            'Node.js Specialist',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-accentLight dark:text-accent"
                    />
                </div>

                <p className='text-gray-600 dark:text-[#8892b0] text-lg sm:text-xl py-4 max-w-[700px] leading-relaxed mx-auto'>
                    I build scalable, secure, and high-performance applications.
                    Focused on creating seamless digital experiences with modern technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <Link to="/projects">
                        <button className='text-primary bg-accent px-8 py-4 flex items-center gap-3 rounded-full font-bold hover:bg-[#0891b2] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]'>
                            View Projects
                            <span className='animate-bounce-right'>
                                <FaArrowRight />
                            </span>
                        </button>
                    </Link>
                    <a href="./Priyanka_MERN_Developer_2026.pdf" download>
                        <button className='text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-8 py-4 flex items-center gap-3 rounded-full font-bold hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white hover:scale-105 transition-all duration-300'>
                            Download Resume
                            <FaDownload className="text-sm" />
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
