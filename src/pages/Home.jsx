import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const projects = [
        {
            title: "Accessible Health Monitoring App for Aging Users",
            description: "Improving usability and adoption for users aged 60+ through mixed-methods research.",
            link: "/case-study-1",
            color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
        },
        {
            title: "Job Discovery App for Unskilled Migrants",
            description: "Understanding trust, motivation, and barriers to job discovery among migrant workers.",
            link: "/case-study-2",
            color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
        },
        {
            title: "OTC Drug Label Redesign Research",
            description: "Reducing comprehension errors in over-the-counter drug labels through structured research.",
            link: "/case-study-3",
            color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Hi, I’m <span className="text-accent">Mayank Gupta</span>
                            <br />
                            UX Researcher
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-muted mb-8 max-w-2xl"
                        >
                            I help teams make smarter product decisions through evidence-driven research, clear insights, and real-world user understanding.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid md:grid-cols-2 gap-6 mb-8"
                        >
                            <div className="glass p-4 rounded-lg border-l-4 border-accent">
                                <h3 className="font-bold text-white mb-1">What I do</h3>
                                <ul className="text-sm text-muted space-y-2">
                                    <li>• Understand real user behavior and pain points</li>
                                    <li>• Translate research into product decisions</li>
                                    <li>• Run usability tests, interviews, and evaluations</li>
                                    <li>• Bring clarity where teams are guessing</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <a href="#projects" className="inline-flex items-center px-6 py-3 text-base font-medium text-primary bg-accent rounded-lg hover:bg-accent/90 transition-colors">
                                View My Work <ArrowRight className="ml-2" size={20} />
                            </a>
                        </motion.div>
                    </div>

                    <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-72 h-72 md:w-96 md:h-96"
                        >
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src="/assets/profile.jpg"
                                    alt="Mayank Gupta"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section id="projects" className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-muted">Selected case studies showcasing my research process.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`glass rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full border border-white/5`}
                            >
                                <div className={`h-2 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50`}></div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                                    <p className="text-muted mb-8 flex-grow">{project.description}</p>
                                    <Link to={project.link} className="inline-flex items-center text-sm font-medium text-accent hover:text-white transition-colors mt-auto">
                                        Read Case Study <ArrowRight size={16} className="ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
