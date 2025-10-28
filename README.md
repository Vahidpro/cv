# CV Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project is a migration from a vanilla JavaScript portfolio to a modern React-based application with multi-language support and static export capabilities.

## Features

- 🌐 **Multi-language Support**: Persian (فارسی) and English with RTL/LTR support
- 🎨 **Dark/Light Theme**: Toggle between themes with persistent user preference
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Static Export**: Optimized for static hosting (GitHub Pages, Netlify, etc.)
- 🎯 **TypeScript**: Full type safety throughout the application
- 🎭 **Typing Animation**: Smooth typing effect for hero section
- 🎨 **Modern UI**: Clean, professional design with custom components
- 📦 **Component-based**: Modular, reusable React components

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with RTL support
- **Icons**: React Icons
- **Font**: Vazirmatn (Persian) with fallback to system fonts
- **Build**: Static export for hosting

## Project Structure

```
src/
├── app/
│   ├── [lang]/                 # Dynamic language routes
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── page.tsx           # Home page
│   ├── globals.css            # Global styles and Tailwind imports
│   └── page.tsx               # Root redirect to /fa
├── components/
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx         # Navigation with theme/language toggles
│   │   └── Footer.tsx         # Footer with social links
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx           # Hero section with typing animation
│   │   ├── Skills.tsx         # Skills showcase
│   │   └── Portfolio.tsx      # Portfolio projects
│   └── ui/                    # Reusable UI components
│       ├── ThemeToggle.tsx    # Dark/light theme toggle
│       ├── LanguageSwitch.tsx # Language switcher
│       └── TypingText.tsx     # Typing animation component
├── lib/
│   ├── i18n/                  # Internationalization
│   │   ├── getTranslation.ts  # Server-side translation function
│   │   ├── useTranslation.ts  # Client-side translation hook
│   │   ├── settings.ts        # Language configuration
│   │   └── translations/      # Translation files
│   │       ├── fa.json        # Persian translations
│   │       └── en.json        # English translations
│   ├── theme/                 # Theme management
│   │   └── ThemeProvider.tsx  # Theme context provider
│   └── utils.ts               # Utility functions
├── types/
│   └── index.ts               # TypeScript type definitions
└── public/
    └── assets/                # Static assets (images, icons, etc.)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-cv
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment to any static hosting service.

## Deployment

### Static Hosting

The project is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Upload the `out/` contents
- **Any static hosting service**

### Environment Variables

No environment variables are required for basic functionality.

## Customization

### Adding New Languages

1. Add the language code to `src/lib/i18n/settings.ts`
2. Create a new translation file in `src/lib/i18n/translations/`
3. Update the `generateStaticParams` function in `src/app/[lang]/page.tsx`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to the main page in `src/app/[lang]/page.tsx`
3. Add any required translations

### Styling

The project uses Tailwind CSS with custom configuration. Key files:

- `tailwind.config.js`: Tailwind configuration with custom colors and RTL support
- `src/app/globals.css`: Global styles and custom CSS classes

## Features in Detail

### Multi-language Support

- Dynamic routing with `[lang]` parameter
- RTL support for Persian language
- Language switcher in navigation
- Server-side and client-side translation functions

### Theme System

- Dark/light mode toggle
- Persistent theme preference in localStorage
- Smooth theme transitions
- Tailwind dark mode integration

### Typing Animation

- Custom `TypingText` component
- Configurable typing speed
- Smooth character-by-character animation

### Responsive Design

- Mobile-first approach
- Bootstrap-like grid system with Tailwind
- Responsive navigation with mobile menu
- Optimized images with Next.js Image component

## Migration Notes

This project was migrated from a vanilla JavaScript portfolio with the following improvements:

- ✅ Converted to modern React/Next.js architecture
- ✅ Added TypeScript for type safety
- ✅ Implemented multi-language support
- ✅ Migrated from Bootstrap to Tailwind CSS
- ✅ Added dark/light theme support
- ✅ Optimized for static export
- ✅ Improved component organization and reusability
- ✅ Enhanced developer experience with modern tooling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Contact

- **Developer**: Vahid Parsafar
- **Email**: ivahidp@gmail.com
- **GitHub**: [@Vahidpro](https://github.com/Vahidpro)
- **Twitter**: [@Vahidpr](https://twitter.com/Vahidpr)
