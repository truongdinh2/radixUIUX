/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: 'hsl(var(--secondary))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        noBgHover: 'var(--no-bg-hover)',
        white400: 'hsl(var(--white400))',
        base900: 'var(--base900)',
        base700: 'var(--base700)',
        base200: 'var(--base200)',
        primary900: 'var(--primary900)',
        primary800: 'var(--primary800)',
        black900: 'var(--black900)',
        black700: 'var(--black700)',
        black600: 'var(--black600)',
        black500: 'var(--black500)',
        black400: 'var(--black400)',
        black300: 'var(--black300)',
        black100: 'var(--black100)',
        white: 'var(--white)',
        yellow: 'var(--yellow)',
        red800: 'var(--red800)',
        red50: 'var(--red50)',
        blue: 'var(--blue)',
        blue300: 'var(--blue300)',
        dusty_plum: 'var(--dusty-plum)',
        googleMap: 'hsl(var(--google-map))',
        link: 'var(--link)',
        gray80: 'hsl(var(--gray80))',
        brown300: 'var(--brown300)',
        gray_d7: 'var(--gray-d7)',
        black_4d: 'var(--black-4d)',
        black_6a: 'var(--black-6a)',
        yellow_e1: 'var(--yellow-e1)',
        pcMain: 'hsl(var(--pc-main))',
        onDarkLight: 'hsl(var(--ondark-light))',
        form: 'hsl(var(--form))',
        black_3b: 'var(--black-3b)',
        black_3b80: 'var(--black-3b80)',
        formUncheck: 'var(--form-unchecked)',
        label: 'hsl(var(--label))',
        lineBackground: 'rgba(51, 16, 7, 0.2)',
        lineForeground: 'rgba(51, 16, 7, 0.6)',
        option: 'var(--option)',
        'option-selected': 'var(--option-selected)',
        error: 'var(--error)',
      },
      backgroundImage: {
        'top-page': "url('@/assets/img/bg_top_pc.png')",
        'top-page-sm': "url('@/assets/img/bg_top_mb.png')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        xxl: '1.75rem', // 28px
      },
      lineHeight: {
        common: '1.6',
        heading: '1.4',
      },
      minHeight: {
        160: 'calc(100vh - 160px)',
      },
      boxShadow: {
        'gray-00': '0 2px 16px 0 rgba(0, 0, 0, 0.16)',
        'gray-01': '0px 0px 16px 0px #00000014',
        gray08: '0px 0px 16px 0px rgba(0, 0, 0, 0.08)',
        checkbox: '0px 1px 4px 0px #00000040',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      rotate: {
        35: '35deg',
      },
      fontFamily: {
        sansJP: 'Noto Sans JP',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
