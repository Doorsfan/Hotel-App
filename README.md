# LuxeStay - Hotel Booking Platform

A modern hotel booking platform built with Next.js, React, and Tailwind CSS.

## Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Hotel Listings**: Browse and search premium hotels worldwide
- **Destination Explorer**: Discover amazing travel destinations
- **Special Deals**: Exclusive offers and discounts
- **User Authentication**: Secure login and registration system
- **Contact & Support**: Comprehensive help center and FAQ

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hotel-app
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── login/             # Authentication pages
│   ├── hotels/            # Hotel listings
│   ├── destinations/      # Destination pages
│   └── ...                # Other pages
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

## Migration Notes

This project was migrated from Vite + React Router to Next.js with App Router. Key changes include:

- **Routing**: Converted from React Router to Next.js App Router
- **File Structure**: Moved from `src/pages/` to `app/` directory structure
- **Imports**: Updated all routing imports from `react-router-dom` to `next/link`
- **Configuration**: Replaced Vite config with Next.js configuration
- **Build System**: Updated from Vite to Next.js build system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.