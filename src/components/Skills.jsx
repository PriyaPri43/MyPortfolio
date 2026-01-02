import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div name='skills' className='w-full py-24 bg-gray-50 text-gray-900 dark:bg-primary dark:text-gray-300 relative'>
            {/* Background decoration */}
            <div className="absolute right-0 top-20 w-64 h-64 bg-accentLight/5 dark:bg-accent/5 rounded-full blur-3xl"></div>

            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10'>
                <div className='pb-12 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Skills</p>
                    <p className='py-6 text-gray-600 dark:text-[#8892b0] text-lg'>// Technologies I work with</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center py-8' 
                >
                    {portfolioData.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className='relative group perspective'
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                                <div className='relative shadow-md dark:shadow-xl bg-white dark:bg-[#111827] rounded-lg p-8 flex flex-col items-center justify-center h-full border border-gray-200 dark:border-gray-800 ring-1 ring-gray-100 dark:ring-0 hover:shadow-lg dark:hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 transform-gpu group-hover:-translate-y-2 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accentLight dark:focus:ring-accent cursor-pointer'>
                                    <Icon className='w-16 h-16 mx-auto mb-6 text-gray-700 dark:text-gray-300 group-hover:text-accentLight dark:group-hover:text-accent transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6' />
                                    <p className='text-lg font-semibold tracking-wide text-gray-900 dark:text-gray-100'>{skill.name}</p>

                                    {/* Progress Bar (Optional, can be removed if too cluttered) */}
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-4 overflow-hidden">
                                        <div className="bg-accentLight dark:bg-accent h-1.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
