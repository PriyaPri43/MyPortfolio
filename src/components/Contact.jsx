import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            })
            .finally(() => setIsSending(false));
    };

    return (
        <div className="w-full min-h-screen bg-primary flex justify-center items-center py-20 px-4 relative overflow-hidden">

            {/* Background Blobs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-accent opacity-20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-[120px] animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-[#111827]/80 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row"
            >
                {/* Information Side (Left/Top) */}
                <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] p-8 md:p-12 md:w-5/12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent/10 opacity-50 z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center text-accent">
                                    <FaEnvelope />
                                </div>
                                <span className="text-sm">privdiv49@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center text-accent">
                                    <FaUser />
                                </div>
                                <span className="text-sm">Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side (Right/Bottom) */}
                <div className="p-8 md:p-12 md:w-7/12 bg-[#0d1117]">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                        <div className="relative">
                            <FaUser className="absolute top-4 left-4 text-gray-500" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full bg-[#1f2937] border border-gray-700 text-gray-100 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-500"
                                required
                            />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute top-4 left-4 text-gray-500" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full bg-[#1f2937] border border-gray-700 text-gray-100 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-500"
                                required
                            />
                        </div>
                        <div className="relative">
                            <FaCommentAlt className="absolute top-4 left-4 text-gray-500 mt-1" />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                className="w-full bg-[#1f2937] border border-gray-700 text-gray-100 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder-gray-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="group bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-[#0891b2] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                            {!isSending && <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
