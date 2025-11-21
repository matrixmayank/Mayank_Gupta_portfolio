import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy2 = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/" className="inline-flex items-center text-muted hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Bridging the Opportunity Gap: Job Discovery App for Migrant Workers
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass p-6 rounded-xl border-l-4 border-amber-500">
                            <h3 className="text-lg font-bold text-amber-400 mb-2">Problem</h3>
                            <p className="text-muted">
                                Unskilled migrant workers in metro cities struggle to find reliable job opportunities due to low digital literacy, lack of trust, and ambiguity in job listings.
                            </p>
                        </div>
                        <div className="glass p-6 rounded-xl border-l-4 border-cyan-500">
                            <h3 className="text-lg font-bold text-cyan-400 mb-2">Research Goal</h3>
                            <p className="text-muted">
                                Identify the real barriers migrants face in job discovery and build solutions that are simple, trustworthy, and culturally aligned.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Methods</h2>
                        <div className="flex flex-wrap gap-3">
                            {["In-depth interviews (8 participants)", "Field observation", "Competitor analysis", "Behavioral mapping", "Co-design sessions", "Low-fidelity usability testing"].map((method, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary rounded-full text-sm text-gray-300 border border-white/5">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-white">Key Insights</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Low Trust in Apps", desc: "Workers relied on WhatsApp groups, referrals, and local agents, not apps." },
                                { title: "Fear of Fraud", desc: "High prevalence of fake job posts made them cautious." },
                                { title: "Language Dependency", desc: "English terms created high friction." },
                                { title: "Low Patience for Complex UI", desc: "If they don't understand in 5 seconds, they leave." }
                            ].map((insight, i) => (
                                <div key={i} className="glass p-6 rounded-xl">
                                    <h3 className="font-bold text-white mb-2">{insight.title}</h3>
                                    <p className="text-muted text-sm">{insight.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">User Archetypes</h2>
                            <ul className="space-y-4">
                                {[
                                    { name: "The Daily Wager", desc: "wants quick decisions" },
                                    { name: "The New Migrant", desc: "overwhelmed; needs guidance" },
                                    { name: "The Multi-city Mover", desc: "seeks stability and reliability" }
                                ].map((persona, i) => (
                                    <li key={i} className="flex items-center p-3 bg-secondary/30 rounded-lg">
                                        <span className="text-2xl mr-3">👤</span>
                                        <div>
                                            <div className="font-bold text-white">{persona.name}</div>
                                            <div className="text-sm text-muted">{persona.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Opportunities</h2>
                            <ul className="space-y-3">
                                {[
                                    "Job listings with verified badges",
                                    "Audio-assisted navigation",
                                    "Minimal-step job application flows",
                                    "Transparent salary + accommodation info",
                                    "One-tap agent verification"
                                ].map((opp, i) => (
                                    <li key={i} className="flex items-center text-muted">
                                        <span className="text-accent mr-2">✦</span> {opp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-accent">Outcome</h2>
                        <p className="text-xl text-white">
                            A conceptual prototype with simplified card-based listings, voice guidance, and trust indicators.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy2;
