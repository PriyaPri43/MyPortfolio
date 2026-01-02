import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    return (
        <div name='experience' className='w-full py-20 bg-primary text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Experience</p>
                    <p className='py-4 text-[#8892b0]'>// My professional journey</p>
                </div>

                <div className='relative border-l border-gray-700 ml-4 md:ml-6'>
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='mb-10 ml-6 transform transition-all duration-300 hover:ml-8'
                        >
                            <span className='absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-[#111827]'>
                                <svg aria-hidden="true" className="w-3 h-3 text-[#111827]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <div className="p-4 bg-[#111827] rounded-lg border border-gray-800 shadow-sm hover:border-accent transition-colors duration-300">
                                <div className="justify-between items-center mb-2 sm:flex">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0 bg-[#1f2937] px-2 py-1 rounded">{exp.duration}</time>
                                    <div className="text-xl font-bold text-gray-100">{exp.role} <span className="text-accent">@ {exp.company}</span></div>
                                </div>
                                <div className="mb-3 text-sm font-normal text-gray-500">{exp.location}</div>
                                <ul className="list-disc pl-5 text-[#8892b0] text-sm space-y-1">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
