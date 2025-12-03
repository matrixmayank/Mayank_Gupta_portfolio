import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground = ({ children, className = "" }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center bg-primary text-text transition-bg ${className}`}>
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`
            absolute -inset-[10px] opacity-50
            will-change-transform blur-[60px]
            [--white-gradient:repeating-linear-gradient(100deg,var(--color-secondary)_0%,var(--color-secondary)_7%,transparent_10%,transparent_12%,var(--color-secondary)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--color-accent)_0%,var(--color-accent)_7%,transparent_10%,transparent_12%,var(--color-accent)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--color-accent)_10%,var(--color-secondary)_15%,var(--color-accent)_20%,var(--color-secondary)_25%,var(--color-accent)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50
            will-change-transform blur-[60px]
          `}
                ></div>
            </div>
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};
