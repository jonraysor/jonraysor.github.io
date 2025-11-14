# Jonathan Raysor - Personal Portfolio

Personal portfolio website built with TypeScript and Vite.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Vanilla HTML/CSS** - No framework overhead
- **CSS Grid/Flexbox** - Responsive layouts

## Features

- ✅ Type-safe TypeScript codebase
- ✅ Optimized image compression
- ✅ CSS minification
- ✅ Fast development with hot module replacement
- ✅ Enhanced form validation
- ✅ Modular code organization

## Project Structure

```
.
├── index.html              # Homepage
├── about/index.html        # About page
├── consulting/index.html   # Consulting/contact page
├── src/
│   └── ts/
│       ├── main.ts         # Homepage scripts
│       ├── about.ts        # About page scripts
│       ├── consulting.ts   # Consulting page scripts
│       ├── navigation.ts   # Navigation utilities
│       ├── timer.ts        # Counter/timer functionality
│       └── formValidation.ts # Form validation logic
├── public/
│   ├── css/               # Stylesheets
│   ├── fonts/            # Custom fonts
│   └── images/           # Image assets
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking

## Building for Production

```bash
npm run build
```

This will:
1. Type-check all TypeScript files
2. Bundle and minify JavaScript
3. Minify CSS
4. Optimize images
5. Output to `dist/` directory

## Deployment

The site is deployed to GitHub Pages. The `dist/` folder contains the production build.

To deploy:
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting platform

## TypeScript Modules

### Navigation (`navigation.ts`)
Handles all page navigation and routing.

### Timer (`timer.ts`)
Manages the employment duration counter with type-safe time calculations.

### Form Validation (`formValidation.ts`)
Enhanced form validation with:
- Email format validation
- Phone number validation
- Required field checks
- Type-safe form data handling

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features

## License

ISC
