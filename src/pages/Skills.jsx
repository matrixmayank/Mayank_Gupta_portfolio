import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Research Skills",
            skills: ["User interviews", "Usability testing", "Heuristic evaluation", "Diary studies", "Contextual inquiry", "Journey mapping", "Persona development", "Insight synthesis", "Affinity mapping"]
        },
        {
            title: "Tools",
            skills: ["Figma", "Miro", "Notion", "Whimsical", "Excel", "PowerPoint"]
        },
        {
            title: "Technical Edge",
            subtitle: "(Support strength)",
            skills: ["SQL & basic data analysis", "Understanding workflows & automation systems", "Comfort working with engineers", "Experience with regulated documentation"]
        },
        {
            title: "Domain Experience",
            skills: ["Healthcare", "Labeling & regulatory content", "Product workflows", "Operational processes"]
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors"
                            >
                                <h2 className="text-2xl font-bold mb-2 text-accent">{category.title}</h2>
                                {category.subtitle && <p className="text-sm text-muted mb-4">{category.subtitle}</p>}
                                <div className="h-px bg-white/10 w-full mb-6"></div>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className="px-4 py-2 bg-secondary rounded-lg text-sm text-muted border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
