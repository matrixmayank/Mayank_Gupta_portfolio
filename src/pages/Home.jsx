import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const projects = [
        {
            title: "Accessible Health Monitoring App for Aging Users",
            description: "Improving usability and adoption for users aged 60+ through mixed-methods research.",
            link: "/case-study-1",
            tags: ["UX Research", "Healthcare", "Mobile App"],
            color: "from-blue-500/20 to-blue-600/5"
        },
        {
            title: "Job Discovery App for Unskilled Migrants",
            description: "Understanding trust, motivation, and barriers to job discovery among migrant workers.",
            link: "/case-study-2",
            tags: ["Field Research", "Social Impact", "Service Design"],
            color: "from-emerald-500/20 to-emerald-600/5"
        },
        {
            title: "OTC Drug Label Redesign Research",
            description: "Reducing comprehension errors in over-the-counter drug labels through structured research.",
            link: "/case-study-3",
            tags: ["Human Factors", "Safety", "Labeling"],
            color: "from-purple-500/20 to-purple-600/5"
        }
    ];

    return (
        <div>
            <Hero />

            {/* Featured Projects Section */}
            <section id="projects" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Featured Projects</h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Selected case studies showcasing my research process and impact on product decisions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative h-full glass-card rounded-3xl p-8 flex flex-col border border-white/5 hover:border-white/10 transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                        <p className="text-text-muted leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <Link to={project.link} className="inline-flex items-center text-sm font-bold text-accent hover:text-white transition-colors">
                                            Read Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
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
