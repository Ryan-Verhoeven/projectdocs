/** @type {import('tailwindcss').Config} */
module.exports = {
  // Include root HTML and files under `public/` and `src/` so Tailwind
  // picks up classes used in built site and development sources.
  content: ["./*.html", "./public/**/*.html", "./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
