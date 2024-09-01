/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B19CC',
        light: '#EFEFEF'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

