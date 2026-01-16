---
title: "Personal Portfolio Website - Modern Developer Showcase"
description: "A high-performance, SEO-optimized personal portfolio built with Astro and modern web technologies. Features include blog with view counter, project showcase, structured data for SEO, and seamless deployment pipeline."
date: "2025-12-15"
draft: false
demoURL: "https://cyns.space"
repoURL: "https://github.com/andriancyns/andri-astro-nano-portfolio"
---

![Personal Portfolio Website - Modern Developer Showcase](/portfolio-thumb.png)

- 🟢 **Status:** Live and actively maintained
- 🌐 **Live Demo:** [cyns.space](https://cyns.space)
- 📂 **Source Code:** [GitHub Repository](https://github.com/andriancyns/andri-astro-nano-portfolio)

## 🎯 Business Context & Goals
- Build a professional online presence that clearly communicates my skills to clients.
- Create a content hub for articles, projects, and experiments that supports inbound leads.
- Ensure the site is fast and SEO-friendly so it can be discovered organically.

## 🧩 My Role & Responsibilities
- Designed the information architecture, visual style, and content strategy.
- Implemented the entire stack: frontend, content layer, analytics, and deployment.
- Continuously iterate on features (view counter, structured data, newsletter, etc.).

## 📊 Impact & Outcomes
- Serves as the primary touchpoint for clients and collaborators to understand my work.
- Achieves perfect Lighthouse scores, demonstrating my ability to ship production-grade frontends.
- Provides a reusable blueprint for building similar portfolios and marketing sites for clients.

## 📖 Project Overview

As a freelance software engineer, having a professional online presence is essential for attracting clients and showcasing expertise. This portfolio website was built from the ground up to serve as my digital business card—demonstrating not just my work, but my ability to deliver modern, performant, and user-friendly web experiences.

The project showcases my full-stack capabilities, from frontend design to backend integration, SEO optimization, and DevOps practices.

## 🎯 Problem & Solution

**Challenge:** Most developer portfolios are either:
- Slow and bloated with unnecessary JavaScript
- Lacking proper SEO and discoverability
- Missing engagement features like comments and analytics
- Difficult to maintain and update

**Solution I Built:** A lightning-fast, content-focused portfolio that:
- Achieves **100/100 Lighthouse scores** across all metrics
- Ranks well on search engines with **structured data (Schema.org)**
- Engages visitors with **real-time view counters** and **comments**
- Deploys automatically with every git push

## 💻 Tech Stack

### Core Framework
- **Astro 4.x** - Static site generator with partial hydration for optimal performance
- **TypeScript** - Type-safe development across all components
- **TailwindCSS** - Utility-first styling with dark mode support

### Backend & Database
- **Supabase** - PostgreSQL database for view counter persistence
- **REST API** - Client-side view tracking with session deduplication

### Content & SEO
- **MDX** - Enhanced markdown for blog posts with component support
- **Astro Content Collections** - Type-safe content management
- **Schema.org Structured Data** - Rich snippets for Google Search
- **Sitemap & RSS** - Automatic sitemap and RSS feed generation

### Integrations
- **Giscus** - GitHub-based commenting system
- **Ahrefs Analytics** - Traffic monitoring and SEO insights

### DevOps
- **Netlify** - Continuous deployment with preview branches
- **GitHub Actions** - CI/CD pipeline with automated builds
- **Environment Variables** - Secure credential management

## 🗒️ Key Features Delivered

### Performance Optimization
- **Static Generation** - Pre-rendered pages for instant loading
- **Image Optimization** - Automatic WebP conversion and lazy loading
- **Minimal JavaScript** - Only hydrates interactive components
- **Code Splitting** - Optimized bundles for fast initial load

### SEO & Discoverability
- **Meta Tags** - Dynamic titles, descriptions, and Open Graph images
- **Structured Data** - Person, Article, Website, and Breadcrumb schemas
- **Canonical URLs** - Proper URL handling for search engines
- **Robots.txt & Sitemap** - Automated generation for crawler access

### Content Management
- **Blog System** - Markdown-based posts with frontmatter metadata
- **Project Showcase** - Detailed case studies with live demos
- **Work Experience** - Timeline of professional history
- **Tag System** - Categorized content for easy navigation

### Engagement Features
- **View Counter** - Real-time page view tracking with Supabase
- **Comments** - GitHub-integrated comment system via Giscus
- **Reading Time** - Estimated reading duration for each post
- **Share Links** - Easy social media sharing

### User Experience
- **Dark Mode** - System-preferred and manual toggle
- **Responsive Design** - Mobile-first approach for all devices
- **Smooth Animations** - Subtle transitions for polished feel
- **Accessibility** - WCAG-compliant markup and navigation

## 🔧 Technical Challenges & Solutions

### Challenge 1: Persistent View Counter without Backend
**Problem:** Static sites can't track page views across visitors.
**Solution:** Integrated Supabase as a lightweight backend, using REST API calls from the client with session-based deduplication to prevent double counting.

### Challenge 2: SEO for Dynamic Content
**Problem:** Blog posts need unique meta tags and structured data.
**Solution:** Built a dynamic structured data component that generates Person, Article, Website, and Breadcrumb schemas based on page context.

### Challenge 3: Performance with Rich Features
**Problem:** Adding features like comments and analytics typically hurts performance.
**Solution:** Used Astro's partial hydration (`client:visible`) to defer loading until components enter viewport, maintaining 100 Lighthouse score.

## 📊 Results & Business Impact

| Metric | Result |
|--------|--------|
| **Lighthouse Performance** | 100/100 |
| **Lighthouse Accessibility** | 100/100 |
| **Lighthouse Best Practices** | 100/100 |
| **Lighthouse SEO** | 100/100 |
| **First Contentful Paint** | < 1.0s |
| **Time to Interactive** | < 1.5s |
| **Build Time** | < 5 seconds |

### Business Outcomes
- **Professional Credibility** - Demonstrates technical expertise to potential clients
- **Lead Generation** - Contact information readily accessible
- **Content Marketing** - Blog posts attract organic traffic
- **SEO Visibility** - Ranks for relevant developer keywords

## 📝 Project Metrics

- **Timeline:** Ongoing development (initial build: 2 weeks)
- **Role:** Full Stack Developer & Designer
- **Team Size:** Solo Project
- **Codebase:** 50+ components, 10+ pages, 15+ blog posts
- **Deployment:** Automated via Netlify CI/CD

## 🚀 Future Roadmap

- [ ] Newsletter subscription integration
- [ ] Project filtering and search
- [ ] Multi-language support (ID/EN)
- [ ] Case study template improvements
- [ ] Performance monitoring dashboard

---

This project demonstrates my ability to deliver end-to-end web solutions—from design and development to deployment and maintenance. It showcases modern best practices in performance, SEO, and user experience that I apply to all client projects.

**Interested in a similar solution for your business?** [Let's connect →](mailto:andriancyns@gmail.com)
