# Final Deployment Steps

You are almost there! I have configured your project for GitHub Pages.

Run these commands in your terminal one by one to publish your site:

1.  **Link your repository:**
    ```bash
    git remote add origin https://github.com/matrixmayank/Mayank_Gupta_portfolio.git
    ```

2.  **Commit your changes:**
    ```bash
    git add .
    git commit -m "Ready for deployment"
    ```

3.  **Push your code to GitHub:**
    ```bash
    git branch -M main
    git push -u origin main
    ```

4.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```

Once the last command finishes, your website will be live at:
**https://matrixmayank.github.io/Mayank_Gupta_portfolio/**
