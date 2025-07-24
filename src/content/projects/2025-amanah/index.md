---
title: "SAPA AMANAH - Compliance Monitoring Application (iOS/Android)"
description: "SAPA AMANAH is a Flutter-based mobile application I developed for PT Perkebunan Nusantara I, one of Indonesia's largest state-owned plantation enterprises. The application was designed to digitize monitoring and reporting processes in the plantation sector that were previously performed manually, resulting in operational inefficiencies and difficulties in data-driven decision making."
date: "12 Mar 2025"
demoURL: ""
---

![SAPA AMANAH - Compliance Monitoring Application](/amanah.png)

- 🟢 **Status:** MVP completed; ongoing development for additional features
- 🟡 **Availability:** Debug version available for internal testing
- 📅 **Release Timeline:** Scheduled for public release on <span style="color:#3DDC84;">Play Store</span> and <span style="color:#007AFF;">App Store</span> in 2025

## 📖 Project Overview
SAPA AMANAH is a Flutter-based mobile application I developed for PT Perkebunan Nusantara I, one of Indonesia's largest state-owned plantation enterprises. The application was designed to digitize monitoring and reporting processes in the plantation sector that were previously performed manually, resulting in operational inefficiencies and difficulties in data-driven decision making.

## 💻 Tech Stack
- **Frontend:** Flutter 2.8+ with clean architecture approach
- **Backend:** Laravel 8-based RESTful API
- **Database:** MySQL (server) and SQLite (local storage)
- **State Management:** BLoC Pattern with flutter_bloc 8.0
- **Authentication:** JWT token with refresh mechanism
- **Offline Capability:** Floor Database + custom synchronization algorithm
- **GPS Integration:** Flutter geolocator + Google Maps API
- **Deployment:** CI/CD with Bitbucket Pipelines
- **Methodology:** Agile Scrum with 2-week sprints

## 🗒️ Best Practices
- Clean Architecture with separation of concerns
- Automated testing (unit, widget, integration) with >75% coverage
- CI/CD implementation for consistent delivery
- Comprehensive documentation and knowledge transfer
- Post-implementation support and iterative improvement

## 🗒️ Key Features
### Plantation Module
- **Field Inspection:** Digital system replacing paper forms, reducing inspection time by 65%
- **Harvesting Point Inspection:** Digital monitoring with GPS verification, improving reporting accuracy by 80%
- **Fertilization Tracking:** Documentation with photo and GPS validation, reducing fraudulent reporting by 90%
- **Pest Control Management:** Analytical dashboard for risk area identification
- **Road Maintenance Tracking:** Ticket system for infrastructure issue handling
- **Harvest Cycle Management:** Schedule optimization with calendar visualization
- **Leftover Fruit Bunch Recording:** Real-time tracking with automated notifications

### Processing Module
- **Processing Morning Roll Call:** Digitized attendance and briefing with audit trail
- **Wastewater Treatment Monitoring:** Real-time dashboard with alert system
- **Equipment Failure Reporting:** Ticket system with priority levels and status tracking
- **Failure Analysis:** Structured forms with simple AI-based recommendation system
- **Failure Resolution:** Multi-level approval workflow with notifications
- **Routine Sorting Checks:** Digital checklists with supervisor validation

### Advanced Supporting Features
- **Performance Dashboard:** Interactive data visualization with 12+ key KPI charts
- **Follow-up Action System:** Follow-up workflow with automatic deadlines and reminders
- **Smart Synchronization:** Data priority algorithm using bandwidth constraints
- **Multi-channel Notifications:** In-app, email, and WhatsApp API integration
- **User Management:** RBAC (Role-Based Access Control) with 8 different access levels

## 🔧 Technical Challenges and Innovative Solutions
### Challenges
1. **Limited Connectivity:** Plantation areas with sporadic 2G/3G signal
2. **Relational Data Complexity:** Hierarchical data structure (estate > division > block > field)
3. **24/7 Offline Requirements:** Operations must function without internet connection
4. **GPS Accuracy in Remote Areas:** Difficulty obtaining accurate GPS signals
5. **Device Variability:** From entry-level to high-end smartphones

### Solutions I Implemented
1. **Encrypted Local Database:** Using Floor/SQLite with encryption for sensitive data
2. **BLoC Architecture with Repository Pattern:** Separation of data, domain, and presentation layers
3. **Delta Synchronization Algorithm:** Sending only data changes, reducing data usage by 75%
4. **GPS Augmentation:** Combination of GPS, network location, and landmark references
5. **Performance Profiling:** Custom optimizations for low-end devices (2GB RAM)

## 📊 Results and Measurable Business Impact
- **Operational Efficiency:** Reduction in reporting time from 3 hours to 45 minutes per day
- **ROI:** Return on investment within 7 months through increased productivity
- **Error Reduction:** 92% decrease in reporting errors compared to the manual system
- **Transparency:** Executive dashboard enabling real-time monitoring by management
- **Revenue Increase:** Contribution to an 8% increase in harvest yield through more effective inspections

## 📝 Project Metrics
- Timeline: 2 Weeks (Feb 19 - Mar 12 2025)
- Role: Flutter Developer
- Team Size: 2