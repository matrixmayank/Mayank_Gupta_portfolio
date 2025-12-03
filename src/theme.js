// Design tokens for the portfolio website
export const theme = {
    colors: {
        // Primary palette
        primary: '#0f172a',      // Deep navy (background)
        secondary: '#1e293b',    // Lighter navy (cards)
        accent: '#60a5fa',       // Sky blue (CTAs, highlights)

        // Text colors
        text: {
            primary: '#f8fafc',    // Almost white
            muted: '#94a3b8',      // Gray-blue
            dark: '#1e293b',       // For light backgrounds
        },

        // UI colors
        border: 'rgba(255, 255, 255, 0.1)',
        glass: {
            background: 'rgba(255, 255, 255, 0.05)',
            hover: 'rgba(255, 255, 255, 0.1)',
        },

        // Status colors
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
    },

    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
    },

    typography: {
        fonts: {
            primary: "'Inter', system-ui, -apple-system, sans-serif",
            mono: "'JetBrains Mono', 'Fira Code', monospace",
        },
        sizes: {
            xs: '0.75rem',    // 12px
            sm: '0.875rem',   // 14px
            base: '1rem',     // 16px
            lg: '1.125rem',   // 18px
            xl: '1.25rem',    // 20px
            '2xl': '1.5rem',  // 24px
            '3xl': '1.875rem',// 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem',    // 48px
            '6xl': '3.75rem', // 60px
        },
        weights: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        accent: '0 10px 30px -5px rgba(96, 165, 250, 0.2)',
    },

    borderRadius: {
        sm: '0.25rem',   // 4px
        md: '0.5rem',    // 8px
        lg: '0.75rem',   // 12px
        xl: '1rem',      // 16px
        full: '9999px',  // Fully rounded
    },

    transitions: {
        fast: '150ms ease-in-out',
        normal: '250ms ease-in-out',
        slow: '400ms ease-in-out',
    },
};

export default theme;
