# Personal Website (ferrislucas.net)

A personal website built with Astro and the Dante theme, featuring a clean, professional design with dark mode support.

## 🚀 Project Structure

```text
ferrislucas.net/
├── public/
│   ├── images/
│   │   └── ferris-profile.jpg
│   └── favicon.jpg
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Nav.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── base.css
│   └── data/
│       └── site-config.ts
└── tailwind.config.mjs
```

## 🛠 Technologies

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Typography**: Inter and Newsreader variable fonts
- **Deployment**: GitHub Actions + GitHub Pages

## 🚀 Development

### Prerequisites

- Node.js (v20 or later)
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/ferrislucas/ferrislucas.net.git
cd ferrislucas.net
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🔄 Deployment

This site automatically deploys to GitHub Pages through GitHub Actions.

### How it Works

The deployment workflow (`/.github/workflows/deploy.yml`) triggers:
- Automatically when pushing to the main branch
- Manually through the GitHub Actions interface

The workflow:
1. Builds the Astro site
2. Deploys to GitHub Pages
3. Makes the site available at [ferrislucas.net](https://ferrislucas.net)

### First-Time Setup

1. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. Configure Repository Permissions:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"

### Monitoring Deployments

1. Visit the repository's Actions tab
2. View deployment status and logs
3. Access deployment history and details

## 🧞 Commands

| Command           | Action                                           |
| :--------------- | :----------------------------------------------- |
| `npm install`    | Installs dependencies                            |
| `npm run dev`    | Starts dev server at `localhost:4321`            |
| `npm run build`  | Builds production site to `./dist/`              |
| `npm run preview`| Preview production build locally                 |

## 📝 Notes

- Built on the Dante theme with customizations
- Dark mode implemented using CSS variables and Tailwind
- Responsive design for mobile and desktop views
- Images stored in `public/images/`

## 📄 License

MIT License - Feel free to use this as a template for your own site!

