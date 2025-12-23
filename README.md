# BP_HTML_09TWND

A clean and minimal starter template for building static HTML projects using **Tailwind CSS**.  
This repo is designed for simple prototypes, landing pages, student projects, or any environment where you want Tailwind without complex frameworks.

---

# 🚀 Getting Started

## 1. Download the Project (No Git Required)

If you don’t want to use Git, you can download the project as a ZIP:

1. Go to the repository page  
   https://github.com/bureaupixel/BP_HTML_09TWND
2. Click the green **Code** button  
3. Choose **Download ZIP**  
4. Extract the ZIP file on your computer  

Now you have the project folder ready to use.

---

# 📦 Install & Run (Tailwind + Node)

Open the project folder in your terminal and install dependencies:

```bash
cd BP_HTML_10TWND-main
npm install
```

Development (live rebuild):

```bash
# In terminal A: watch Tailwind and rebuild CSS
npm run watch

# In terminal B: start the Node static server
npm start
```

One-time production build:

```bash
npm run build
```

Notes for this repo:
- Tailwind input file: `src/input.css` (contains Tailwind directives).
- Build output: `public/assets/styles.css` (existing site links to this file).
- Server file: `server.js` (starts an Express static server at port 3000).
- Tailwind scanning globs are in `tailwind.config.js` and include `public/**/*.html` and `src/**/*.{html,js}`.

If CSS doesn't update, ensure your HTML pages link to `public/assets/styles.css` and that `npm run watch` is running while you edit.