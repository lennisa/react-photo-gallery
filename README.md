# React Photo Gallery

A responsive photo gallery web application built using **React, Vite, and Tailwind CSS**.
The app fetches images from the Picsum Photos API, displays them in a responsive grid, allows searching by author name, and lets users mark photos as favourites.

---

## Features

* Fetch photos from the **Picsum Photos API**
* Responsive photo grid
* Real-time search filter by author name
* Toggle favourites using **useReducer**
* Favourite photos persist across page refresh using **localStorage**
* Loading and error states for API requests
* Optimized rendering using **useMemo** and **useCallback**

---

## Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* React Hooks:

  * `useState`
  * `useEffect`
  * `useReducer`
  * `useMemo`
  * `useCallback`

---

## API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

This API provides the photo data including image URLs and author names.

---

## Project Structure

```
src
 ├ components
 │   └ Gallery.jsx
 ├ hooks
 │   └ useFetchPhotos.js
 ├ reducer
 │   └ favouritesReducer.js
 ├ App.jsx
 └ main.jsx
```

---

## How It Works

### 1. Fetching Photos

Photos are fetched using a custom hook called `useFetchPhotos`.
The hook manages loading, error handling, and photo data.

### 2. Search Filter

The search input filters photos in real-time based on the author name.
Filtering is performed locally on the already fetched data.

### 3. Favourites

Users can mark photos as favourites using the heart icon.
Favourite state is managed with `useReducer`.

### 4. Persistence

Favourite photo IDs are stored in **localStorage**, allowing them to persist after page refresh.

### 5. Performance Optimization

* `useCallback` is used to memoize the search handler.
* `useMemo` is used to compute filtered photo results efficiently.

---

## Running the Project

Clone the repository:

```
git clone <repo-link>
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the app in your browser:

```
http://localhost:5173
```

---
