import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Clock, Target, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy2 = () => {
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
                    <span className="text-accent-cyan font-bold tracking-wider uppercase text-sm mb-4 block">Field Research Case Study</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Job Discovery for Unskilled Migrants
                    </h1>
                    <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                        Understanding trust, motivation, and barriers to job discovery among migrant workers in urban centers.
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-glass-border py-8">
                        <div>
                            <div className="flex items-center text-accent-cyan mb-2">
                                <Users size={18} className="mr-2" />
                                <span className="font-bold">Role</span>
                            </div>
                            <p className="text-text-secondary">Field Researcher</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent-cyan mb-2">
                                <Clock size={18} className="mr-2" />
                                <span className="font-bold">Timeline</span>
                            </div>
                            <p className="text-text-secondary">4 Weeks</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent-cyan mb-2">
                                <MapPin size={18} className="mr-2" />
                                <span className="font-bold">Location</span>
                            </div>
                            <p className="text-text-secondary">Mumbai & Delhi</p>
                        </div>
                        <div>
                            <div className="flex items-center text-accent-cyan mb-2">
                                <CheckCircle size={18} className="mr-2" />
                                <span className="font-bold">Outcome</span>
                            </div>
                            <p className="text-text-secondary">New Service Blueprint</p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">The Challenge</h2>
                            <div className="glass p-8 rounded-3xl">
                                <p className="text-text-muted leading-relaxed mb-4">
                                    A social enterprise wanted to launch a digital job board for unskilled migrant workers.
                                    However, early pilots showed zero adoption. Workers preferred standing at physical "labor nakas" (street corners) despite the uncertainty.
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    <strong>My Goal:</strong> Understand why the digital solution was failing and what "trust" meant in this context.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">Field Research</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-accent-cyan">Intercept Interviews</h3>
                                    <p className="text-text-muted">Spoke with 40+ workers at 5 different labor nakas in Mumbai to understand their daily routine and pain points.</p>
                                </div>
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-accent-cyan">Shadowing</h3>
                                    <p className="text-text-muted">Shadowed 3 workers for a full day to observe how they negotiated wages and verified employer credibility.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">Key Insights</h2>
                            <ul className="space-y-4">
                                {[
                                    { title: "Trust is Physical", desc: "Workers didn't trust a screen. They trusted a 'thekedar' (contractor) they could see and hold accountable." },
                                    { title: "Immediate Pay", desc: "The app promised weekly payouts. Workers needed daily cash for food and rent. This was a dealbreaker." },
                                    { title: "Digital Literacy", desc: "Most could use WhatsApp but struggled with form-filling interfaces. Voice notes were preferred." },
                                    { title: "Network Effects", desc: "Jobs were found through word-of-mouth. An individual app experience felt isolating and risky." }
                                ].map((item, i) => (
                                    <li key={i} className="glass p-6 rounded-2xl flex items-start">
                                        <span className="text-accent-cyan font-bold text-xl mr-4">{i + 1}.</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                                            <p className="text-text-muted">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">Strategic Pivot</h2>
                            <div className="bg-gradient-to-br from-accent-cyan/20 to-blue-500/20 p-8 rounded-3xl border border-accent-cyan/20">
                                <p className="text-lg text-text-primary mb-6">
                                    We recommended pivoting from a "Job Board App" to a "Trusted Agent Model".
                                </p>
                                <ul className="list-disc list-inside space-y-3 text-text-secondary mb-8">
                                    <li><strong>Hybrid Service:</strong> Local agents equipped with the app to register workers and vouch for employers.</li>
                                    <li><strong>Voice-First UI:</strong> Redesigned the worker-facing interface to rely on voice commands and audio cues.</li>
                                    <li><strong>Daily Payouts:</strong> Partnered with a fintech API to enable same-day payments.</li>
                                </ul>
                                <div className="p-4 bg-white/5 rounded-xl text-center">
                                    <p className="text-accent-cyan font-bold">Result: Pilot adoption increased by 200% in the first month.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy2;
