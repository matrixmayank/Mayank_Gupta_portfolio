import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy3 = () => {
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
                        OTC Drug Label Redesign Study
                    </h1>

                    <div className="glass p-6 rounded-xl border-l-4 border-red-500 mb-8">
                        <h3 className="text-lg font-bold text-red-400 mb-2">Problem</h3>
                        <p className="text-muted">
                            Users frequently misread or misunderstand OTC drug labels, leading to incorrect dosage, safety risks, and confusion between similar products.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-xl font-bold mb-2 text-white">Why This Matters</h2>
                        <p className="text-muted text-lg">
                            OTC labels are regulated, dense, and easy to misinterpret — especially for low-literacy or elderly consumers.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Methods</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Heuristic evaluation (FDA guidelines + NLM standards)", "Label comprehension testing", "Visual hierarchy analysis", "Comparison study with competitor labels", "Cognitive load assessment"].map((method, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary rounded-full text-sm text-gray-300 border border-white/5">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-white">Key Findings</h2>
                            <ul className="space-y-3">
                                {[
                                    "Active ingredient and purpose not visually grouped",
                                    "Warnings buried in dense text blocks",
                                    "Font size inconsistency affecting readability",
                                    "Poor hierarchy → users scanned labels incorrectly",
                                    "Multilingual confusion in APAC/EMEA versions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-muted">
                                        <span className="text-red-400 mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-white">User Errors Observed</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <span className="font-bold text-red-400 text-xl">50%</span>
                                    <span className="text-gray-300 ml-2">misread the dosage frequency</span>
                                </div>
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <span className="font-bold text-red-400 text-xl">40%</span>
                                    <span className="text-gray-300 ml-2">failed to differentiate adult vs child directions</span>
                                </div>
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <span className="text-gray-300">Packaging colors triggered wrong product identification</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-white">Recommendations</h2>
                        <div className="glass p-6 rounded-xl">
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Consistent hierarchy across all regions",
                                    "Clear segmentation: Purpose → Dosage → Warnings",
                                    "Larger font size for critical instructions",
                                    "High-contrast layout",
                                    "Simplified phrasing for comprehension"
                                ].map((rec, i) => (
                                    <li key={i} className="flex items-center text-gray-200">
                                        <span className="text-green-400 mr-3">✓</span> {rec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-accent">Outcome</h2>
                        <p className="text-xl text-white">
                            A redesigned structure that significantly reduced misinterpretation during follow-up testing.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy3;
