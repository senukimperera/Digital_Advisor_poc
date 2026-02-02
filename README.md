# React JS Mobile PWA – QR Scan POC

## Overview
This repository contains a **Proof of Concept (POC)** demonstrating that a **mobile-compatible application** can be developed using **React JS as a Progressive Web App (PWA)** without native mobile development.

The POC focuses on:
- Mobile-friendly UI
- PWA capabilities
- Camera access for QR code scanning

---

## Objective
To prove that a **React JS web application** can:
- Run smoothly on **mobile devices**
- Be installed like a **mobile app** (PWA)
- Access **device camera** for QR scanning
- Provide a user experience similar to a native mobile app

---

## 🧩 Scope of the POC
This POC intentionally keeps the scope minimal and focused on feasibility.

### Implemented Screens
1. **Welcome Screen**
   - App introduction
   - Entry point for onboarding

2. **Onboarding Screen**
   - Basic guidance for first-time users
   - Mobile-optimized layout

3. **QR Scan Screen**
   - Opens the **device camera**
   - Scans QR codes using browser APIs
   - Demonstrates real-time camera access in a PWA

---

## Key Features
- 📱 **Mobile-first responsive UI**
- 📦 **Progressive Web App (PWA)**
  - Installable on mobile devices
  - Standalone app-like experience
- 📷 **QR Code Scanning**
  - Uses device camera via browser
- ⚡ **React JS-based implementation**
- 🌙 Supports modern UI practices (clean layout, touch-friendly)

---

## Tech Stack
- **React JS**
- **Vite / Create React App** (depending on setup)
- **PWA configuration**
- **Web Camera APIs**
- **CSS / Tailwind CSS** (if applicable)

> ❗ No React Native or native Android/iOS code is used.

---

## How to Run the POC Locally

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Steps
```bash
# Clone the repository
git clone <repo-url>

# Navigate to project directory
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start
