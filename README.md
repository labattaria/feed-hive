**Read in another language: [Українська](README.ukr.md), [English](README.md).**

# PostWave App

---

[![PostWave](https://i.gyazo.com/7588c2966a3f623a611d171283863659.gif)](https://gyazo.com/7588c2966a3f623a611d171283863659)

---

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](#)
[![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

This is the PostWave Next.js, React, TypeScript app

PostWave is a modern Next.js demo application that brings people together to share anything they love — from ideas and stories to photos and creations. Post your thoughts, discover inspiring content from others, and show your appreciation with a like. A friendly space to connect, express, and be inspired.

The app in this repo is hosted on [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#), hosting public URL: [https://postwave-next.vercel.app/](https://postwave-next.vercel.app/)

But you can use this app manually on your local machine

## Used dependencies:

- **Next.js** - React framework for building fast, full-stack web applications with server-side rendering and static site generation
- **React** - Library used for building user interfaces, particularly for single-page applications where you need a fast, interactive experience
- **Prisma** – A modern ORM that streamlines database access by providing a type-safe, auto-generated query builder and intuitive API for working with relational databases efficiently and reliably
- **Cloudinary** - Image and video storage, optimization, and delivery service

The full list of dependencies can be found in the **package.json** file.

---

## Next.js Features Used:

- **Server Components** - Enable rendering parts of the UI on the server with full access to backend resources, improving performance and security
- **App Router** - File-based routing with support for layouts, nested routes, loading/error states, and route-specific metadata
- **Server-Side Rendering (SSR)** - Render pages on each request, great for dynamic content and SEO
- **Static Site Generation (SSG)** - Pre-render pages at build time for fast performance and easy CDN caching
- **Client Components** - Standard React components rendered in the browser; useful for interactive UI
- **Metadata and SEO** - Add page-level metadata (static or dynamic) for SEO and social media previews
- **revalidatePath** - Enables on-demand cache invalidation for specific routes or paths, ensuring users see updated content without rebuilding the entire app
- **Server Actions** - Allow you to run server-side logic (like form handling, database updates, or API calls) directly from client components without needing a separate API route
- **useFormState** - Manages and updates form state when using server actions, enabling cleaner and more reactive UI handling
- **useFormStatus** - Provides the current status of a form submission (e.g., pending), useful for disabling buttons or showing loading indicators
- **redirect** - Utility to programmatically redirect users to different routes, commonly used after form submissions or for access control

---

## React Features Used:

- **Components** - Building blocks of React applications, reusable and encapsulated UI pieces
- **Props** - Mechanism to pass data and event handlers from parent to child components
- **Rendering Lists** - Dynamically displaying multiple elements by iterating over arrays
- **Conditional Rendering** - Displaying different UI elements based on application state, props or conditions
- **useOptimistic** - A React Hook for optimistically updating the UI before receiving a server response, making the app feel faster and more responsive

---

## Contents

- [Installation](#installation)
- [Usage](#usage)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/labattaria/postwave-next.git
```

2. Install project dependencies:

```shell
cd postwave-next
npm install
```

### Usage

Start the next-dev-server using the following command:

```shell
npm run dev
```

Server will be located at **http://localhost:3000/**
