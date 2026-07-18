# Collector's Hub

A premium, modern React web application built for numismatists and collectors to discover, trade, and showcase rare collectibles.

## Features & Modules

### 1. Marketplace
Browse thousands of rare coins, banknotes, and sets vetted by world-class experts.
- **Smart Filtering & Searching:** Instantly filter by category and condition, and search by title or tags.
- **Detailed Listings:** View high-resolution images, seller information, location, and estimated value.
- **Wishlist & Collection:** Easily bookmark items to your wishlist or add them to your owned collection with a single click.

### 2. Community Feed
Connect with passionate collectors, share your recent finds, and discuss numismatics.
- **Interactive Feed:** Browse a rich Instagram-style feed of community posts.
- **Engagement:** Like and Save posts seamlessly with optimistic UI updates.
- **Post Details:** Click into any post to view full details and instantly navigate to related marketplace items.

### 3. My Vault (Collection Management)
A purpose-built vault to manage your personal collection securely.
- **Owned Items:** Track items you currently own.
- **Selling:** Seamlessly list your owned items for sale on the marketplace.
- **Wishlist:** Keep an eye on items you plan to acquire. 
- **Quick Actions:** Move items between collections (e.g. from Wishlist to Owned) directly from the vault grid.

## Extra Features & UX Polish (Bonus Implementations)
- **Glassmorphism UI:** Stunning frosted glass effects, ambient background gradients, and premium modern aesthetics.
- **Micro-Animations:** Tactile, satisfying feedback on interactions (e.g. buttons scaling down on click, images smoothly zooming on hover).
- **Smart Reusable Components:** Advanced React patterns used to build abstract generic components like `ToggleActionButton` and `FilterBar` that eliminate code duplication.
- **Optimistic UI Updates:** Instant visual feedback when liking, saving, or wishlisting items before any mock network delay.
- **Robust Empty States:** Clear, helpful empty states when filters yield no results or collections are empty.

## Setup Instructions

1. Ensure you have Node.js installed.
2. Clone this repository.
3. Navigate to the client directory: `cd Client`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`
6. Open `http://localhost:5173` in your browser.

## Assumptions & Architecture Decisions

- **State Management:** Because this is a frontend-only take-home assignment, a mock "database" was created using exported TypeScript arrays (`marketplaceItems.ts` and `CommunityPost.ts`). 
- **Data Mutability:** To simulate a real backend without complex global state providers like Redux, the application mutates the base arrays in memory when actions (like Wishlisting) occur, and uses local component state to trigger instant UI re-renders. (Note: In a production app, this would be replaced with React Query or Redux hitting an actual API).
- **Styling:** Tailwind CSS was heavily utilized to construct complex, responsive UI components rapidly.
- **Routing:** Standard client-side routing was implemented using `react-router-dom`.

## Libraries Used
- React 18
- React Router DOM
- Tailwind CSS
- Zustand (State Management)
- Vite (Build Tool)

---
*Built as a take-home assignment for the React Intern role.*
