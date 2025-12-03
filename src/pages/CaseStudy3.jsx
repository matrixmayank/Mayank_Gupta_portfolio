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
                    <Link to="/" className="inline-flex items-center text-muted hover:text-text mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        OTC Drug Label Redesign Study
                    </h1>

                    <div className="glass p-6 rounded-xl border-l-4 border-purple-500 mb-12">
                        <h2 className="text-xl font-bold mb-2 text-text">Why This Matters</h2>
                        <p className="text-muted">
                            Medication errors cause thousands of preventable hospitalizations annually. A significant portion of these errors stem from confusing labels, poor information hierarchy, and small typography.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-text">Methods</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Eye-tracking study", "A/B Testing (Old vs New Label)", "Comprehension Survey (N=50)", "Card Sorting"].map((method, i) => (
                                <span key={i} className="px-4 py-2 bg-secondary rounded-full text-sm text-muted border border-white/5">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-text">Key Findings</h2>
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
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-text">User Errors Observed</h2>
                            <div className="space-y-4">
                                {[
                                    { err: "24% misread the dosage frequency", type: "Critical" },
                                    { err: "18% failed to differentiate adult vs child directions", type: "High Risk" },
                                    { err: "Packaging colors triggered wrong product identification", type: "Moderate" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-white/5">
                                        <div className="flex items-center">
                                            <AlertTriangle size={18} className="text-red-400 mr-3" />
                                            <span className="text-muted">{item.err}</span>
                                        </div>
                                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider">{item.type}</span>
                                    </div>
                                ))}</div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Recommendations</h2>
                        <div className="glass p-6 rounded-xl">
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Consistent hierarchy across all regions",
                                    "Clear segmentation: Purpose → Dosage → Warnings",
                                    "Larger font size for critical instructions",
                                    "High-contrast layout",
                                    "Simplified phrasing for comprehension"
                                ].map((rec, i) => (
                                    <li key={i} className="flex items-center text-muted">
                                        <span className="text-green-400 mr-3">✓</span> {rec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-accent">Outcome</h2>
                        <p className="text-xl text-text">
                            The redesigned label reduced comprehension errors by <span className="font-bold text-accent">65%</span> in follow-up testing.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy3;
