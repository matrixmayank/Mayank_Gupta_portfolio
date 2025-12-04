import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy1 = () => {
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
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">UX Research Case Study</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Accessible Health Monitoring for Aging Users
                    </h1>
                    <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                        Improving usability and adoption for users aged 60+ through mixed-methods research and inclusive design practices.
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-glass-border py-8">
                        <div>
                            <div className="flex items-center text-accent mb-2">
                                <Users size={18} className="mr-2" />
                                <span className="font-bold">Role</span>
                            </div>
                            <p className="text-text-secondary">Lead UX Researcher</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent mb-2">
                                <Clock size={18} className="mr-2" />
                                <span className="font-bold">Timeline</span>
                            </div>
                            <p className="text-text-secondary">3 Months</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent mb-2">
                                <Target size={18} className="mr-2" />
                                <span className="font-bold">Focus</span>
                            </div>
                            <p className="text-text-secondary">Accessibility, Mobile</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent mb-2">
                                <CheckCircle size={18} className="mr-2" />
                                <span className="font-bold">Outcome</span>
                            </div>
                            <p className="text-text-secondary">+15% Adoption Rate</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">The Challenge</h2>
                            <div className="glass p-8 rounded-3xl">
                                <p className="text-text-muted leading-relaxed mb-4">
                                    The client, a health-tech startup, noticed that while their app had high downloads, retention among users over 60 was extremely low.
                                    They suspected the UI was "too modern" but lacked specific insights.
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    <strong>My Goal:</strong> Uncover the specific usability barriers preventing older adults from effectively using the health monitoring features.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">Research Methodology</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-accent">1. Contextual Inquiry</h3>
                                    <p className="text-text-muted">Observed 8 participants using the app in their homes to understand environmental factors and real-world usage patterns.</p>
                                </div>
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-accent">2. Usability Testing</h3>
                                    <p className="text-text-muted">Conducted task-based testing with 12 users aged 60-75 to identify navigation issues and comprehension gaps.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">Key Findings</h2>
                            <ul className="space-y-4">
                                {[
                                    { title: "Contrast & Legibility", desc: "Thin fonts and low contrast grays were unreadable for 70% of participants." },
                                    { title: "Touch Targets", desc: "Standard 44px touch targets were often missed due to reduced dexterity." },
                                    { title: "Icon Ambiguity", desc: "Abstract icons (like a 'hamburger' menu) were not understood; text labels were preferred." },
                                    { title: "Feedback Loops", desc: "Users were unsure if their data was saved due to subtle animations instead of clear confirmation messages." }
                                ].map((item, i) => (
                                    <li key={i} className="glass p-6 rounded-2xl flex items-start">
                                        <span className="text-accent font-bold text-xl mr-4">{i + 1}.</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-text-muted">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-white">Impact & Results</h2>
                            <div className="bg-gradient-to-br from-accent/20 to-accent-purple/20 p-8 rounded-3xl border border-accent/20">
                                <p className="text-lg text-white mb-6">
                                    Based on these findings, the design team implemented a "Senior Mode" with larger text, high contrast, and explicit text labels.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                    <div>
                                        <div className="text-4xl font-bold text-accent mb-2">15%</div>
                                        <div className="text-sm text-text-secondary">Increase in Retention</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-accent mb-2">40%</div>
                                        <div className="text-sm text-text-secondary">Reduction in Support Tickets</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-accent mb-2">4.8/5</div>
                                        <div className="text-sm text-text-secondary">User Satisfaction Score</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy1;
