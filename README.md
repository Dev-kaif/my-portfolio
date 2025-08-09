# Personal Portfolio of Mohammad Kaif

This is the source code for my personal portfolio website, designed to showcase my skills, projects, and experience as a Full Stack Developer. The project is built with a focus on a clean, professional aesthetic, powered by modern web technologies and brought to life with subtle, meaningful animations.

**Live Demo:** [**https://dev-kaif.vercel.app/**](https://dev-kaif.vercel.app/) 👈

---

### ✨ Key Features

This portfolio is more than just a static page; it's a demonstration of modern frontend development practices and a keen eye for user experience.

- **Modern & Responsive Design:** A clean, professional UI that looks great on all devices, from mobile phones to desktop screens.
- **Component-Based Architecture:** The entire application is broken down into small, reusable React components for clean code and maintainability.
- **Dark Mode:** A sleek, user-toggleable dark theme.
- **Advanced Animations with Framer Motion:**
  - **Staggered Text Reveal:** Section headers animate in character-by-character for a witty, engaging effect.
  - **Parallax Profile Picture:** The "About Me" image gently drifts as the user scrolls, creating a sense of depth.
  - **Gooey Tab Effect:** The "Work Experience" section features a unique, fluid "gooey" animation for the active tab indicator.
  - **Professional Hover Effects:** Project cards feature a subtle zoom, overlay, and "View Project" call-to-action on hover.
  - **Scroll Progress Indicator:** A thin bar at the top of the page indicates the user's scroll depth.
  - **Functional Button Animations:** The contact form button provides clear visual feedback for "sending" and "success" states.
  - **Staggered List Reveal:** Bullet points in the "Experience" section fade, slide, and de-blur into view sequentially.
  - **Animated Accordion Icon:** The FAQ chevron icon smoothly rotates 180 degrees when a question is opened or closed.
- **Smooth Scrolling:** Implemented with `lenis` for a fluid and pleasant scrolling experience.
- **Interactive Mobile Dock:** A clean, space-saving floating dock provides quick navigation on mobile devices.
- **SEO & Metadata:** Includes comprehensive metadata for search engine optimization and rich social media link previews.

---

### 🛠️ Tech Stack

This project was built using the following technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Smooth Scrolling:** [Lenis](https://lenis.studio/)
- **Deployment:** [Vercel](https://vercel.com/)

---

### 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/Dev-kaif/my-portfolio](https://github.com/Dev-kaif/my-portfolio.git)
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd my-portfolio
    ```

3.  **Install dependencies:**

    ```sh
    pnpm install
    ```

4.  **Run the development server:**

    ```sh
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

### 📂 Project Structure

The codebase is organized into a clean, component-based structure to ensure scalability and maintainability.

````

src/
├── app/
│   └── page.tsx          \# The main page, which assembles all components
├── components/
│   ├── animated/         \# Reusable animation components (e.g., MotionSplitText)
│   ├── portfolio/        \# Main section components (Hero, About, Skills, etc.)
│   ├── ui/               \# Components from shadcn/ui
│   └── Svg/              \# Custom SVG components
├── hooks/
│   └── useIsDesktop.ts   \# Custom hook for responsive logic
└── lib/
├── constants.ts      \# Centralized file for all data and shared values
└── utils.ts          \# Utility functions (e.g., cn for Tailwind)

````

---

### 👤 Contact

**Mohammad Kaif**

* **GitHub:** [@Dev-kaif](https://github.com/Dev-kaif)
* **LinkedIn:** [mohammadkaif123](https://www.linkedin.com/in/mohammadkaif123)
* **X (Twitter):** [@dev_kaif_](https://x.com/dev_kaif_)

---

### 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

