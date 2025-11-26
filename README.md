# Astuto Solutions Website

Welcome to the Astuto Solutions website repository. This is a modern, responsive business website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Optimized for speed and SEO
- **Multiple Pages** - Home, About, Services, Resources, Contact
- **WhatsApp Integration** - Direct chat button for customer support
- **Blog Section** - Share insights and updates
- **Contact Forms** - Easy communication with potential clients

## Getting Started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system.

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

After a few seconds, your project will be accessible at [http://localhost:5173/](http://localhost:5173/)

### Production Build

Build the project for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── ui/           # UI components (buttons, cards, etc.)
│   ├── home/         # Home page sections
│   ├── Navbar.tsx    # Navigation bar
│   ├── Footer.tsx    # Footer component
│   └── WhatsAppButton.tsx  # WhatsApp chat button
├── pages/            # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ResourcesPage.tsx
│   └── ContactPage.tsx
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
└── App.tsx           # Main app component
```

## Customization

### Update WhatsApp Number

Edit `src/components/WhatsAppButton.tsx`:
```typescript
const whatsappNumber = 'YOUR_NUMBER_HERE'; // Format: country code + number (no spaces)
```

### Update Logo

Place your logo file in the `static` folder and update the path in `src/components/Navbar.tsx`:
```typescript
<img src="/logo.jpg" alt="Astuto Solutions Logo" />
```

### Update Contact Information

Edit contact details in:
- `src/components/Footer.tsx`
- `src/pages/ContactPage.tsx`

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## License

© 2024 Astuto Solutions LLP. All rights reserved.
