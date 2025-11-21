import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

                    <div className="glass p-8 rounded-2xl mb-12">
                        <p className="text-xl text-muted mb-6 leading-relaxed">
                            I’m a UX Researcher with a strong technical and product background.
                            My work sits at the intersection of <span className="text-white font-medium">user psychology</span>, <span className="text-white font-medium">complex workflows</span>, <span className="text-white font-medium">regulated content</span>, and <span className="text-white font-medium">real-world constraints</span>.
                        </p>
                        <p className="text-lg text-muted leading-relaxed">
                            I’ve worked in domains where clarity and accuracy matter — healthcare, OTC drug labels, product workflows, and automation systems. This gives me a grounded understanding of how people interact with information under stress, confusion, or low literacy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-accent">My Approach</h2>
                            <p className="text-muted mb-4">I don’t chase trends. I focus on:</p>
                            <ul className="space-y-3">
                                {["Getting to the truth", "Asking the right questions", "Identifying real barriers", "Testing assumptions early", "Giving teams insights they can act on Monday morning"].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-accent mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-accent">Why I chose UX Research</h2>
                            <div className="glass p-6 rounded-xl">
                                <p className="text-lg font-medium text-white mb-2">Because technology fails when it ignores people.</p>
                                <p className="text-muted">I help teams understand the people behind the metrics.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold mb-6">Beyond UX</h2>
                        <p className="text-muted mb-6">I bring additional strength from my technical background:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Data literacy (SQL, Excel, analysis)",
                                "Understanding how engineering teams work",
                                "Experience with regulated documentation and workflows",
                                "Ability to break down messy systems into clear components"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-3 bg-primary/50 rounded-lg">
                                    <span className="text-accent mr-3">✓</span>
                                    <span className="text-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-muted italic">This helps me communicate with cross-functional teams effectively.</p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
