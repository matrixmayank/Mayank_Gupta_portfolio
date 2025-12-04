import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
    return (
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                >
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-primary"></span>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-text-primary">{item.role}</h3>
                        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                            {item.period}
                        </span>
                    </div>
                    <h4 className="text-lg text-text-secondary mb-4">{item.company}</h4>
                    <p className="text-text-muted leading-relaxed mb-4">{item.description}</p>
                    {item.skills && (
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                                <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-text-secondary border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
