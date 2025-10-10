NewsHub — Personalized News Dashboard

A React application that fetches and displays news articles by category, allows bookmarking, and provides a responsive, clean UI built with Material-UI and Redux Toolkit.

🧩 Features

Browse news by categories (General, Technology, Sports, Politics, etc.)

View article details (title, image, content, publish date)

Bookmark articles and view saved ones

Persistent bookmarks via localStorage

Responsive layout using Material-UI

State management via Redux Toolkit + Thunks

Navigation using React Router v6

📂 Project Structure (src folder highlights)
src/
 ├── api/                    # API utilities (e.g. fetch logic)
 ├── assets/                 # Static assets (images, icons)
 ├── components/             # Reusable UI components  
 │    ├── ArticleCard.jsx  
 │    ├── CategoryTabs.jsx  
 │    ├── Navbar.jsx  
 │    └── etc.
 ├── features/                # Redux slices + feature logic  
 │    ├── news/                # news fetching slice, actions, selectors  
 │    └── bookmarks/           # bookmarking slice  
 ├── pages/                    # Route-level components  
 │    ├── Home.jsx  
 │    ├── Category.jsx  
 │    ├── ArticleDetail.jsx  
 │    └── Bookmarks.jsx  
 ├── App.jsx                   # Main app and routing setup  
 └── index.js                  # Entry point & store provider  


This structure groups logic by feature (news, bookmarks). That modularization helps maintainability and simulates team-based organization.

🛠 Tech Stack & Libraries

React (functional components + hooks)

Redux Toolkit (slices, createAsyncThunk)

React Router v6

Material-UI (MUI v5)

localStorage for persistence

Fetch / Axios (depending on how the project implements API calls)

📥 Installation & Running Locally

Clone the repository

git clone https://github.com/12001300/NewsHub-Personalized-News-Dashboard.git
cd NewsHub-Personalized-News-Dashboard


Install dependencies

npm install


Start the development server

npm start


Open your browser to

http://localhost:3000

🚦 Usage & UI Flow

Home Page — displays latest articles of a default category

Category View — select a category, articles in that category are fetched & displayed

Article Detail — click “Read More” or card to view full article with more content

Bookmarks Page — view your saved articles; remove bookmarks as desired

Users can toggle bookmarks on any article card; bookmarked items persist across refreshes.

🧠 State & Bookmark Logic

A slice (e.g. newsSlice) handles fetching articles based on category and search.

Bookmark data is synced to localStorage, so user’s bookmarks remain after page reloads.

Components use selectors (e.g. selectAllBookmarks) to read bookmark state.

🎨 Styling & Theme

Leveraging Material-UI for consistent styling, spacing, and responsive grid

Cards, AppBar, Tabs, and other UI elements use MUI’s theming

Custom overrides and styles can live in a theme file or CSS-in-JS as needed

✅ Future Enhancements & Improvements

Integrate a real news API (e.g. NewsAPI.org) instead of mocks

Add search autocomplete / filtering results

Pagination or infinite scroll for long article lists

Dark mode / light mode toggle

Add unit/integration tests (Jest + React Testing Library)

Improve accessibility (aria labels, keyboard navigation)

Optimize performance (memoization, lazy loading, code splitting)

🧾 Contribution & Workflow

Use feature branches (e.g. feature/news-fetch, feature/bookmarks)

Commit messages in imperative style (e.g. feat: add bookmark toggle)

Open Pull Requests with description, screenshots, and testing steps

👤 Author

Repository Owner: 12001300

📄 License

Specify your license (e.g. MIT).