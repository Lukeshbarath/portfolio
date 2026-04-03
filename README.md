# Luke's Portfolio Website

A modern, responsive portfolio website built with React, showcasing embedded systems expertise and AI/ML transition journey.

## 🚀 Quick Start - Deploy to GitHub Pages

### Prerequisites
- Node.js 14+ installed
- Git installed
- GitHub account

### Step 1: Setup Repository

1. **Create a new GitHub repository**
   - Go to GitHub.com → Click "+" → "New repository"
   - Name it `portfolio` (or any name you prefer)
   - Make it **Public**
   - Don't initialize with README (we already have files)
   - Click "Create repository"

2. **Initialize and push your code**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

### Step 2: Configure for GitHub Pages

1. **Update package.json**
   - Open `package.json`
   - Change the `homepage` line to:
     ```json
     "homepage": "https://YOUR_USERNAME.github.io/portfolio"
     ```
   - Replace `YOUR_USERNAME` with your actual GitHub username
   - Replace `portfolio` with your repo name if different

### Step 3: Install Dependencies & Deploy

```bash
# Install all dependencies
npm install

# Deploy to GitHub Pages (this builds and publishes)
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to that branch
- Your site will be live at `https://YOUR_USERNAME.github.io/portfolio`

### Step 4: Enable GitHub Pages (if not auto-enabled)

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select `gh-pages` branch
4. Click "Save"
5. Wait 1-2 minutes, then visit your URL

---

## 📝 Customizing Your Portfolio

### 1. Update Personal Information

**In `src/App.js`, replace placeholders with your info:**

```javascript
// Line ~30: Update your social links
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="mailto:your.email@example.com" ...>

// Line ~27: Update email
<a href="mailto:your.email@example.com" className="btn btn-primary btn-large">
```

### 2. Update Projects Section

**In `src/App.js`, find the `projects` array (around line 35) and replace with your actual projects:**

```javascript
const projects = [
  {
    title: "Your Project Name",
    category: "Machine Learning", // or "Data Science", "AI Engineering"
    description: "What does your project do? What problem does it solve?",
    tech: ["Python", "TensorFlow", "Flask"], // Your tech stack
    github: "https://github.com/yourusername/project-repo",
    demo: "https://your-demo-link.com" // Optional
  },
  // Add more projects...
];
```

**Tips for strong project descriptions:**
- Start with the problem or goal
- Mention key technologies/techniques
- Include quantifiable results if possible
- Keep it 2-3 sentences max

### 3. Update Experience Section

**In `src/App.js`, around line 180, update your work experience:**

```javascript
<h3>Your Actual Job Title</h3>
<h4>Your Company Name</h4>
<p className="timeline-description">
  Replace with your real responsibilities and achievements.
  Focus on impact, not just duties.
</p>
<div className="timeline-tech">
  <span>Tech1</span>
  <span>Tech2</span>
</div>
```

**For multiple roles:** Duplicate the entire `<div className="timeline-item">` block.

### 4. Update Skills

**In `src/App.js`, around line 55, modify the `skills` object:**

```javascript
const skills = {
  "Your Category": ["Skill 1", "Skill 2", "Skill 3"],
  "Another Category": ["Skill A", "Skill B"],
  // Add or remove categories as needed
};
```

### 5. Customize Colors & Theme

**In `src/App.css`, at the top (lines 1-20), modify CSS variables:**

```css
:root {
  --accent-primary: #00d9ff;     /* Main accent color */
  --accent-secondary: #7b68ee;   /* Secondary accent */
  /* Change these to match your preferred color scheme */
}
```

**Popular alternatives:**
- Emerald: `#10b981` / `#059669`
- Amber: `#f59e0b` / `#d97706`
- Rose: `#f43f5e` / `#e11d48`
- Violet: `#8b5cf6` / `#7c3aed`

---

## 🛠️ Development

### Run Locally
```bash
npm start
```
Opens at `http://localhost:3000` with hot reload.

### Build for Production
```bash
npm run build
```
Creates optimized build in `/build` folder.

### Deploy Updates
After making changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
npm run deploy
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main component (UPDATE THIS)
│   ├── App.css             # Styles
│   ├── index.js            # Entry point
│   └── index.css           # Base styles
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

---

## 🎨 Design Features

- **Modern Tech Theme**: Dark mode with cyan/purple gradients
- **Smooth Animations**: Scroll-triggered effects and hover states
- **Fully Responsive**: Works perfectly on mobile, tablet, desktop
- **Professional Typography**: JetBrains Mono + Syne fonts
- **Optimized Performance**: Fast loading, smooth scrolling

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure you've updated:

- [ ] GitHub username in package.json `homepage`
- [ ] All social media links (GitHub, LinkedIn, Email)
- [ ] Projects array with your actual projects
- [ ] Experience/work history
- [ ] Skills list
- [ ] About section description
- [ ] Your name in hero section (search for "Luke" in App.js)

---

## 🆘 Troubleshooting

**Site not loading after deploy?**
- Check GitHub Pages settings (Settings → Pages)
- Verify `homepage` in package.json matches your repo
- Wait 2-3 minutes after deployment

**Blank page after deployment?**
- Make sure `homepage` in package.json is correct
- Try `npm run deploy` again
- Check browser console for errors

**Want to use custom domain?**
- Add a `CNAME` file to `/public` with your domain
- Configure DNS settings at your domain registrar
- See: [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📧 Questions?

This portfolio is built with Create React App. For React docs:
- [React Documentation](https://reactjs.org/)
- [Create React App docs](https://create-react-app.dev/)

---

## 🚀 Next Steps

1. **Deploy immediately** with placeholder content to see it live
2. **Update content** gradually (projects, experience, skills)
3. **Share your link** on LinkedIn, resume, applications
4. **Keep it updated** as you complete new projects

**Your portfolio URL will be:**
`https://YOUR_USERNAME.github.io/portfolio`

Good luck with your AI/ML transition! 🎯
