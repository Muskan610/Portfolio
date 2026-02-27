# Premium Designer Portfolio

A beautiful, premium designer portfolio landing page built with React, Vite, and Tailwind CSS, featuring sophisticated mouse tracking animations.

## Features

- **Interactive Hero Section**: Custom cursor follower, parallax floating elements, and magnetic CTA button
- **Premium Color Palette**: Soft pinks, coral, sage green, and cream inspired by floral design
- **Smooth Animations**: Scroll-triggered animations with Intersection Observer
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Performance Optimized**: 60fps animations using requestAnimationFrame
- **Accessible**: WCAG AA compliant with keyboard navigation support

## Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- GitHub Pages (deployment)

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at: `https://[username].github.io/MuskanWebsite/`

### Manual Deployment

```bash
npm run build
```

Then deploy the `dist` folder to your hosting provider.

## Project Structure

```
src/
├── components/
│   ├── shared/          # Reusable components (Button, Card, etc.)
│   ├── Hero/            # Hero section with mouse tracking
│   ├── About/           # About section
│   ├── Portfolio/       # Portfolio gallery
│   ├── Services/        # Services section
│   └── Contact/         # Contact section
├── hooks/               # Custom React hooks
├── data/                # Portfolio and services data
├── utils/               # Constants and utilities
└── assets/              # Styles and static assets
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: { ... },
  sage: { ... },
  accent: '#FFB6B6',
}
```

### Content

- **Portfolio items**: Edit `src/data/portfolio.js`
- **Services**: Edit `src/data/services.js`
- **About section**: Edit `src/components/About/About.jsx`

### Images

Add your images to `public/images/` and update the paths in the data files.

## Performance

- Target: 90+ Lighthouse score
- 60fps animations using requestAnimationFrame
- Touch device detection (disables mouse tracking on mobile)
- Lazy loading images
- Code splitting for optimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!
