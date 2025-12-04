import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level, delay }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-base font-medium text-white">{name}</span>
                <span className="text-sm font-medium text-text-muted">{level}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: delay, ease: "easeOut" }}
                    className="bg-accent h-2.5 rounded-full relative"
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
            </div>
        </div>
    );
};

const SkillChart = ({ skills }) => {
    return (
        <div className="w-full">
            {skills.map((skill, index) => (
                <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
};

export default SkillChart;
