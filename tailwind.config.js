module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
       fontFamily: {
          'lato': ['Lato'],
       }
    }
 },
  plugins: [require('@tailwindcss/line-clamp')]
}
