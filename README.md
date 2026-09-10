# Chhotu Kumar — Portfolio Website

A personal portfolio website for **Chhotu Kumar**, MCA graduate and Full-Stack Web Developer Intern. Built as a fast, dependency-free static site with a dark, developer-inspired UI (editor/terminal theme).

**Live site:** https://chhotukumar70.github.io/Chhotukumar70.io/
**GitHub:** https://github.com/Chhotukumar70

---

## Tech Stack

- **HTML5** — semantic markup, no framework
- **CSS3** — custom properties (CSS variables), CSS Grid & Flexbox, no Bootstrap/Tailwind
- **Vanilla JavaScript (ES6+)** — no jQuery or build step required
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (utility/mono accents)
- **Hosting:** GitHub Pages

No build tools, package managers, or server-side code are required — it's a static site that runs from `index.html` directly.

---

## Features

- Dark, code-editor-inspired theme with amber / teal / violet / pink / blue accent colors
- Typing animation for rotating role titles, and a mini "terminal" component in the hero
- Scroll-reveal animations and animated skill bars (IntersectionObserver based)
- Interactive "click glow" light effect on About/Contact detail rows
- Fully responsive layout (mobile, tablet, desktop) with a collapsible mobile nav
- Sections: Home · About · Skills · Experience & Education Timeline · Certifications & Achievements · Work · Contact

---

## Experience & Certifications Overview

**Experience (most recent first):**
1. **Full-Stack Web Developer Intern** — CodSoft (Virtual Internship), 25 Aug 2026 – 25 Sept 2026. Building full-stack web applications, including the **EduManage** Student Management System.
2. **MCA Student & Web Development Learner** — Academic & Practical Learning, 2023 – 2025.
3. **Trainee — Python** — Anudip Foundation, 2024.

**Education:**
- Master of Computer Applications (MCA) — Accurate Institute of Management & Technology (Dr. A.P.J. Abdul Kalam Technical University, Lucknow), 2023 – 2025.
- Bachelor of Computer Applications (BCA) — Jamuni Lal College, Hajipur (Babasaheb Bhimrao Ambedkar Bihar University, Muzaffarpur), 2019 – 2022.

**Certifications & Achievements** (as shown, ISRO listed first):
1. **AI/ML for Geodata Analytics** — Indian Institute of Remote Sensing (IIRS), ISRO. Enrolment No. `2026235032271`, 3–14 Aug 2026.
2. **AI Foundation Course** — Jio Institute (AI Classroom powered by JioPC). Certificate ID: `96oGEl2zwP7a`.
3. **Data Analyst 101** — Simplilearn SkillUp (Microsoft Courses). Certificate code: `10661081`, completed 28 Aug 2026.
4. **Introduction to Generative AI Studio** — Google Cloud Skills Boost. Certificate code: `10660673`, completed 28 Aug 2026.
5. **C++** — Sololearn. Certificate `CT-HVXKG8OQ`, issued 16 Jun 2020.
6. **Python Core** — Sololearn. Certificate `CT-LY9RX0AW`, issued 13 Jul 2021.

All six are displayed in a single unified certifications panel (one dark card, divided rows) rather than separate cards.

**Featured Projects** (all 5 CodSoft internship tasks):
1. **EduManage — Student Management System** (Task 1). CRUD operations, attendance tracking, result management, and fee ledger. Stack: React + Vite + Tailwind CSS (50%), Node.js + Express API (30%), SQLite + JWT Auth (20%). [Source](https://github.com/Chhotukumar70/CODSOFT_Task1_Student_Management_System)
2. **DineDesk — Restaurant Ordering Platform** (Task 2). Online orders, table reservations, digital menus, kitchen operations, role-based access. Stack: React + Tailwind CSS v4 (50%), Node.js + Express API (30%), SQLite + JWT Auth (20%). [Source](https://github.com/Chhotukumar70/CODSOFT_Task2_Restaurant_Ordering_Platform)
3. **CareerHub — Job Portal Platform** (Task 3). Job listings, application tracking pipelines, candidate profiles, JWT authentication. Stack: React + Vite + Tailwind CSS (50%), Node.js + Express API (30%), SQLite + JWT Auth (20%). [Source](https://github.com/Chhotukumar70/CODSOFT_Task3_Job_Portal)
4. **MarketHub — Multi-Vendor E-Commerce Marketplace** (Task 4). Multi-vendor cart splitting, seller/admin dashboards. Stack: React + Vite + Tailwind CSS (50%), Node.js + Express API (30%), SQLite + JWT Auth (20%). [Source](https://github.com/Chhotukumar70/CODSOFT_Task4_Multi_Vendor_Ecommerce_Marketplace)
5. **FleetFlow — Logistics & Fleet Management Platform** (Task 5). Shipments, drivers, vehicles, routes, warehouses, status audit trails, multi-role dashboards. Stack: React + Vite + Tailwind CSS (50%), Node.js + Express API (30%), SQLite + JWT Auth (20%). [Source](https://github.com/Chhotukumar70/CODSOFT_Task5_Logistics_And_Fleet_Management_Platform)

---

## Repository Structure

```
.
├── index.html                          # Main site (single page)
├── README.md                           # This file
├── css/
│   └── style.css                       # All styles (theme variables, layout, animations)
├── js/
│   └── main.js                         # Nav, scroll-reveal, typing effect, skill bars, click-glow
├── images/
│   ├── profile.webp                    # Background-removed profile photo (hero)
│   └── proj_1_screenshot.jpg           # Extra asset (Personal Portfolio Website preview, not currently linked on the page)
└── certificates/
    ├── AIML_for_Geodata_Analytics_ISRO_Certificate.pdf
    ├── AI_Foundation_Course_Certificate.pdf
    ├── Data_Analyst_101.pdf
    ├── Introduction_to_Generative_AI_Studio__Google_Cloud_.pdf
    ├── Cpp_Certificate_Sololearn.pdf
    └── Python_Core_Certificate_Sololearn.pdf
```

> Each "View Certificate" button in the Certifications & Achievements panel links directly to its PDF in `certificates/`. To add or replace a certificate, drop the PDF into that folder and add/update the matching row + `href` in `index.html`.

---

## Setup & Local Preview

No installation needed — it's a static site.

1. Download / clone this project.
2. Open `index.html` directly in a browser, **or** serve it locally for the best experience:
   ```bash
   # Python
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```
3. To edit content, update the text directly inside `index.html`. Styling lives in `css/style.css` (see the `:root` block at the top for all color/font variables), and behavior/animations live in `js/main.js`.

---

## Deploying to GitHub Pages

1. Push this folder's contents to the root of your `Chhotukumar70.io` repository (or your `username.github.io` repo).
2. In the repository settings, enable **GitHub Pages** for the `main` branch (root folder).
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## Credits

Built by **Chhotu Kumar**.
Contact: `chhotukumar7480ck@gmail.com` · +91 7061588560 · Vaishali, Bihar
