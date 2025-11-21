import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "mayankgupta.letters@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="pt-24 pb-20 min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Let’s Connect</h1>
                    <p className="text-xl text-muted mb-12">
                        If you want to talk about research, usability, product decisions, or opportunities — feel free to reach out.
                    </p>

                    <div className="inline-flex items-center justify-center p-1 rounded-xl bg-secondary/50 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center px-6 py-4">
                            <Mail className="text-accent mr-4" size={24} />
                            <span className="text-xl md:text-2xl font-medium text-white">{email}</span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="p-4 hover:bg-white/10 rounded-lg transition-colors border-l border-white/10 ml-2"
                            title="Copy email"
                        >
                            {copied ? <Check className="text-green-400" size={24} /> : <Copy className="text-muted hover:text-white" size={24} />}
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {/* Placeholder for social links if needed later */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
