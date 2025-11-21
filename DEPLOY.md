# How to Publish Your Website

Here are the three easiest ways to publish your portfolio online for free.

## Option 1: Vercel (Recommended)
**Best for:** Easiest setup, automatic deployments from GitHub.

1.  **Push your code to GitHub**:
    *   Initialize git: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Create a new repository on GitHub.
    *   Link and push:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git branch -M main
        git push -u origin main
        ```
2.  **Deploy on Vercel**:
    *   Go to [vercel.com](https://vercel.com) and sign up.
    *   Click **"Add New..."** -> **"Project"**.
    *   Import your GitHub repository.
    *   Vercel detects Vite automatically. Click **"Deploy"**.

## Option 2: Netlify
**Best for:** Drag-and-drop deployment (no git required initially).

1.  **Build your project**:
    *   Run `npm run build` in your terminal.
    *   This creates a `dist` folder in your project directory.
2.  **Deploy**:
    *   Go to [netlify.com](https://netlify.com) and sign up.
    *   Drag and drop the `dist` folder onto the Netlify dashboard.
    *   Your site is live!

## Option 3: GitHub Pages
**Best for:** Hosting directly on your GitHub profile.

1.  **Update `vite.config.js`**:
    *   Add `base: '/REPO_NAME/'` to the config (replace REPO_NAME with your GitHub repository name).
2.  **Install `gh-pages`**:
    *   Run `npm install gh-pages --save-dev`.
3.  **Update `package.json`**:
    *   Add these scripts:
        ```json
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
        ```
4.  **Deploy**:
    *   Run `npm run deploy`.
