import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10" role="contentinfo">
            <div className="container mx-auto px-4 text-center text-muted text-sm">
                <p>&copy; {new Date().getFullYear()} Mayank Gupta. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
