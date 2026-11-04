# Nandan Sharma — Personal Engineering Portfolio ⚡

A high-performance, dark-themed developer portfolio crafted for **Nandan Sharma** (AI & Backend Software Engineer, ECE undergraduate at Bangalore Institute of Technology).

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, optimized for zero cold-start hosting on **Render Static Sites**.

---

## ✨ Features

- **Obsidian Dark & Ambient Glow Aesthetics**: High-contrast glassmorphic design inspired by modern developer platforms (Vercel, Linear, Stripe).
- **Interactive Code & Architecture Simulator**: Live simulation widget demonstrating Python AST diff parsing, pytest log masking, and Ollama LLM test generation.
- **Interactive AI Developer Terminal**: An in-browser terminal supporting interactive commands (`help`, `whoami`, `skills`, `projects`, `rag-demo`, `contact`, `clear`) with quick-run chips.
- **Deep Project Showcases**:
  - **Regression Guard**: AI-Assisted regression test generator with Ollama and dual-state validation.
  - **Lectura AI**: YouTube lecture study assistant with OpenAI Whisper and ChromaDB + Mistral RAG.
  - **Academic Result Automation**: Multi-threaded scraper with OpenCV/Tesseract CAPTCHA resolution and Power BI dashboard.
- **Curated Skills Matrix**: Filterable tech stack by categories (AI & GenAI, Backend, Languages, Data, Tools, Core CS).
- **Interactive Resume Modal**: Built-in formatted CV viewer with one-click print and PDF save.
- **Direct Mailto & Clipboard Integration**: Quick email and phone copying with instant toast feedback.
- **100% Mobile Responsive**: Seamless experience across smartphones, tablets, and desktop displays.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

---

## 🌐 How to Host on Vercel (Fastest & Recommended)

Vercel provides blazing-fast edge CDN deployment for Vite React projects with 100% free hosting and instant custom domains.

### Method 1: Via Vercel Dashboard & GitHub (Easiest — 30 Seconds)
1. Push your latest code to your GitHub repo (e.g. `https://github.com/nandan91531/portfolio`):
   ```bash
   git add .
   git commit -m "ready for vercel"
   git push -u origin main
   ```
2. Open **[vercel.com](https://vercel.com)** and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Select your **`portfolio`** repository and click **Import**.
5. Vercel will auto-detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.
7. In ~25 seconds, your portfolio is live at `https://your-name.vercel.app` with free SSL and edge CDN!

---

### Method 2: Via Vercel CLI (Direct from Terminal)
If you have Vercel CLI installed:
```bash
npm i -g vercel
vercel
```
Follow the 3 quick prompts (press Enter for defaults) and your site will be deployed instantly!

---

## 🌐 Alternative: Host on Render

Render provides **100% free static site hosting** with automatic global CDN, free SSL certificates, and zero cold starts.

### Option 1: Automatic Blueprint (Easiest)
1. Push this project to your GitHub repository (e.g. `https://github.com/nandan91531/portfolio`).
2. Log in to [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** > **Blueprint**.
4. Connect your GitHub repository.
5. Render will automatically read `render.yaml` and deploy your portfolio with zero configuration!

### Option 2: Manual Static Site Setup
1. Push this project to your GitHub repository.
2. Log in to [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** > **Static Site**.
4. Connect your repository (`nandan91531/portfolio`).
5. Configure the following fields:
   - **Name**: `nandan-sharma-portfolio`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Click **Create Static Site**.
7. In about 1 minute, Render will give you a live URL like `https://nandan-sharma-portfolio.onrender.com`.

---

## 📂 Project Structure

```text
nandan-folio/
├── index.html                   # HTML template with Google Fonts & metadata
├── package.json                 # Project dependencies & scripts
├── render.yaml                  # Render Blueprint deployment config
├── tailwind.config.js           # Custom glowing gradients & animations
├── vite.config.js               # Vite bundler config
└── src/
    ├── App.jsx                  # Main application structure
    ├── main.jsx                 # Entry point
    ├── index.css                # Global CSS & glassmorphic utilities
    ├── data/
    │   └── portfolioData.js     # Centralized resume & project data
    └── components/
        ├── Navbar.jsx           # Floating glassmorphic header
        ├── Hero.jsx             # Hero section with interactive code simulator
        ├── About.jsx            # Engineering background & core pillars
        ├── Skills.jsx           # Filterable technical skills matrix
        ├── Projects.jsx         # Project cards with architecture modal
        ├── AiTerminal.jsx       # Interactive sandbox terminal
        ├── EducationCertifications.jsx # Academics, certs, & DSA milestones
        ├── Contact.jsx          # Contact cards & direct message form
        ├── ResumeModal.jsx      # Clean printable/downloadable CV
        └── Footer.jsx           # Minimalist footer with quick links
```

---

## 📬 Contact & Links

- **Name**: Nandan Sharma
- **Email**: nandan.sharma.tech@gmail.com
- **Phone**: +91-8970243018
- **LinkedIn**: [linkedin.com/in/nandan-sharma-b4a472288](https://linkedin.com/in/nandan-sharma-b4a472288)
- **GitHub**: [github.com/nandan91531](https://github.com/nandan91531)

