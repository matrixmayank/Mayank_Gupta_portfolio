import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Clock, Target, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy3 = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-text-secondary hover:text-accent transition-colors mb-8">
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-accent-purple font-bold tracking-wider uppercase text-sm mb-4 block">Human Factors Research</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        OTC Drug Label Redesign
                    </h1>
                    <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                        Reducing comprehension errors in over-the-counter drug labels through structured research and information redesign.
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-glass-border py-8">
                        <div>
                            <div className="flex items-center text-accent-purple mb-2">
                                <Users size={18} className="mr-2" />
                                <span className="font-bold">Role</span>
                            </div>
                            <p className="text-text-secondary">Research Lead</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent-purple mb-2">
                                <Clock size={18} className="mr-2" />
                                <span className="font-bold">Timeline</span>
                            </div>
                            <p className="text-text-secondary">6 Weeks</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent-purple mb-2">
                                <Target size={18} className="mr-2" />
                                <span className="font-bold">Focus</span>
                            </div>
                            <p className="text-text-secondary">Safety, Compliance</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent-purple mb-2">
                                <CheckCircle size={18} className="mr-2" />
                                <span className="font-bold">Outcome</span>
                            </div>
                            <p className="text-text-secondary">-40% Error Rate</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">The Challenge</h2>
                            <div className="glass p-8 rounded-3xl">
                                <p className="text-text-muted leading-relaxed mb-4">
                                    A pharmaceutical company found that patients were frequently misinterpreting dosage instructions for a common pediatric fever reducer.
                                    This posed a significant safety risk.
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    <strong>My Goal:</strong> Identify the specific label elements causing confusion and test alternative designs to minimize error.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">Research Methodology</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-accent-purple">Comprehension Testing</h3>
                                    <p className="text-text-muted">Showed the current label to 50 parents and asked them to calculate the correct dose for a hypothetical child.</p>
                                </div>
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-accent-purple">Eye Tracking</h3>
                                    <p className="text-text-muted">Used eye-tracking software to see which parts of the label users focused on and what they ignored.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">Key Findings</h2>
                            <ul className="space-y-4">
                                {[
                                    { title: "Hidden Dosage Chart", desc: "The dosage chart was on the back peel-off panel. 40% of users didn't even know it existed." },
                                    { title: "Weight vs. Age", desc: "Parents preferred dosing by age, but weight is safer. The label didn't make this distinction clear." },
                                    { title: "Cluttered Hierarchy", desc: "Marketing claims ('Fast Acting!') competed with safety warnings for attention." }
                                ].map((item, i) => (
                                    <li key={i} className="glass p-6 rounded-2xl flex items-start">
                                        <span className="text-accent-purple font-bold text-xl mr-4">{i + 1}.</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-text-muted">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">Design Recommendations</h2>
                            <div className="bg-gradient-to-br from-accent-purple/20 to-pink-500/20 p-8 rounded-3xl border border-accent-purple/20">
                                <p className="text-lg text-white mb-6">
                                    We proposed a new label hierarchy that prioritized safety over marketing.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-accent-purple mb-2">Before</h4>
                                        <ul className="list-disc list-inside text-text-muted text-sm space-y-1">
                                            <li>Dosage hidden inside peel-off</li>
                                            <li>"Fast Acting" in large font</li>
                                            <li>Dense block text</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-accent-purple mb-2">After</h4>
                                        <ul className="list-disc list-inside text-text-muted text-sm space-y-1">
                                            <li>Dosage chart on outer panel</li>
                                            <li>"Dose by Weight" highlighted</li>
                                            <li>Bullet points for warnings</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8 p-4 bg-white/5 rounded-xl text-center">
                                    <p className="text-accent-purple font-bold">Result: Dosage calculation errors dropped by 40% in follow-up testing.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy3;
