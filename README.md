# 🚀 Bilal Benyoussef — Portfolio

![Responsive](https://img.shields.io/badge/UI-Responsive-%2300C49A?style=flat-square&logo=tailwind-css&logoColor=white)

This is my personal developer portfolio built with **React**, **TypeScript**, and modern frontend technologies.
It showcases my skills, projects, and experience in a smooth, animated, and fully responsive design.

![portfolio-banner](./src/assets/images/hero-banner.png)

## 🌐 Live Demo

👉 [**Visit the Live Site**](https://your-portfolio-link.com)

Explore the full experience of my portfolio, smooth animations, responsive design, and modern UI.

---

## 🧰 Tech Stack

- ⚛️ **React 19** + **TypeScript**
- 🌀 **Tailwind CSS 4** (with `tailwind-scrollbar`)
- ✨ **GSAP + ScrollTrigger** for smooth animations
- 🪄 **Lenis** for smooth scrolling
- 🔔 **Sonner** for toast notifications
- 🧼 ESLint for clean and consistent code
- ⚡ Vite for fast development and builds

---

## 📂 Project Structure

```
my_portfolio/
│
├─ src/
│ ├─ assets/
│ │ ├─ icons/
│ │ └─ image/
│ │
│ ├─ components/
│ │ ├─ About.tsx
│ │ ├─ Contact.tsx
│ │ ├─ Footer.tsx
│ │ ├─ Header.tsx
│ │ ├─ Hero.tsx
│ │ ├─ Review.tsx
│ │ ├─ Skill.tsx
│ │ ├─ Work.tsx
│ │ └─ Button.tsx
│ │
│ ├─ constants/
│ │ ├─ aboutItems.ts
│ │ ├─ reviews.ts
│ │ ├─ skillItems.ts
│ │ ├─ works.ts
│ │ ├─ socialLinks.ts
│ │ └─ footer.ts
│ │
│ ├─ App.tsx
│ └─ main.tsx
│
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

---

## 🌟 Features

- ✅ **Modern UI** built with Tailwind CSS
- 🚀 **Smooth scrolling** using [Lenis](https://lenis.darkroom.engineering)
- 🎬 **Scroll-based animations** powered by [GSAP + ScrollTrigger](https://gsap.com)
- 🧭 Multiple sections:

  - Hero
  - About
  - Skills
  - Work / Projects
  - Reviews
  - Contact Form (with GetForm.io)
  - Footer

- 🌍 Responsive design for all devices
- ⚡ Optimized with Vite for fast load times

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Bilalben23/portfolio2.git
cd portfolio2
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the project

```bash
npm run dev
```

The app will be running at 👉 `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

Then preview the build locally:

```bash
npm run preview
```

---

## 🪄 Animations

- `Lenis` provides smooth scroll experience throughout the site.
- `GSAP + ScrollTrigger` animates sections (fade up, horizontal slide, etc.) on scroll.
- Elements use the class `reveal-up` to trigger animations when they appear in view.

---

## 📬 Contact Form

The contact section uses [GetForm.io](https://getform.io) for handling submissions.
All form inputs are validated on the client side with toast feedback using `sonner`.

---

## 🧼 Linting

To check code quality:

```bash
npm run lint
```

---

## 📝 Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

---

## 🙌 Acknowledgements

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://gsap.com)
- [Lenis](https://github.com/darkroomengineering/lenis/blob/main/README.md)
- [Sonner](https://sonner.emilkowal.ski/)
- [GetForm.io](https://getform.io)

---

## 📄 License

This project is licensed under the **Apache 2.0 License**.
You’re free to use and adapt it for your own portfolio projects.

---

## 👨‍💻 Author

**Bilal Benyoussef**

- 💼 [LinkedIn](https://linkedin.com/in/bilal-ben-youssef-b38a27251)
- 🐙 [GitHub](https://github.com/Bilalben23)
- ✉️ [bilalbeny735@gmail.com](mailto:bilalbeny735@gmail.com)

---

## 🖼️ Full Page Preview

Here’s a full-page look at the portfolio:

> 📸 _Screenshot of the complete landing page showcasing hero, about, work, and contact sections._

![portfolio-full](./src/assets/images/portfolio-full.png)
