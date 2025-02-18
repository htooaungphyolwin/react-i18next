# React Multilingual App

A modern React application demonstrating internationalization (i18n) capabilities with support for multiple languages including English, Korean, and Myanmar.

![App Screenshot](/public/screenshot.png)

## Features

- 🌐 Support for multiple languages (English, Korean, Myanmar)
- 🔄 Dynamic language switching
- 🎨 Modern UI with Tailwind CSS
- 🔍 Automatic language detection
- ⚡ Built with Vite for optimal performance

## Technologies Used

- React 18
- TypeScript
- i18next
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-i18-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
├── i18n/              # Internationalization configuration
│   ├── config.ts      # i18n setup
│   └── locales/       # Translation files
│       ├── en/        # English translations
│       ├── ko/        # Korean translations
│       └── my/        # Myanmar translations
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Adding New Languages

To add a new language:

1. Create a new translation file in `src/i18n/locales/<language-code>/translation.json`
2. Add the language configuration in `src/i18n/config.ts`
3. Update the language options in `src/components/LanguageSwitcher.tsx`

## License

This project is open source and available under the MIT License.
