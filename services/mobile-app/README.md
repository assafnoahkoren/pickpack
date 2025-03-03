# PickPack Mobile App

This is the mobile app for the PickPack platform, which matches couriers with businesses for deliveries.

## Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Capacitor (Mobile Native App)

```bash
# After building the app
yarn build

# Sync changes with native projects
yarn cap:sync

# Add Android platform (already done)
yarn cap:add:android

# Add iOS platform (already done)
yarn cap:add:ios

# Open Android Studio
yarn cap:open:android

# Open Xcode
yarn cap:open:ios
```

## Project Structure

```
src/
├── assets/          # Static assets
│   ├── images/      # Image files
│   └── styles/      # Global styles
├── components/      # Reusable UI components
├── App.css          # App-specific styles
├── App.tsx          # Main App component
├── index.css        # Global styles
└── main.tsx         # Entry point
```

## Technologies

- React
- TypeScript
- Vite
- Capacitor (iOS & Android)
