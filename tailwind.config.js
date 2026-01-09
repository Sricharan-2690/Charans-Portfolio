/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: '#1A1A1A',
  			foreground: '#F5F5F5',
  			primary: {
  				DEFAULT: '#ff0000',
  				foreground: '#1A1A1A',
  			},
  			secondary: {
  				DEFAULT: '#660000',
  				foreground: '#1A1A1A',
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: ["var(--font-montserrat)"],
  			body: ["var(--font-poppins)"],
  		},
  		keyframes: {
  			"accordion-down": {
  				from: { height: 0 },
  				to: { height: "var(--radix-accordion-content-height)" },
  			},
  			"accordion-up": {
  				from: { height: "var(--radix-accordion-content-height)" },
  				to: { height: 0 },
  			},
  			spotlight: {
  				"0%": {
  					opacity: 0,
  					transform: "translate(-72%, -62%) scale(0.5)",
  				},
  				"100%": {
  					opacity: 1,
  					transform: "translate(-50%,-40%) scale(1)",
  				},
  			},
  			'demon-float': {
  				'0%, 100%': {
  					transform: 'translateY(0)',
  				},
  				'50%': {
  					transform: 'translateY(-20px)',
  				},
  			},
  			'demon-glow': {
  				'0%, 100%': {
  					filter: 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.5))',
  				},
  				'50%': {
  					filter: 'drop-shadow(0 0 30px rgba(255, 0, 0, 0.8))',
  				},
  			},
  			'demon-pulse': {
  				'0%, 100%': {
  					opacity: '1',
  				},
  				'50%': {
  					opacity: '0.5',
  				},
  			},
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			spotlight: "spotlight 2s ease .75s 1 forwards",
  			'demon-float': "demon-float 6s ease-in-out infinite",
  			'demon-glow': "demon-glow 2s ease-in-out infinite",
  			'demon-pulse': "demon-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  		},
  		backgroundImage: {
  			'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};