// Design tokens for the portfolio website
export const theme = {
    colors: {
        // Primary palette - Deep, rich dark mode base
        primary: '#030712',      // Richer, darker blue-black (background)
        secondary: '#0f172a',    // Deep slate (cards/sections)
        tertiary: '#1e293b',     // Lighter slate (borders/highlights)

        // Accent colors - Vibrant and modern
        accent: {
            DEFAULT: '#3b82f6',  // Bright Blue
            glow: '#60a5fa',     // Lighter Blue for glows
            dark: '#1d4ed8',     // Darker Blue for active states
            purple: '#8b5cf6',   // Secondary accent (gradients)
            cyan: '#06b6d4',     // Tertiary accent (gradients)
        },

        // Text colors
        text: {
            primary: '#f8fafc',    // White
            secondary: '#cbd5e1',  // Light Gray
            muted: '#94a3b8',      // Muted Gray
            dark: '#0f172a',       // For light backgrounds
        },

        // UI colors
        border: 'rgba(255, 255, 255, 0.08)',
        glass: {
            background: 'rgba(15, 23, 42, 0.6)',
            border: 'rgba(255, 255, 255, 0.08)',
            highlight: 'rgba(255, 255, 255, 0.05)',
        },

        // Status colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
    },

    typography: {
        fonts: {
            primary: "'Inter', system-ui, -apple-system, sans-serif",
            display: "'Outfit', system-ui, -apple-system, sans-serif", // For headings
            mono: "'JetBrains Mono', 'Fira Code', monospace",
        },
    },

    // Glassmorphism presets
    glass: {
        sm: 'backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08);',
        md: 'backdrop-filter: blur(12px); background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.08);',
        lg: 'backdrop-filter: blur(16px); background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.08);',
    }
};

export default theme;
