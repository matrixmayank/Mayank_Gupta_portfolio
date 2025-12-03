import React from 'react';
import { motion } from 'framer-motion';
import './LiquidBlob.css';

const LiquidBlob = ({ size = 400, colors = ['#60a5fa', '#3b82f6'], className = '' }) => {
    return (
        <div className={`liquid-blob-container ${className}`} style={{ width: size, height: size }}>
            <motion.svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="liquid-blob-svg"
            >
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors[0]} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={colors[1]} stopOpacity="0.6" />
                    </linearGradient>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>

                {/* Animated blob path */}
                <motion.path
                    fill="url(#gradient1)"
                    filter="url(#goo)"
                    animate={{
                        d: [
                            "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.7,55.4,53.6,67,40.3,73.8C27,80.6,11.5,82.6,-4.3,79.8C-20.1,77,-40.2,69.4,-54.8,57.4C-69.4,45.4,-78.5,29,-82.1,11.7C-85.7,-5.6,-83.8,-23.8,-76.3,-39.2C-68.8,-54.6,-55.7,-67.2,-40.8,-73.9C-25.9,-80.6,-9.2,-81.4,4.8,-80.3C18.8,-79.2,30.6,-83.6,44.7,-76.4Z",
                            "M51.1,-84.3C64.5,-76.1,73.1,-59.7,78.8,-43.1C84.5,-26.5,87.3,-9.7,85.2,6.3C83.1,22.3,76.1,37.5,66.3,49.9C56.5,62.3,44,71.9,30.2,76.8C16.4,81.7,1.3,81.9,-14.7,79.2C-30.7,76.5,-47.6,70.9,-60.8,60.8C-74,50.7,-83.5,36.1,-86.8,20.3C-90.1,4.5,-87.2,-12.5,-79.8,-26.8C-72.4,-41.1,-60.5,-52.7,-47.1,-61.1C-33.7,-69.5,-18.9,-74.7,-1.8,-74.4C15.3,-74.1,37.7,-92.5,51.1,-84.3Z",
                            "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.7,55.4,53.6,67,40.3,73.8C27,80.6,11.5,82.6,-4.3,79.8C-20.1,77,-40.2,69.4,-54.8,57.4C-69.4,45.4,-78.5,29,-82.1,11.7C-85.7,-5.6,-83.8,-23.8,-76.3,-39.2C-68.8,-54.6,-55.7,-67.2,-40.8,-73.9C-25.9,-80.6,-9.2,-81.4,4.8,-80.3C18.8,-79.2,30.6,-83.6,44.7,-76.4Z"
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default LiquidBlob;
