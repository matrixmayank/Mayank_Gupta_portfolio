import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

import avatarImage from '../assets/avatar.png';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-accent-cyan/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* 3D Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative"
                    >
                        <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform scale-110"></div>
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-sm ring-1 ring-white/20 shadow-2xl overflow-hidden">
                            <motion.img
                                src={avatarImage}
                                alt="3D Avatar"
                                className="w-full h-full object-cover rounded-full"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                            Available for new projects
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                            Designing <span className="text-gradient">Digital</span> <br />
                            <span className="text-gradient">Experiences</span> that Matter
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                            I help teams make smarter product decisions through evidence-driven research, clear insights, and real-world user understanding.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-accent rounded-full hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                        >
                            View My Work
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-text-primary transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 backdrop-blur-sm"
                        >
                            <Download className="mr-2" size={20} />
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-accent rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
