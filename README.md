# The Wild Oasis Website

The Wild Oasis cabin hotel website built with [Next.js](https://nextjs.org/). The project showcases a modern, SSG/SSR responsive website for managing cabin reservations, guest profiles, and more.

## Features

- **Dynamic Routing**: Fully dynamic pages for cabins, reservations, and guest profiles.
- **Server-Side Rendering (SSR)**: Optimized data fetching for better performance and SEO.
- **Client-Side Interactivity**: Forms, filters, and reservation management with React hooks.
- **Authentication**: Secure login and session management using `next-auth`.
- **Optimistic Updates**: Smooth user experience with optimistic UI for reservations.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: `next-auth`
- **Date Management**: `date-fns`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amercosic21/the-wild-oasis-website.git
   cd the-wild-oasis
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To build the app for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
app/
├── _components/        # Reusable components (e.g., forms, spinners, navigation)
├── _lib/               # Utility functions and data services
├── account/            # Guest account-related pages
├── cabins/             # Cabin-related pages
├── api/                # API route handlers
├── layout.js           # Root layout for the app
├── loading.js          # Global loading spinner
├── not-found.js        # 404 page
├── page.js             # Home page
```

## Key Features

### Dynamic Routing

- Pages like `/cabins/[cabinId]` and `/account/reservations` are dynamically generated based on data.

### Authentication

- Secure login with Google OAuth using `next-auth`.

### Optimistic UI

- Reservation updates and deletions are handled optimistically for a seamless user experience.

### Server-Side Data Fetching

- Data is fetched on the server using Supabase and passed to components for rendering.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-auth Documentation](https://next-auth.js.org/getting-started/introduction)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/)
