# GREGREY UI

Modern furniture discovery and connection platform UI built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable components (Navigation, Footer, etc)
│   ├── layout/         # Layout components
│   └── search/         # Search-related components
├── pages/              # Page components (HomePage, SearchPage, etc)
├── services/           # API services
├── store/              # Zustand state management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.tsx             # Main App component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## Features

- **Discovery**: Search, browse, and image-based furniture discovery
- **Matching**: Smart furniture and business matching
- **Connection**: Enquiry creation and business communication
- **Personalization**: Save furniture and businesses
- **Business Profiles**: Complete business storefronts and portfolios

## Tech Stack

- **React** 18 - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Axios** - HTTP client

## Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=GREGREY
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Component Organization

- **Layout Components**: Provide page structure (header, footer, main content)
- **Common Components**: Reusable UI elements used across pages
- **Page Components**: Full page implementations
- **Feature Components**: Specialized components for specific features

## State Management

Using Zustand for simple, efficient state management:

```typescript
import { useStore } from '@store'

const { savedFurniture, saveFurniture } = useStore()
```

## API Integration

API calls are centralized in `src/services/api.ts`:

```typescript
import { furnitureApi } from '@services/api'

const results = await furnitureApi.search('sofa')
```

## Styling

- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-specific styles (when needed)
- **Custom CSS** in `index.css` for global styles

## Contributing

1. Create a feature branch: `git checkout -b feat/feature-name`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feat/feature-name`
4. Create Pull Request

## License

MIT
