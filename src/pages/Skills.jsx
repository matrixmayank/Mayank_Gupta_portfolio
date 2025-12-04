import React from 'react';
import { motion } from 'framer-motion';
import SkillChart from '../components/SkillChart';

const Skills = () => {
    const skillCategories = [
        {
            title: "Research Methods",
            skills: [
                { name: "Generative Research", level: 90 },
                { name: "Evaluative Research", level: 90 },
                { name: "Usability Testing", level: 95 },
                { name: "Contextual Inquiry", level: 85 },
                { name: "Diary Studies", level: 80 },
                { name: "Competitor Benchmarking", level: 85 }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Figma", level: 90 },
                { name: "Maze", level: 85 },
                { name: "UserTesting", level: 85 },
                { name: "Miro", level: 90 },
                { name: "Notion", level: 90 },
                { name: "Excel", level: 85 }
            ]
        },
        {
            title: "Technical & Soft Skills",
            skills: [
                { name: "SQL (Basic)", level: 70 },
                { name: "HTML/CSS (Basic)", level: 75 },
                { name: "AWS (Cloud Practitioner)", level: 65 },
                { name: "Stakeholder Alignment", level: 90 },
                { name: "Insight Synthesis", level: 95 }
            ]
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Skills & Expertise</h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        A comprehensive look at my technical capabilities and research methodologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl h-full"
                        >
                            <h2 className="text-2xl font-display font-bold mb-8 text-accent">{category.title}</h2>
                            <SkillChart skills={category.skills} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
