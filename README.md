# Dua Categorization

A full-stack web application for browsing and viewing Duas for different purposes.

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
   - SQLite3 database file
    
2. **Installation:**

```bash
npm install
```
3. **Running the Backend & frontend**

```bash
npm run dev
```

### API Endpoints
 - GET All categories - `http://localhost:2000/api/categories`
 - GET All subcategories - `http://localhost:2000/api/sub-categories`
 - GET All subcategories under a category - `http://localhost:2000/api/sub-categories/${cat_id}`
 - GET All duas - `http://localhost:2000/api/duas`
 - GET duas by subcategory - `http://localhost:2000/api/duas/${subcat_id}`