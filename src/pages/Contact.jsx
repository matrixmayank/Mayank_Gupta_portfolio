import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Have a project in mind or just want to chat about UX? I’d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="glass p-8 rounded-3xl h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-display font-bold mb-8 text-text-primary">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-accent/10 rounded-xl text-accent mr-4">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-primary mb-1">Email</h3>
                                            <a href="mailto:mayankgupta.letters@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
                                                mayankgupta.letters@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-3 bg-accent/10 rounded-xl text-accent mr-4">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-primary mb-1">Phone</h3>
                                            <a href="tel:+919425115769" className="text-text-secondary hover:text-accent transition-colors">
                                                +91 94251 15769
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-3 bg-accent/10 rounded-xl text-accent mr-4">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-primary mb-1">Location</h3>
                                            <p className="text-text-secondary">
                                                Available for remote work worldwide.
                                                <br />Based in India.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-secondary/50 rounded-2xl border border-white/5">
                                <p className="text-text-muted italic">
                                    "Design is not just what it looks like and feels like. Design is how it works."
                                </p>
                                <p className="text-accent font-bold mt-2">— Steve Jobs</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-glass-border rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-glass-border rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-secondary/50 border border-glass-border rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all flex items-center justify-center ${status === 'success'
                                    ? 'bg-success hover:bg-success'
                                    : 'bg-accent hover:bg-accent-dark'
                                    }`}
                            >
                                {status === 'submitting' ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} className="mr-2" /> Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
