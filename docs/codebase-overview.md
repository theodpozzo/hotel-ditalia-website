# Hotel D'Italia Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Features](#core-features)
5. [Component Architecture](#component-architecture)
6. [Routing and Pages](#routing-and-pages)
7. [State Management](#state-management)
8. [Styling](#styling)
9. [Configuration](#configuration)

## Project Overview

Hotel D'Italia's website serves as a digital platform for a luxury beachfront hotel located in Arroio do Sal, Brazil. The website's primary purposes are:

1. **Online Booking Management**: Allows guests to browse available rooms, check prices, and make direct reservations without third-party booking platforms.

2. **Hotel Information**: Showcases the hotel's amenities, location, and unique features, including:
   - Room descriptions and photos
   - Hotel history and values
   - Location information with interactive maps
   - Current weather conditions
   - Local attractions

3. **Guest Services**: Provides various tools and features for guests:
   - Real-time room availability checking
   - Secure payment processing
   - Multiple language support
   - Newsletter subscription for updates and special offers
   - Direct contact information

The website is designed to provide a seamless, user-friendly experience while maintaining the hotel's luxury brand identity through sophisticated design and smooth interactions.

## Technology Stack

This project is built using modern web technologies:

- **Next.js 14**: A React framework for production-grade applications
- **TypeScript**: Adds static typing to JavaScript
- **Tailwind CSS**: A utility-first CSS framework
- **Shadcn UI**: A collection of reusable UI components
- **Framer Motion**: For animations
- **date-fns**: For date manipulation
- **Radix UI**: For accessible UI primitives

## Project Structure

```
hotel-ditalia-website/
├── app/                    # Next.js app directory (pages and routing)
├── components/            # Reusable React components
│   ├── sections/         # Page sections
│   └── ui/              # UI components
├── lib/                  # Utilities and configurations
├── public/              # Static assets
└── docs/               # Documentation
```

## Core Features

### 1. Booking System
The booking system is implemented across several files:

- `components/sections/BookingSection.tsx`: Main booking form
- `app/booking-confirm/page.tsx`: Booking confirmation page
- `app/room/[id]/page.tsx`: Individual room details

The booking flow:
1. User selects dates and guest count in BookingSection
2. Views available rooms in booking-confirm
3. Selects a specific room
4. Proceeds to payment

### 2. Room Management
Room data and types are defined in `lib/rooms.ts`. Each room has:
- Basic info (name, description)
- Amenities
- Pricing
- Capacity
- Images

### 3. Navigation
The navigation system uses Next.js's file-based routing:

- `components/Header.tsx`: Main navigation header
- `app/layout.tsx`: Root layout with common elements
- Each page in `app/` directory represents a route

## Component Architecture

### UI Components
Located in `components/ui/`, these are the building blocks of the interface:

- `button.tsx`: Reusable button component
- `calendar.tsx`: Date picker component
- `dialog.tsx`: Modal dialogs
- `input.tsx`: Form inputs
- `select.tsx`: Dropdown selects

### Page Sections
Found in `components/sections/`:

- `HeroSection.tsx`: Landing page hero with video background
- `BookingSection.tsx`: Booking form
- `InformationSection.tsx`: Hotel information
- `NewsletterSection.tsx`: Newsletter signup

## Routing and Pages

The `app/` directory contains all pages:

```
app/
├── about/           # About page
├── booking-confirm/ # Booking confirmation
├── gallery/        # Photo gallery
├── location/       # Hotel location
├── payment/        # Payment processing
├── reviews/        # Guest reviews
├── room/           # Individual room pages
└── updates/        # Hotel updates
```

Each page is a React component that represents a route in the application.

## State Management

The application uses React's built-in state management:

- `useState` for local component state
- URL parameters for sharing state between pages
- No global state management solution is implemented

Example from `BookingSection.tsx`:
```typescript
const [dateRange, setDateRange] = useState<DateRange | undefined>({
  from: undefined,
  to: undefined,
})
```

## Styling

The project uses a combination of styling approaches:

1. **Tailwind CSS**
   - Configuration in `tailwind.config.ts`
   - Global styles in `app/globals.css`

2. **CSS Variables**
   - Defined in `:root` in `globals.css`
   - Used for theming and consistent colors

3. **Component-specific styles**
   - Shadcn UI components with customizable themes
   - Inline Tailwind classes for component styling

## Configuration

Key configuration files:

- `next.config.mjs`: Next.js configuration
- `.env.local`: Environment variables
- `components.json`: Shadcn UI configuration
- `tsconfig.json`: TypeScript configuration

### Environment Variables
Required variables in `.env.local`:
```
NEXT_PUBLIC_WEATHER_API_KEY=
NEXT_PUBLIC_MAPS_API_KEY=
NEXT_PUBLIC_BASE_URL=
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in the values
4. Run the development server:
   ```bash
   npm run dev
   ```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com) 