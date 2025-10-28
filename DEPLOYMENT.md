# Deployment Guide

This guide covers how to deploy the Next.js CV portfolio to various static hosting platforms.

## Build Process

First, build the static export:

```bash
npm run build
```

This creates an `out/` directory with all static files ready for deployment.

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. The site will be available at `https://your-project.vercel.app`

**Configuration**: No additional configuration needed. Vercel handles Next.js static export automatically.

### 2. Netlify

1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `out/` folder to deploy
4. Or connect your GitHub repository and set build command to `npm run build` and publish directory to `out`

**Custom Domain**: Add your custom domain in Netlify dashboard.

### 3. GitHub Pages

1. Build the project: `npm run build`
2. Create a new branch called `gh-pages`
3. Copy all contents from `out/` to the root of `gh-pages` branch
4. Push the branch to GitHub
5. Enable GitHub Pages in repository settings
6. Select `gh-pages` branch as source

**URL**: `https://yourusername.github.io/your-repo-name`

### 4. Any Static Hosting Service

The `out/` directory contains all necessary files for static hosting:

- `index.html` - Root page (redirects to /fa)
- `fa/index.html` - Persian version
- `en/index.html` - English version
- `_next/` - Next.js static assets
- `assets/` - Images and other static files

Simply upload the contents of the `out/` directory to your hosting service.

## Environment-Specific Notes

### Base Path Configuration

If deploying to a subdirectory (e.g., `https://yoursite.com/portfolio`), update `next.config.js`:

```javascript
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: '/portfolio', // Add this line
	images: {
		unoptimized: true,
	},
	distDir: 'out',
};
```

### Custom Domain

For custom domains, ensure your DNS is properly configured:

- **A Record**: Point to your hosting service's IP
- **CNAME**: Point to your hosting service's domain
- **SSL**: Most hosting services provide free SSL certificates

## Performance Optimization

The static export is already optimized for performance:

- ✅ Static HTML generation
- ✅ Optimized images with Next.js Image component
- ✅ Minified CSS and JavaScript
- ✅ Tree-shaking for unused code
- ✅ Font optimization with Google Fonts

## Troubleshooting

### Build Issues

If you encounter build issues:

1. Clear Next.js cache: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run lint`

### Deployment Issues

1. **404 on refresh**: Ensure your hosting service supports SPA routing
2. **Images not loading**: Check that `unoptimized: true` is set in next.config.js
3. **RTL not working**: Verify that `tailwindcss-rtl` plugin is installed

### Language Routing

The site uses client-side routing for language switching. If you need server-side routing:

1. Configure your hosting service for SPA routing
2. Set up redirects from `/` to `/fa`
3. Ensure all routes are properly handled

## Monitoring

After deployment, monitor:

- **Performance**: Use Google PageSpeed Insights
- **Accessibility**: Use Lighthouse accessibility audit
- **SEO**: Check meta tags and structured data
- **Analytics**: Add Google Analytics or similar service

## Updates

To update the deployed site:

1. Make your changes
2. Run `npm run build`
3. Deploy the new `out/` directory
4. Clear any CDN caches if applicable
