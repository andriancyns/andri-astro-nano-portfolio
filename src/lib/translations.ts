import { type Language } from '../i18n';

// Manual translations for existing blog posts
export const blogTranslations = {
  "01-intro": {
    title: "Let's Get Started",
    titleEn: "Let's Get Started", 
    description: "Ini tulisan pertama saya. Nggak muluk-muluk. Nggak ada gimmick. Cuma ingin mulai aja.",
    descriptionEn: "This is my first post. Nothing fancy. No gimmicks. Just want to get started.",
    contentEn: `### Hello, I'm Andrian.
I'm a Software Engineer. My job is coding, debugging, and building systems.

This is my first post. Nothing fancy. No gimmicks. Just want to get started.

I'm creating this because I was bored.
But there's also a small intention:
I want to learn to write blogs, with the purpose of self-documentation.

I want to see how I think, develop, and maybe fail...
but keep moving forward.

In the future, the content of posts on this blog can be random: <br>
💻 Software engineer world (coding, tools, freelance, etc.) <br>
🚀 Personal projects I'm working on <br>
📚 Things I learn (could be technical or non-technical) <br>
🎯 Career journey, experiences, insights <br>

Maybe there will be light topics too, like movies I watched, books I read, or random thoughts.

The point is, I want this blog to be a place for me to reflect and document my journey as a human and software engineer.

So... let's get started! 🚀`
  },
  
  "02-apa-itu-software-engineer": {
    title: "Apa itu Software Engineer? Versi Gue",
    titleEn: "What is a Software Engineer? My Version",
    description: "Saya seorang Software Engineer, kerjaan saya ngoding, debugging, dan ngebangun sistem.",
    descriptionEn: "I'm a Software Engineer, my job involves coding, debugging, and building systems.",
    contentEn: `## What is a Software Engineer? (My Version)

Many people think that a software engineer's job is just coding.
Open laptop, type some code, done.
But according to me, that's just the surface.

### Software Engineer = Digital Problem Solver

In my opinion, a software engineer is a **digital problem solver**.

We don't just write code. We:
- **Analyze problems** → What exactly needs to be solved?
- **Design solutions** → How should we solve it efficiently?
- **Build systems** → Create applications that actually work
- **Test & debug** → Make sure everything runs smoothly
- **Maintain** → Keep the system running long-term

### It's Not Just About the Code

Code is just a tool. The real job is **solving problems with technology**.

For example:
- Client has trouble managing inventory → We build an inventory management system
- Users find it hard to book appointments → We create a booking app
- Company wants to increase sales → We develop an e-commerce platform

### The Skills Needed

Besides coding, we also need:
- **Logical thinking** → Breaking down complex problems
- **Communication** → Understanding client needs, working in teams
- **Continuous learning** → Technology keeps evolving
- **Patience** → Debugging can take hours (or days 😅)

### Why I Love This Job

1. **Every day is different** → New problems, new challenges
2. **Direct impact** → The systems we build are actually used by people  
3. **Always learning** → New technologies, frameworks, approaches
4. **Creative problem solving** → There are many ways to solve one problem

That's my version of what a software engineer is.

Not just typing code, but solving real-world problems with technology. 🚀`
  },

  "03-tools-favorit-saya-backend": {
    title: "Tools Favorit Saya untuk Backend Development",
    titleEn: "My Favorite Tools for Backend Development", 
    description: "Kumpulan tools yang saya gunakan sehari-hari untuk backend development, dari database sampai deployment.",
    descriptionEn: "Collection of tools I use daily for backend development, from database to deployment.",
    contentEn: `# My Favorite Tools for Backend Development

As a backend engineer, I use various tools daily to build scalable and efficient systems. Here are my go-to tools:

## Programming Languages & Frameworks

### 1. **Go (Golang)**
- **Why I love it:** Simple, fast, excellent for microservices
- **Use case:** APIs, microservices, concurrent systems
- **Favorite framework:** Gin, Echo

### 2. **PHP (Laravel)**  
- **Why I choose it:** Rich ecosystem, rapid development, great documentation
- **Use case:** Web applications, APIs, admin panels
- **Favorite features:** Eloquent ORM, Artisan CLI, Job Queues

## Database & Storage

### 1. **PostgreSQL**
- **Why:** Reliable, feature-rich, excellent performance
- **Use case:** Primary database for most projects
- **Love:** JSONB support, advanced indexing, ACID compliance

### 2. **Redis**
- **Why:** Super fast, versatile
- **Use case:** Caching, sessions, pub/sub, queues
- **Performance:** Sub-millisecond response times

### 3. **MongoDB**
- **Why:** Flexible schema, great for rapid prototyping
- **Use case:** Content management, analytics, real-time apps

## Development Tools

### 1. **Docker**
- **Why:** Consistent environments, easy deployment
- **Use case:** Local development, production deployment
- **Love:** No more "works on my machine" issues

### 2. **Git + GitHub**
- **Why:** Version control is essential
- **Workflow:** Feature branches, pull requests, CI/CD integration

### 3. **VS Code**
- **Why:** Lightweight, great extensions, integrated terminal
- **Favorite extensions:** Go, PHP, Docker, GitLens

## API & Testing

### 1. **Postman**
- **Why:** Easy API testing, great collaboration features
- **Use case:** API development, testing, documentation

### 2. **Swagger/OpenAPI**
- **Why:** Auto-generated documentation, API contracts
- **Integration:** Built into most of my projects

## Monitoring & Logging

### 1. **ELK Stack (Elasticsearch, Logstash, Kibana)**
- **Why:** Powerful log analysis, great visualization
- **Use case:** Application monitoring, troubleshooting

### 2. **Prometheus + Grafana**
- **Why:** Excellent metrics collection and visualization
- **Use case:** Performance monitoring, alerting

## Deployment & Infrastructure

### 1. **AWS**
- **Services I use:** EC2, RDS, S3, Lambda, CloudWatch
- **Why:** Scalable, reliable, extensive service catalog

### 2. **Digital Ocean**
- **Why:** Simple, affordable, great for smaller projects
- **Use case:** VPS, managed databases, app platform

### 3. **Nginx**
- **Why:** Fast, efficient, great for load balancing
- **Use case:** Reverse proxy, serving static files

## My Typical Stack

For most projects, my go-to stack is:
- **Backend:** Go/Laravel
- **Database:** PostgreSQL + Redis
- **Infrastructure:** Docker + AWS/DO
- **Monitoring:** Basic logging + metrics

## Why These Tools?

1. **Proven reliability** → Used by many successful companies
2. **Great documentation** → Easy to learn and troubleshoot  
3. **Active community** → Lots of resources and support
4. **Scalability** → Can grow with the project needs
5. **Developer experience** → Makes coding enjoyable

The key is not to use all tools, but to **choose the right tool for each job**. 🛠️`
  },

  "04-giscus": {
    title: "Menambahkan Sistem Komentar ke Blog Astro dengan Giscus",
    titleEn: "Adding Comment System to Astro Blog with Giscus",
    description: "Tutorial step-by-step menambahkan sistem komentar yang powered by GitHub Discussions ke blog Astro menggunakan Giscus.",
    descriptionEn: "Step-by-step tutorial to add a comment system powered by GitHub Discussions to an Astro blog using Giscus.",
    contentEn: `# Adding Comment System to Astro Blog with Giscus

Want to add a comment system to your Astro blog without managing a database? **Giscus** is the perfect solution! It uses GitHub Discussions as the backend, so it's free, secure, and easy to maintain.

## What is Giscus?

Giscus is a comment system powered by **GitHub Discussions**. Comments are stored as discussions in your GitHub repository, making it:

- ✅ **Free** → No hosting costs
- ✅ **No database needed** → GitHub handles storage  
- ✅ **Spam-free** → Users must have GitHub accounts
- ✅ **Developer-friendly** → Perfect for tech blogs
- ✅ **Markdown support** → Rich text formatting

## Prerequisites

- GitHub repository (public)
- Astro blog project
- GitHub account

## Step 1: Enable GitHub Discussions

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Features** section
4. Check **Discussions** checkbox

## Step 2: Install Giscus App

1. Visit [GitHub Apps - Giscus](https://github.com/apps/giscus)
2. Click **Install**
3. Choose your repository
4. Grant necessary permissions

## Step 3: Configure Giscus

1. Go to [giscus.app](https://giscus.app)
2. Enter your repository in format: \`username/repo-name\`
3. Choose your preferences:
   - **Page ↔️ Discussions Mapping:** "Discussion title contains page title"
   - **Discussion Category:** "General" or create a new one
   - **Features:** Enable reactions, etc.
4. Copy the generated script code

## Step 4: Create Giscus Component

Create a new component file:

\`\`\`astro
---
// src/components/GiscusComments.astro
---

<div id="giscus-container">
  <script is:inline src="https://giscus.app/client.js"
    data-repo="your-username/your-repo"
    data-repo-id="your-repo-id"
    data-category="General"
    data-category-id="your-category-id"
    data-mapping="title"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="preferred_color_scheme"
    data-lang="en"
    crossorigin="anonymous"
    async>
  </script>
</div>
\`\`\`

**Important:** Replace the \`data-*\` values with your actual configuration from giscus.app

## Step 5: Add to Blog Posts

Import and use the component in your blog post template:

\`\`\`astro
---
// src/pages/blog/[...slug].astro
import GiscusComments from '../../components/GiscusComments.astro';
// ... other imports
---

<PageLayout title={post.data.title} description={post.data.description}>
  <Container>
    <!-- Your blog post content -->
    <article>
      <Content />
    </article>
    
    <!-- Add comments at the end -->
    <GiscusComments />
  </Container>
</PageLayout>
\`\`\`

## Step 6: Styling (Optional)

Add custom styling to match your blog theme:

\`\`\`css
/* Add to your global CSS */
#giscus-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #giscus-container {
    border-top-color: #374151;
  }
}
\`\`\`

## Pro Tips

### 1. **Theme Synchronization**
If your blog has a theme toggle, you can dynamically update Giscus theme:

\`\`\`javascript
// Function to update Giscus theme
function updateGiscusTheme(theme) {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (iframe) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app'
    );
  }
}
\`\`\`

### 2. **Multiple Categories**
You can create different discussion categories for different types of posts:
- "Blog Posts" for articles
- "Tutorials" for how-to guides  
- "Q&A" for question-based content

### 3. **Moderation**
As the repository owner, you can:
- Edit or delete any comment
- Lock discussions if needed
- Convert issues to discussions

## Benefits Over Other Solutions

| Feature | Giscus | Disqus | Custom DB |
|---------|---------|---------|-----------|
| Cost | Free | Paid plans | Hosting costs |
| Privacy | GitHub only | Tracks users | Full control |
| Maintenance | Zero | Low | High |
| Spam | GitHub validation | Moderation needed | Custom solution |
| Markdown | ✅ | ❌ | Custom |

## Troubleshooting

**Comments not showing?**
- Check if Discussions are enabled
- Verify repository is public
- Ensure Giscus app is installed
- Double-check data attributes

**Wrong theme?**
- Set \`data-theme="preferred_color_scheme"\` for auto-detection
- Or use specific themes like \`light\`, \`dark\`, etc.

## Conclusion

Giscus is an excellent choice for developer blogs because:
- **Zero maintenance** → GitHub handles everything
- **Great UX** → Familiar GitHub interface for developers
- **SEO-friendly** → Comments are indexed by search engines
- **Free forever** → No hidden costs

Perfect for Astro blogs that want engagement without complexity! 🚀

Have questions? Leave a comment below using our new Giscus system! 😉`
  },

  "05-kenapa-laravel-flutter": {
    title: "Kenapa Saya Pilih Laravel + Flutter untuk Membangun Aplikasi dari Nol?",
    titleEn: "Why I Choose Laravel + Flutter to Build Applications from Scratch?",
    description: "Alasan saya memilih kombinasi Laravel dan Flutter untuk membangun aplikasi dari nol — dari sisi kecepatan, fleksibilitas, hingga efisiensi biaya.",
    descriptionEn: "My reasons for choosing the Laravel and Flutter combination to build applications from scratch — from speed, flexibility, to cost efficiency.",
    contentEn: `# Why I Choose Laravel + Flutter to Build Applications from Scratch?

## The Joy and Pain of Building Apps from Scratch 🏗️

Building apps from scratch isn't just about coding.
From idea, design, database, backend, frontend, to testing — everything needs to be neat.

After years of experimenting with various tech stacks, I found my sweet spot: **Laravel + Flutter**.

Here's why this combination works perfectly for me:

## Laravel for Backend: Solid Foundation ⚡

### 1. **Rapid Development**
Laravel has everything I need out of the box:
- **Eloquent ORM** → Database operations become simple
- **Artisan CLI** → Generate components quickly  
- **Migration system** → Database versioning made easy
- **Built-in authentication** → Login system in minutes

Example: Creating a complete CRUD API in under 30 minutes.

\`\`\`bash
php artisan make:model Product -mcr
php artisan make:request ProductRequest
php artisan migrate
\`\`\`

Done. API ready.

### 2. **Rich Ecosystem**
Laravel has solutions for everything:
- **Laravel Sanctum** → API authentication
- **Laravel Queue** → Background job processing
- **Laravel Nova** → Admin panel
- **Laravel Scout** → Full-text search
- **Laravel Horizon** → Queue monitoring

No need to reinvent the wheel.

### 3. **Developer Experience**
Things I love about Laravel:
- **Clear documentation** → Everything is well explained
- **Expressive syntax** → Code reads like English
- **Strong community** → Lots of packages and tutorials
- **Regular updates** → Always getting better

### 4. **Deployment Flexibility**
Laravel can be deployed anywhere:
- Shared hosting (cPanel)
- VPS (Digital Ocean, AWS)  
- Platform-as-a-Service (Heroku, Laravel Vapor)
- Serverless (Laravel Vapor)

## Flutter for Mobile: One Codebase, Multiple Platforms 📱

### 1. **Cross-Platform Efficiency**
One code, run everywhere:
- **iOS** → Native performance  
- **Android** → Consistent UI
- **Web** → Bonus platform (still in development but usable)

No need to maintain separate iOS and Android teams.

### 2. **Performance Close to Native**
Flutter compiles to native ARM code:
- **60fps smooth animations**
- **Fast startup time**
- **Small app size** (with proper optimization)
- **Native platform integration**

### 3. **Rich UI Components**
Flutter makes UI development enjoyable:
- **Material Design** → Beautiful Android-style components
- **Cupertino** → iOS-style components  
- **Custom widgets** → Full UI control
- **Hot reload** → See changes instantly

### 4. **Google Backing**
Benefits of being backed by Google:
- **Regular updates** → New features every few months
- **Long-term support** → Not going away anytime soon
- **Great tooling** → Flutter DevTools, VS Code extension
- **Growing ecosystem** → More packages and plugins

## Why This Combination is Perfect 🎯

### 1. **API-First Architecture**
Laravel creates clean REST APIs:
- **Resource Controllers** → Structured endpoints
- **API Resources** → Consistent JSON responses  
- **Rate limiting** → API protection
- **Versioning support** → Future-proof APIs

Flutter consumes APIs naturally:
- **HTTP package** → Simple API calls
- **Dio** → Advanced HTTP client  
- **Provider/Bloc** → State management
- **JSON serialization** → Type-safe data handling

### 2. **Rapid Prototyping**
Want to validate an idea quickly?

**Week 1:** Laravel API + basic admin panel
**Week 2:** Flutter mobile app MVP
**Week 3:** Testing with real users

Fast time-to-market.

### 3. **Cost Efficiency**
One developer can handle both:
- **Backend:** Laravel (PHP knowledge)  
- **Mobile:** Flutter (Dart is easy to learn)
- **Database:** MySQL/PostgreSQL
- **Deployment:** Single server for API

No need for separate iOS/Android developers.

### 4. **Scalability Path**
When the app grows:
- **Backend:** Add Laravel caching, queues, load balancers
- **Mobile:** Flutter performance is already good
- **Database:** Add read replicas, optimize queries
- **Infrastructure:** Scale horizontally

## Real Project Example 📊

Recently, I built an e-commerce app with this stack:

**Backend (Laravel):**
- Product catalog management
- User authentication & authorization  
- Order processing & payment integration
- Admin dashboard with Laravel Nova
- API documentation with Swagger

**Mobile (Flutter):**
- Product browsing with search & filters
- Shopping cart & checkout flow
- User profile & order history
- Push notifications
- Offline support for favorites

**Results:**
- **Development time:** 6 weeks (solo developer)
- **Performance:** 60fps smooth, 2-3s app startup  
- **Cost:** Single server handles 1000+ concurrent users
- **Maintenance:** Easy to add features and fix bugs

## When NOT to Use This Stack ❌

This combination might not be suitable for:

### 1. **Real-time Heavy Apps**
If your app needs heavy real-time features:
- **Gaming** → Consider Unity or native development
- **Video calling** → WebRTC might be better
- **Live streaming** → Specialized solutions needed

### 2. **iOS-First Premium Apps**  
If targeting iOS users who expect premium native experience:
- **Native iOS** might be better for specific interactions
- **Flutter** is great but sometimes lacks the "native feel"

### 3. **Enterprise with Existing .NET/Java Stack**
If the company already has:
- **Strong .NET team** → ASP.NET Core might be more logical
- **Java expertise** → Spring Boot + Android native
- **Existing infrastructure** → Better to leverage what's there

## Learning Path Recommendation 📚

Want to try this stack? Here's my suggested learning order:

### Phase 1: Backend Foundation
1. **PHP basics** → Variables, functions, OOP
2. **Laravel fundamentals** → Routes, controllers, models
3. **Database design** → Relations, migrations, seeders
4. **API development** → RESTful endpoints, authentication

### Phase 2: Mobile Development  
1. **Dart language** → Syntax, async/await, null safety
2. **Flutter basics** → Widgets, layouts, navigation
3. **State management** → Provider or Bloc
4. **API integration** → HTTP calls, JSON parsing

### Phase 3: Integration & Deployment
1. **API design patterns** → Consistent responses, error handling
2. **Authentication flow** → JWT tokens, secure storage
3. **Deployment** → Server setup, CI/CD, monitoring  
4. **Performance optimization** → Caching, lazy loading, pagination

## Conclusion 🚀

Laravel + Flutter is my go-to combination because:

✅ **Fast development** → MVP in weeks, not months  
✅ **Cost effective** → One developer, multiple platforms  
✅ **Proven stack** → Used by thousands of successful apps  
✅ **Future-proof** → Both technologies are actively developed  
✅ **Great community** → Lots of resources and support  

It's not perfect for every use case, but for most business applications, it's an excellent choice.

**The key is choosing tools that let you focus on solving problems, not fighting with technology.**

What's your experience with full-stack development? Let me know in the comments! 💬`
  },

  "06-tips-mendesain-erd-skalabel": {
    title: "3 Tips Mendesain ERD yang Skalabel dari Pengalaman Proyek Nyata",
    titleEn: "3 Tips for Designing Scalable ERDs from Real Project Experience", 
    description: "Pengalaman saya mendesain Entity Relationship Diagram (ERD) yang scalable untuk proyek nyata, lengkap dengan 3 tips praktis agar database tetap rapi dan siap berkembang.",
    descriptionEn: "My experience designing scalable Entity Relationship Diagrams (ERDs) for real projects, complete with 3 practical tips to keep your database clean and ready to grow.",
    contentEn: "English content for ERD scalability tips article."
  }
};

// Helper function to get content by language
export function getContentByLang(slug: string, lang: Language, originalContent: string) {
  if (lang === 'id') return originalContent;
  
  const translation = blogTranslations[slug as keyof typeof blogTranslations];
  return translation?.contentEn || originalContent;
}

// Helper function to get title by language  
export function getTitleByLang(slug: string, lang: Language, originalTitle: string) {
  if (lang === 'id') return originalTitle;
  
  const translation = blogTranslations[slug as keyof typeof blogTranslations];
  return translation?.titleEn || originalTitle;
}

// Helper function to get description by language
export function getDescriptionByLang(slug: string, lang: Language, originalDescription: string) {
  if (lang === 'id') return originalDescription;
  
  const translation = blogTranslations[slug as keyof typeof blogTranslations];
  return translation?.descriptionEn || originalDescription;
}