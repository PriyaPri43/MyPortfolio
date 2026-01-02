import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <div name='projects' className='w-full py-24 bg-white text-gray-900 dark:bg-primary dark:text-gray-300'>
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-12'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Projects</p>
                    <p className='py-6 text-gray-600 dark:text-[#8892b0] text-lg'>// Check out some of my recent work</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {portfolioData.projects.map((item, index) => (
                        <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white dark:bg-[#111827] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 hover:border-accent/50 transition-colors duration-300 h-full flex flex-col relative group'
                            >
                                {/* Decorative Header */}
                                    <div className="h-40 bg-gradient-to-br dark:from-[#1f2937] dark:to-[#111827] from-gray-100 relative overflow-hidden p-6 flex items-center justify-center group-hover:from-[#1f2937] group-hover:to-[#0f1219] transition-all">
                                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                                    <FaFolderOpen className="text-6xl text-gray-700 dark:text-gray-300 group-hover:text-accentLight/20 dark:group-hover:text-accent/20 transition-colors duration-500" />
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accentLight dark:via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accentLight dark:group-hover:text-accent transition-colors'>{item.title}</h3>
                                    <p className="text-gray-600 dark:text-[#8892b0] mb-6 flex-grow leading-relaxed">{item.description}</p>

                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {item.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs font-mono text-accentLight dark:text-accent bg-accentLight/10 dark:bg-accent/10 px-3 py-1 rounded-full border border-accentLight/20 dark:border-accent/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors group/link">
                                            <FaGithub className="text-lg group-hover/link:text-accent transition-colors" /> Code
                                        </a>
                                        <a href={item.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors group/link">
                                            <FaExternalLinkAlt className="text-lg group-hover/link:text-accent transition-colors" /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
