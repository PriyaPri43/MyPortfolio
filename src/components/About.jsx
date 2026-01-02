import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <div name='about' className='w-full py-20 bg-primary text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-accent'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='sm:text-right text-4xl font-bold text-gray-100'
                    >
                        <p>Hi. I'm {portfolioData.name}, nice to meet you. Please take a look around.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-4 text-lg leading-relaxed text-[#8892b0]">
                            I am a dedicated MERN Stack Developer with over 3 years of experience in building scalable web applications. My journey involves deep diving into React ecosystem, designing robust database schemas with MongoDB, and engineering high-performance APIs with Node.js and Express.
                        </p>
                        <p className="text-lg leading-relaxed text-[#8892b0]">
                            I thrive on solving complex problems, optimizing code for performance, and collaborating with cross-functional teams to deliver exceptional digital products.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
