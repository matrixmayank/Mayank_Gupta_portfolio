#!/bin/bash

echo "🚀 Starting Deployment Process..."

# 1. Initialize Git if not already initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
fi

# 2. Add Remote Origin
echo "Configuring GitHub repository..."
# Remove origin if it exists to avoid errors
git remote remove origin 2>/dev/null
git remote add origin https://github.com/matrixmayank/Mayank_Gupta_portfolio.git

# 3. Stage and Commit
echo "Committing changes..."
git add .
git commit -m "Deploying portfolio website"

# 4. Push to GitHub
echo "Pushing to GitHub... (You may be asked for your GitHub credentials)"
git branch -M main
git push -u origin main --force

# 5. Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "✅ Done! Your website should be live shortly."
