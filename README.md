# Collector's Hub

A responsive web application where users can discover collectible items through a marketplace, browse community posts, and manage their personal collection.

Built with React, TypeScript, and Tailwind CSS.

## Setup Instructions

1. Ensure you have **Node.js** (v16 or higher) installed.
2. Clone this repository:
   ```bash
   git clone https://github.com/davidShalom-git/Trackzio-Assignment.git
   cd Trackzio-Assignment
   ```
3. Navigate to the client directory:
   ```bash
   cd Client
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:5173` in your browser.

## Assumptions Made

- **No Backend / Mock Data:** Since the assignment states "You are free to use mock data," all data is stored as TypeScript arrays in the `src/api/` folder. In a production app, these would be replaced by actual API calls using Fetch or Axios.
- **No Authentication:** As stated in the assignment, authentication is not required. A placeholder "Sign In" button is shown in the navbar for visual completeness.
- **State Management with Zustand:** I chose Zustand over Redux or Context API because it provides global state management with minimal boilerplate — a single file (`useAppStore.ts`) manages all application state. This keeps the codebase clean and easy to follow.
- **Collection = Marketplace Items:** The "My Collection" module manages marketplace items that the user has marked as Owned, Wishlisted, or Selling. This avoids data duplication and keeps a single source of truth.
- **Estimated Value:** Each item's price serves as the estimated value in the Collection view, since mock valuation data would not add meaningful functionality.
- **Date Added:** Displayed as the current date since items are added at runtime from mock data.

## Libraries Used

| Library | Purpose |
|---------|---------|
| React 18 | Core UI framework |
| TypeScript | Type safety across the entire codebase |
| React Router DOM | Client-side routing between pages |
| Zustand | Lightweight global state management |
| Tailwind CSS | Utility-first CSS framework for responsive design |
| Vite | Fast development server and build tool |

## Additional Features Implemented

### Reusable Component Architecture
- **`ToggleActionButton`** — A single generic component that handles Like, Save, Add to Collection, Add to Wishlist, and List for Sale actions. It accepts the store type, property name, and render function for the icon. This eliminates duplicated toggle logic across the entire app.
- **`FilterBar`** — A shared search, filter, and sort component used across Marketplace, Community Feed, and My Collection. It accepts an `hideAdvancedFilters` prop to conditionally show/hide condition and price sorting (relevant for Marketplace but not for the Community Feed).
- **`PostCard`** — A wrapper card component with consistent glassmorphism styling and hover effects, reused across Marketplace and Collection grids.
- **`EmptyState`** — A reusable component that displays contextual messages when a list is empty (e.g., empty collection, no search results).

### Edge Case Handling
- **Duplicate Prevention:** Items use boolean flags (`isInCollection`, `isWishlisted`, `isSelling`) on a single data source, making it architecturally impossible to add duplicates.
- **User Feedback:** Alert messages confirm when items are added/removed from collections. Buttons update their label instantly (e.g., "Add to Collection" becomes "Remove from Collection").
- **Empty States:** Every list view (Marketplace, Feed, Collection tabs) shows a helpful empty state with a relevant message when no items match.
- **Item Not Found:** The detail pages show a fallback UI with a back link if an invalid ID is accessed.
- **Missing Data:** Optional fields like `gallery` are handled with conditional rendering.

### Optimistic UI Updates
- Toggling Like, Save, Wishlist, and Collection actions updates the UI instantly without waiting for a network response. The Zustand store processes updates synchronously, giving the user immediate feedback.

### Responsive Design
- The application is fully responsive across mobile, tablet, and desktop using Tailwind's responsive breakpoints.
- The Marketplace grid scales from 1 column (mobile) to 4 columns (desktop).
- The Community Feed uses a CSS masonry layout that adapts from 1 to 4 columns.
- The Navbar collapses gracefully on smaller screens.

### Smooth Animations
- Hover effects on cards (scale, shadow transitions).
- Active state feedback on buttons (`active:scale-90`).
- Smooth page transitions with gradient background animations.
- Image zoom on hover in feed cards and detail pages.

### Cross-Module Linking
- Community posts can link to related marketplace items via a `relatedItemId` field, allowing users to navigate from a feed post directly to the item's marketplace listing.

## Project Structure

```
Client/src/
├── @types/          # TypeScript type definitions
├── api/             # Mock data (simulates API responses)
├── assets/          # Static assets (images, SVGs)
├── components/      # Reusable UI components
│   ├── EmptyState.tsx
│   ├── FeedCard.tsx
│   ├── FilterBar.tsx
│   ├── Navbar.tsx
│   ├── PostCard.tsx
│   └── ToggleActionButton.tsx
├── hooks/           # Zustand store (global state)
├── pages/           # Page-level components
│   ├── HomePage.tsx
│   ├── MarketPlacePage.tsx
│   ├── MarketItemDetail.tsx
│   ├── FeedPage.tsx
│   ├── PostDetailPage.tsx
│   ├── CollectionPage.tsx
│   └── AccountPage.tsx
├── routes/          # Route configuration
├── utils/           # Utility functions (e.g., currency formatter)
├── App.tsx          # Root component
└── main.tsx         # Entry point
```

---
*Built as a take-home assignment for the React Web Developer Internship role.*
