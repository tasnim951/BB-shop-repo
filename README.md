# Blush Bazaar

A simple makeup, skincare, and fashion products web app built with **Next.js**.  
Features include product listing, detailed product views, adding new products (UI only), and managing products (UI only).  
Authentication is handled with **Firebase**, and data is currently static (JSON file).

---

## Features

- **Product List Page** – with search and category filters  
- **Product Details Page** – showing full product information  
- **Add Product Page** – protected, UI only with form and toast on submission  
- **Manage Products Page** – protected, UI only with product listing and actions  
- **Firebase Authentication** for user login  
- **Responsive and pink-themed UI** with Tailwind CSS  
- **Static JSON data** for products (no backend required)

---

## Tech Stack

- **Next.js** (App Router)  
- **React**  
- **Tailwind CSS**  
- **Firebase Authentication**  
- **Static JSON data** for products  

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/tasnim951/blush-bazaar.git
cd blush-bazaar
```

## 2.Install dependencies

```bash
npm install
or
yarn install
```

### 3.Run the development server
```bash

npm run dev
 or
yarn dev
```

### 4.Open in browser

Navigate to http://localhost:3001

Project Structure
/app                  - Next.js app directory with pages and components
/public/products.json - Static JSON file holding product data
/lib/firebaseConfig.js - Firebase initialization and config
/components           - Shared components (optional)

Notes
---
1. The product data is currently static and stored in a JSON file. No backend API is connected.

2. The Add Product and Manage Products pages are protected via Firebase authentication but do not persist data.

3. Images are fetched from external URLs — make sure to update next.config.js to allow these domains.