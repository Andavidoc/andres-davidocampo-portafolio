import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#0A0A0F',
          secondary: '#111118',
          card: '#16161F',
          border: '#1E1E2E',
        },
        accent: {
          cyan: '#00D4FF',
          purple: '#7C3AED',
          green: '#00FF9D',
        },
        text: {
          primary: '#F0F0FF',
          secondary: '#8888AA',
          muted: '#44445A',
        },
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,212,255,0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(0,212,255,0.5)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.6s ease forwards',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
