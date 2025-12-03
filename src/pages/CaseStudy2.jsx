import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertTriangle, Users, Search, Smartphone, MapPin, Shield, Phone } from 'lucide-react';
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
                    <Link to="/" className="inline-flex items-center text-muted hover:text-text mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Job Discovery App for Migrants in Metro Cities
                    </h1>
                    <p className="text-xl text-muted mb-12">
                        Designing an accessible, trustworthy, and easy-to-use job discovery solution for unskilled migrant workers.
                    </p>

                    {/* Project Overview */}
                    <div className="glass p-8 rounded-2xl mb-12 border-l-4 border-accent">
                        <h2 className="text-2xl font-bold mb-4 text-text">Project Overview</h2>
                        <p className="text-muted leading-relaxed">
                            Unskilled migrant workers in metro cities struggle to find stable jobs due to limited digital literacy, unreliable information sources, and fragmented recruitment channels. Existing job portals are not designed for low-literacy users and often require resumes, English proficiency, or advanced smartphone skills — which excludes this population.
                        </p>
                        <p className="text-muted leading-relaxed mt-4">
                            This project aimed to investigate the job-seeking journey of migrant workers and identify opportunities to design an accessible, trustworthy, and easy-to-use job discovery solution tailored to their needs.
                        </p>
                    </div>

                    {/* Problem Statement */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Problem Statement</h2>
                        <div className="glass p-6 rounded-xl">
                            <p className="text-muted mb-4">
                                Migrant workers rely on informal networks (friends, contractors, local contacts) to find jobs. This results in:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "No transparency about job conditions",
                                    "No proof of wages or timelines",
                                    "Exploitation and middlemen charges",
                                    "High job instability",
                                    "Lack of support for relocation & housing",
                                    "Inability to compare jobs or verify authenticity"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-muted">
                                        <AlertTriangle size={18} className="text-red-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-muted mt-4 italic">
                                Digital job platforms do not match their mental models, literacy levels, or device constraints.
                            </p>
                        </div>
                    </div>

                    {/* Research Goals & Questions */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Research Goals</h2>
                            <ul className="space-y-3">
                                {[
                                    "Understand how migrants currently discover jobs and pain points.",
                                    "Identify digital behavior patterns, literacy levels, and smartphone usage.",
                                    "Uncover trust barriers in online job information.",
                                    "Evaluate feasibility of a mobile-first job discovery app.",
                                    "Derive actionable design principles for low-literacy users."
                                ].map((goal, i) => (
                                    <li key={i} className="flex items-start text-muted">
                                        <CheckCircle size={18} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Research Questions</h2>
                            <ul className="space-y-3">
                                {[
                                    "How do migrants currently find jobs?",
                                    "What challenges do they face in the hiring process?",
                                    "Who are their influencers and decision-makers?",
                                    "What role does trust play in accepting a job?",
                                    "How comfortable are they with smartphone apps?",
                                    "What information is most important during job selection?",
                                    "What makes them reject a job opportunity?"
                                ].map((q, i) => (
                                    <li key={i} className="flex items-start text-muted">
                                        <Search size={18} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Methodology */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Research Methodology (Mixed-Methods)</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-text mb-2 flex items-center"><Users className="mr-2 text-accent" /> In-depth Interviews (8)</h3>
                                <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                                    <li>Target: Migrant workers aged 18–42</li>
                                    <li>Unskilled or semi-skilled</li>
                                    <li>Locations: Bengaluru, Mumbai, Delhi</li>
                                    <li>Income: ₹8,000 – ₹20,000/month</li>
                                </ul>
                            </div>
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-text mb-2 flex items-center"><MapPin className="mr-2 text-accent" /> Contextual Inquiry</h3>
                                <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                                    <li>Construction sites</li>
                                    <li>Road work zones</li>
                                    <li>Factory entry points</li>
                                    <li>Labour addas (local job markets)</li>
                                </ul>
                            </div>
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-text mb-2 flex items-center"><Smartphone className="mr-2 text-accent" /> Usability Testing</h3>
                                <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                                    <li>5 participants</li>
                                    <li>Tested simple low-fidelity flows</li>
                                    <li>Used audio prompts + icons</li>
                                </ul>
                            </div>
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-text mb-2 flex items-center"><CheckCircle className="mr-2 text-accent" /> Survey (N = 32)</h3>
                                <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                                    <li>Smartphone usage & Digital literacy</li>
                                    <li>Preferred languages</li>
                                    <li>Job categories & Salary expectations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Recruitment Strategy */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-text">Recruitment Strategy</h2>
                        <div className="glass p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <ul className="space-y-2 text-muted">
                                    <li>• Approached migrants at job hubs with help from local contractors.</li>
                                    <li>• Used snowball sampling: one participant referred two others.</li>
                                    <li>• Conducted interviews in Hindi/Kannada based on comfort.</li>
                                    <li>• Provided ₹100 mobile recharge as incentive.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Key Findings */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Key Findings (4 Core Themes)</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    theme: "TRUST IS EVERYTHING",
                                    desc: "Migrants value word-of-mouth more than online job posts.",
                                    quotes: ["“Online jobs are mostly fake.”", "“I only trust someone my friends know.”"],
                                    implication: "The app must show verified jobs, trusted contractors, and references."
                                },
                                {
                                    theme: "LOW LITERACY + FEAR OF COMPLEX APPS",
                                    desc: "Icons > text. Voice > typing. WhatsApp is the only digital platform they are fully comfortable with.",
                                    quotes: [],
                                    implication: "The app must be icon-driven, voice-enabled, and extremely simple."
                                },
                                {
                                    theme: "JOB DECISIONS DEPEND ON HOUSING & FOOD",
                                    desc: "Job selection is NOT only salary-based. Workers ask: “Where will I stay?” “Do they give food?”",
                                    quotes: [],
                                    implication: "The app must highlight accommodation, food, shifts, and advance availability prominently."
                                },
                                {
                                    theme: "HIGH RISK OF FRAUD + EXPLOITATION",
                                    desc: "Migrants fear unpaid wages, fake contractors, and last-minute job cancellation.",
                                    quotes: [],
                                    implication: "The solution must build security signals like verified employer badge, past worker reviews, and contract summaries."
                                }
                            ].map((item, i) => (
                                <div key={i} className="glass p-6 rounded-xl border-l-4 border-accent">
                                    <h3 className="text-lg font-bold text-text mb-2">Theme {i + 1}: {item.theme}</h3>
                                    <p className="text-muted mb-3">{item.desc}</p>
                                    {item.quotes.length > 0 && (
                                        <div className="mb-3 pl-4 border-l-2 border-gray-600 italic text-gray-400 text-sm">
                                            {item.quotes.map((q, idx) => <div key={idx}>{q}</div>)}
                                        </div>
                                    )}
                                    <p className="text-sm font-semibold text-accent">Implication: {item.implication}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* User Personas */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">User Personas</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Raju (27) – Construction Worker</h3>
                                <ul className="text-sm text-muted space-y-2">
                                    <li>• 9th-grade education</li>
                                    <li>• Heavy WhatsApp user</li>
                                    <li>• Looks for daily-wage work</li>
                                    <li>• Needs job + room + food</li>
                                    <li>• Trusts friends more than websites</li>
                                </ul>
                            </div>
                            <div className="glass p-6 rounded-xl bg-pink-500/10 border border-pink-500/20">
                                <h3 className="text-xl font-bold text-pink-400 mb-2">Meena (32) – Housekeeping Worker</h3>
                                <ul className="text-sm text-muted space-y-2">
                                    <li>• Understands basic phone icons</li>
                                    <li>• Struggles with English</li>
                                    <li>• Needs safety and predictable working hours</li>
                                    <li>• Wants fixed monthly salary</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Journey Map Insights */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Pain Points</h2>
                            <ul className="space-y-3">
                                {["No clear information", "Fake jobs", "Last-minute cancellations", "No direct communication", "High dependency on middlemen"].map((pt, i) => (
                                    <li key={i} className="flex items-center !text-red-950 dark:!text-red-300 bg-red-100 dark:bg-red-500/10 p-3 rounded-lg border border-red-200 dark:border-transparent">
                                        <AlertTriangle size={16} className="mr-2 flex-shrink-0 text-red-700 dark:text-red-400" /> {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Opportunity Areas</h2>
                            <ul className="space-y-3">
                                {["Direct employer–worker connection", "Verified job listings", "Voice-based job details", "Map-based housing info"].map((opp, i) => (
                                    <li key={i} className="flex items-center !text-green-950 dark:!text-green-300 bg-green-100 dark:bg-green-500/10 p-3 rounded-lg border border-green-200 dark:border-transparent">
                                        <CheckCircle size={16} className="mr-2 flex-shrink-0 text-green-700 dark:text-green-400" /> {opp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Design Recommendations */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-text">Design Recommendations</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: "Voice-enabled job search", desc: "Job details read aloud in Hindi/Kannada." },
                                { title: "Icon-based navigation", desc: "Large, bold icons for categories." },
                                { title: "Verified employer system", desc: "Badges + government ID + reviews." },
                                { title: "WhatsApp integration", desc: "Apply with WhatsApp chat." },
                                { title: "Job comparison card", desc: "Salary, Food, Room, Shifts, Advance." },
                                { title: "Fraud protection", desc: "Helpline, cancellation policy, wage guarantee." }
                            ].map((rec, i) => (
                                <div key={i} className="glass p-4 rounded-xl border border-white/10 hover:border-accent/50 transition-colors">
                                    <h3 className="font-bold text-text mb-2">{rec.title}</h3>
                                    <p className="text-sm text-muted">{rec.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Usability Test Findings */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-text">Usability Test Findings</h2>
                        <div className="glass p-6 rounded-xl">
                            <p className="text-text mb-4">Participants understood icons faster than text.</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-red-400 mb-2">Friction Points</h4>
                                    <ul className="list-disc list-inside text-muted space-y-1">
                                        <li>Struggled with typing search queries</li>
                                        <li>Confused with English words like “Apply”</li>
                                        <li>Preferred a “Call the employer” button</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-400 mb-2">Fixes Applied</h4>
                                    <ul className="list-disc list-inside text-muted space-y-1">
                                        <li>Added voice search</li>
                                        <li>Localized language toggle</li>
                                        <li>Replaced text CTA with phone icon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-text">Business Impact</h2>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "Reduce contractor fraud",
                                "Shorten hiring time by ~40%",
                                "Expand employer access to migrant workforce",
                                "Improve worker retention",
                                "Strengthen trust in platform-based hiring"
                            ].map((impact, i) => (
                                <span key={i} className="px-4 py-2 bg-accent/20 text-accent rounded-full border border-accent/30">
                                    {impact}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Limitations & Future Scope */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Limitations</h2>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Small sample size</li>
                                <li>Urban-centric research</li>
                                <li>Gender-skewed sample</li>
                                <li>No long-term ethnographic data</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-text">Future Scope</h2>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Pilot testing in 2 metro cities</li>
                                <li>Field observations in rural-to-urban migration routes</li>
                                <li>Onboarding employers into platform</li>
                                <li>More advanced fraud-detection mechanisms</li>
                                <li>Integration with government job schemes</li>
                            </ul>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudy2;
