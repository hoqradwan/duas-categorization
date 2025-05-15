# Dua Categorization

A full-stack web application for browsing and viewing Duas for different purposes.

[Live Link](http://161.248.200.38:4000/)

---

## Tech Stack

- **Backend:** Node.js (native http server), SQLite3
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Database:** SQLite

---

## Project Setup

### Backend Setup

1. **Requirements:**
   - Node.js v14+
   - SQLite database file
    
2. **Installation:**

```bash
npm install
```
3. **Running the Backend & frontend**

```bash
npm run dev
```

### API Endpoints
 - GET All categories - `/api/categories`
 - GET All subcategories - `/api/sub-categories`
 - GET All subcategories under a category - `/api/sub-categories/${cat_id}`
 - GET All duas - `/api/duas`
 - GET duas by subcategory - `/api/duas/${subcat_id}`
