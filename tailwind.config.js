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
        sidebar: '#5b6b79',
        warning: '#FFD700',
        danger: '#FF6347',
        success: '#32CD32',
        info: '#1E90FF',
        light: '#A9A9A9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

