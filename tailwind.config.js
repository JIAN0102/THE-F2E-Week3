module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3C8CFF',
        secondary: '#D2E6FF',
        'light-gray': '#F2F4F6',
        'dark-gray': '#282D37',
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        '12px': '.75rem',   // 12px
        '14px': '.875rem',  // 14px
        '16px': '1rem',     // 16px
        '64px': '4rem'      // 64px 
      },
      spacing: {
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '10.5': '2.625rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1601px'
      },
      minWidth: {
        '22.5': '5.625rem',
        '37.5': '9.375rem'
      },
      maxWidth: {
        '120': '30rem',
      },
      borderRadius: {
        '15': '3.75rem',
      },
      zIndex: {
        '1001': '1001',
        '9999': '9999'
      }
    },
  },
  variants: {
    borderRadius: ['responsive', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
