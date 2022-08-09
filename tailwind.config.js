/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    lg:'1440px'
  },
    extend: {
      colors:{
        primary:'#2e337c',
      },
      backgroundImage: () =>({
        'back': "url('../images/backcover.svg)",
      }),
    },
  },
  plugins: [],
}
