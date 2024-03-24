/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './assets/src/**/*.{html,js}',
  ],
  theme: {
    extend: {
        colors: {
            clifford: '#da373d',
        }
    }
  },
  plugins: [],
}

