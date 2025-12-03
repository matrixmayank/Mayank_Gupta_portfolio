import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy1 = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/" className="inline-flex items-center text-muted hover:text-text mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Accessible Health Monitoring App for Ageing Users (60+)</h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass p-6 rounded-xl border-l-4 border-blue-500">
                            <h3 className="text-lg font-bold text-blue-400 mb-2">Problem</h3>
                            <p className="text-muted">
                                Older adults struggle with digital health apps due to cognitive load, unclear information hierarchy, and interaction barriers. Adoption rates remain low despite high usefulness.
                            </p>
                        </div>
                        <div className="glass p-6 rounded-xl border-l-4 border-green-500">
                            <h3 className="text-lg font-bold text-green-400 mb-2">Research Goal</h3>
                            <p className="text-muted">
                                Understand how adults aged 60+ navigate health-monitoring apps and design recommendations that improve usability, trust, and adoption.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-text">Methods Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Contextual inquiry", "Semi-structured interviews", "Heuristic evaluation", "Usability testing (5 tasks)", "Diary study (3 days)"].map((method, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary rounded-full text-sm text-muted border border-white/5">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Key Insights</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Cognitive overload", desc: "Too many options at once overwhelmed users." },
                                { title: "Fear of making mistakes", desc: "Users avoided tapping anything unfamiliar." },
                                { title: "Poor readability", desc: "Small text and unclear icons blocked task completion." },
                                { title: "Task fragmentation", desc: "Information was scattered across multiple screens." },
                                { title: "Memory reliance", desc: "Users forgot where specific features were located." }
                            ].map((insight, i) => (
                                <div key={i} className="flex items-start p-4 bg-secondary/30 rounded-lg">
                                    <span className="text-accent font-bold mr-3">{i + 1}.</span>
                                    <div>
                                        <span className="font-bold text-text">{insight.title}</span>
                                        <span className="text-muted"> — {insight.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Personas (Summary)</h2>
                            <ul className="space-y-3 text-muted">
                                <li><strong className="text-text">Rita (67):</strong> hypertensive, moderate tech confidence, wants clarity.</li>
                                <li><strong className="text-text">Suresh (72):</strong> low literacy, avoids apps with too many features</li>
                                <li><strong className="text-text">Asha (61):</strong> primary caregiver, needs quick access to logs</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Usability Testing Findings</h2>
                            <ul className="space-y-3 text-muted">
                                <li className="flex items-center"><span className="text-red-400 mr-2">⚠️</span> 60% failed to locate the daily health log</li>
                                <li className="flex items-center"><span className="text-red-400 mr-2">⚠️</span> 3/5 users hesitated to confirm data submission</li>
                                <li className="flex items-center"><span className="text-red-400 mr-2">⚠️</span> Icons were misinterpreted (alerts, logs, history)</li>
                                <li className="flex items-center"><span className="text-red-400 mr-2">⚠️</span> Users navigated in loops due to poor labeling</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Recommendations</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Simplify and group critical tasks",
                                "Increase font size + contrast",
                                "Replace icons with labeled buttons",
                                "Add a persistent “Today’s Summary” section",
                                "Provide confirmations with simple language",
                                "Reduce steps for daily logging"
                            ].map((rec, i) => (
                                <div key={i} className="flex items-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                    <span className="text-green-400 mr-3">✓</span>
                                    <span className="text-text">{rec}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-accent">Outcome</h2>
                        <p className="text-xl text-text">
                            A redesigned flow that reduced task completion time by <span className="font-bold text-accent">40%</span> and improved confidence scores across all users.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy1;
