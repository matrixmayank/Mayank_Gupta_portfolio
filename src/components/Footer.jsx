import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary border-t border-glass-border py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Mayank Gupta</h3>
                        <p className="text-text-muted text-sm">Crafting digital experiences with purpose.</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="#" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110 duration-200">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110 duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110 duration-200">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:hello@mayankgupta.com" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110 duration-200">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-glass-border text-center text-text-muted text-sm">
                    <p>&copy; {currentYear} Mayank Gupta. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
