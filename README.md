# 🚀 Prakash Mondal - Modern Portfolio Website

A high-end, responsive portfolio application engineered with **React (Vite)** for a lightning-fast frontend experience and a **PHP** micro-service for secure contact management.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![Tailwind](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

---

## 🔥 Key Features

### 💎 Premium User Interface
- **Glassmorphic Design:** Modern frosted-glass effects using advanced CSS backdrops.
- **Scroll Animations:** Smooth reveal animations as the user navigates sections.
- **Dynamic Hero:** Catchy typewriter effects and high-impact typography.

### 📱 Responsive Engineering
- **Mobile First:** Fully optimized for mobile devices, tablets, and 4K monitors.
- **Adaptive Navigation:** A sticky mobile-friendly header with an active scroll-spy.

### ⚙️ Functional Backend
- **Asynchronous Forms:** Contact form submissions handled via `fetch` API without page reloads.
- **PHP Integration:** Secure server-side processing for professional communication.

---

## 🛠️ Detailed Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 18 (Vite) | Component-based UI and fast HMR. |
| **Styling** | CSS3 / Flexbox / Grid | Custom animations and responsive layouts. |
| **Backend** | PHP 8.x | Handling POST requests and form logic. |
| **Icons** | React Icons / FontAwesome | Scalable vector graphics. |
| **Deployment** | GitHub Actions / Vercel | CI/CD pipeline and static hosting. |

---

## 📁 Project Architecture

```text
portfolio/
├── public/               # Static assets (Favicons, CV PDF)
├── src/
│   ├── components/       # Reusable UI Modules
│   │   ├── Navbar.jsx    # Sticky navigation
│   │   ├── Hero.jsx      # Landing section
│   │   ├── About.jsx     # Profile & Bio
│   │   ├── Skills.jsx    # Interactive skill cards
│   │   ├── Projects.jsx  # Portfolio grid
│   │   └── Contact.jsx   # Form with validation
│   ├── assets/           # Internal images and global styles
│   ├── App.jsx           # Main App Shell
│   └── main.jsx          # DOM Bootstrapper
├── backend/
│   └── contact.php       # PHP logic for contact form
└── vite.config.js        # Build tool configuration
