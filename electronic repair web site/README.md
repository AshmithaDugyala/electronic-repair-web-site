# TechFix Pro - Electronic Device Repair Solution

A modern, responsive web application for professional electronic device repair services. Built with React, TypeScript, and Tailwind CSS v4.

![TechFix Pro](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-blue)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Interactive Components**: 
  - Device category selection
  - Dynamic diagnostic form
  - Mobile-friendly navigation
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 📋 Pages & Sections

1. **Header**: Sticky navigation with mobile menu and quick contact options
2. **Hero Section**: Eye-catching landing with statistics and call-to-action buttons
3. **Repair Process**: Visual 4-step workflow explanation
4. **Device Categories**: Grid of repairable devices with common issues and pricing
5. **Diagnostic Form**: Interactive form for free repair diagnosis requests
6. **Footer**: Contact information and quick links

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: System fonts (optimized for performance)

## 📦 Installation

1. **Clone or create the project**:
   ```bash
   npm create vite@latest repair-app -- --template react-ts
   cd repair-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   npm install lucide-react
   npm install -D tailwindcss @tailwindcss/vite
   ```

3. **Configure Tailwind CSS v4**:
   
   Update `vite.config.ts`:
   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```

   Update `src/index.css`:
   ```css
   @import "tailwindcss";
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**: Navigate to `http://localhost:5173`

## 📁 Project Structure
