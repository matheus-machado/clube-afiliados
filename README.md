# Affiliate Hub Dashboard

![Affiliate Hub Dashboard](public/samsung.jpeg) A modern, responsive, and feature-rich web application designed to empower digital affiliate marketers. This platform provides tools to discover high-performing products, create multi-link campaigns, and analyze performance across various e-commerce and digital product marketplaces.

---

## ✨ Key Features

-   **Product Discovery:** Browse and search for products from multiple marketplaces (Amazon, Mercado Livre, Shopee, etc.).
-   **Advanced Filtering:** Filter products by marketplace, category, price range, ranking, and trending status.
-   **Campaign Builder:** Select multiple products to create a single, shareable message with all affiliate links included.
-   **Subscription Tiers:** A complete, visually appealing plans page comparing "Beginner" and "Pro" tiers with different feature sets.
-   **Analytics Dashboard:** (Concept) A dedicated section to track link clicks, conversions, and campaign performance.
-   **Responsive Design:** A mobile-first interface that works beautifully on all screen sizes.
-   **Modern UI/UX:** Built with a clean, modern design system using Tailwind CSS.

## 📸 Screenshots

Here's a glimpse of what Affiliate Hub looks like.

| Dashboard & Filters                                   | Subscription Plans                                   |
| ----------------------------------------------------- | ---------------------------------------------------- |
| ![Dashboard View](public/image_4d62ab.jpg) | ![Plans Page](public/image_4cfc9b.jpg) |


## 🛠️ Tech Stack

This project is built with a modern and robust frontend stack:

-   **Framework:** [React](https://react.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** Headless primitives from [Radix UI](https://www.radix-ui.com/) (Dialogs, Tabs).
-   **Component Variants:** [Class Variance Authority (CVA)](https://cva.style/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Utilities:** `clsx`, `tailwind-merge`

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://your-repository-url.git](https://your-repository-url.git)
    cd affiliate-hub-dashboard
    ```

2.  **Install all dependencies:**
    This command will install React, Vite, Tailwind CSS, and all other necessary packages from `package.json`.
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Open the application in your browser:**
    Navigate to `http://localhost:5173` (or the URL provided in your terminal). The application will reload automatically when you make changes to the code.

## 📂 Project Structure

The project follows a standard Vite + React structure. Key directories include:

```
/
├── public/               # Static assets (images, fonts)
├── src/
│   ├── components/       # Reusable React components (functional & UI)
│   │   ├── ui/           # Generic UI components (Button, Card, Dialog)
│   │   └── Plans.tsx     # Example of a page component
│   ├── data/             # Mock data for products and analytics
│   ├── lib/              # Utility functions (e.g., cn for classnames)
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles & Tailwind directives
│   └── main.tsx          # Application entry point
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

