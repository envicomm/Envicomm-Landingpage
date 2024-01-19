/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '9xl': '9rem', // or whatever size you want for 9xl
        '12xl': '12rem', // you can continue adding as many as you want
      },
      boxShadow:{
        'custom-green': '0 4px 14px 0 #BBD979', // This line was corrected to provide the full box-shadow value.
      },
      textColor: {
        'custom-green': '#8CBF3F',
        'custom-green1': '#547326',
        'custom-green3': '#BBD979'
      },
      backgroundColor: {
        'custom-green': '#8CBF3F',
        'custom-green1': '#547326',
        'custom-green3': '#BBD979'
      },
      borderColor: {
        'custom-green': '#8CBF3F',
        'custom-green1': '#547326',
        'custom-green3': '#BBD979'
      },
      animation: {
        'fadeInTopToBottom': 'fadeInTopToBottom 1s forwards',
        'fadeInRightToLeft': 'fadeInRightToLeft 1s forwards',
        'fadeInLeftToRight': 'fadeInLeftToRight 1s forwards'
      },
      keyframes: {
        fadeInTopToBottom: {
          from: {
            opacity: 0,
            transform: 'translateY(-50px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeInRightToLeft: {
          from: {
            opacity: 0,
            transform: 'translateX(50px)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0px)'
          }
        },
        fadeInLeftToRight: {
          from: {
            opacity: 0,
            transform: 'translateX(-50px)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          }
        }
      }
    }
  },
  plugins: [],
}
