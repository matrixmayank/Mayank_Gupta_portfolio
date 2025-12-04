import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import SkillChart from '../components/SkillChart';
import { Download, Phone } from 'lucide-react';

const About = () => {
    const experience = [
        {
            role: "Senior Associate Product & Research",
            company: "Mphasis Limited",
            period: "Feb 2024 - Present",
            description: "Conducting contextual inquiry, diary studies, and usability testing for OTC labels. Improved label comprehension by 35% and reinforced a research-driven culture.",
            skills: ["Contextual Inquiry", "Usability Testing", "A/B Testing", "Maze", "Data Analysis"]
        },
        {
            role: "Software Engineer",
            company: "Mphasis",
            period: "Jan 2022 - Feb 2024",
            description: "Developed backend and frontend components using Java, HTML, CSS and SQL. Collaborated with product managers to translate requirements into functional implementations.",
            skills: ["Java", "SQL", "HTML/CSS", "JIRA", "Cross-functional Collaboration"]
        },
        {
            role: "Intern",
            company: "Surya Roshni Limited",
            period: "June 2019",
            description: "Studied lighting product ergonomics and user-centric design in manufacturing. Focused on usability, safety, and cross-functional feedback.",
            skills: ["Ergonomics", "User-centric Design", "Manufacturing"]
        }
    ];

    const coreSkills = [
        { name: "User Research", level: 95 },
        { name: "Usability Testing", level: 90 },
        { name: "Insight Synthesis", level: 85 },
        { name: "Stakeholder Alignment", level: 80 },
        { name: "Technical Literacy (SQL/AWS)", level: 75 }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">About Me</h1>
                    <div className="glass p-8 md:p-12 rounded-3xl text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed relative z-10">
                            I’m a UX Researcher with a foundation in <span className="text-text-primary font-bold">regulated medical content</span>, <span className="text-text-primary font-bold">product workflows</span>, and <span className="text-text-primary font-bold">software engineering</span>.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed mb-10 relative z-10">
                            Experienced in generative and evaluative research, usability testing, information comprehension, and insight synthesis. I've worked with global brands such as <span className="text-text-primary">ExxonMobil</span>, <span className="text-text-primary">Caterpillar</span>, <span className="text-text-primary">Toyota</span>, and <span className="text-text-primary">Kenvue</span>, helping teams make informed, user-centered decisions.
                        </p>
                        <div className="flex flex-wrap gap-4 relative z-10">
                            <a
                                href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
                            >
                                <Download size={20} className="mr-2" /> Download Résumé
                            </a>
                            <a
                                href="tel:+919425115769"
                                className="inline-flex items-center px-6 py-3 glass text-text-primary font-bold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <Phone size={20} className="mr-2" /> +91 94251 15769
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Experience */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h2 className="text-3xl font-display font-bold mb-8 flex items-center">
                                <span className="w-8 h-1 bg-accent mr-4 rounded-full"></span>
                                Experience
                            </h2>
                            <Timeline items={experience} />
                        </motion.div>
                    </div>

                    {/* Skills & Approach */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display font-bold mb-8 flex items-center">
                                <span className="w-8 h-1 bg-accent mr-4 rounded-full"></span>
                                Core Skills
                            </h2>
                            <div className="glass p-8 rounded-3xl">
                                <SkillChart skills={coreSkills} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-display font-bold mb-8 flex items-center">
                                <span className="w-8 h-1 bg-accent mr-4 rounded-full"></span>
                                My Approach
                            </h2>
                            <div className="glass p-8 rounded-3xl">
                                <ul className="space-y-4">
                                    {[
                                        "Getting to the truth over validating assumptions",
                                        "Asking the right questions to uncover root causes",
                                        "Identifying real barriers to adoption",
                                        "Testing early to save engineering time",
                                        "Delivering actionable insights, not just reports"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-accent mr-3 mt-1">•</span>
                                            <span className="text-text-secondary text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
