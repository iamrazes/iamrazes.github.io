/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'base-1' : '#171717', //900
        'base-2' : '#0a0a0a', //950
        'base-3' : '#737373', //500
        'base-4' : '#525252', //600
        'base-5' : '#404040', //700
        'base-6' : '#262626', //800
        'base-7' : '#f5f5f5', //100
        'accent-1': '#4991EC',
        'accent-2': '#80B8FF',
        'accent-3': '#2E69B4',
      },
    },
  },
  plugins: [],
}

