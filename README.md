# EDORA
Frontend-only prototype (HTML, CSS, vanilla JS). Data lives in `js/mock-data.js`; changes persist in localStorage.

## Run
Open `login.html` in a browser, or serve the folder: `python3 -m http.server 8000` then visit http://localhost:8000/login.html

Log in with any valid email and a password of 6+ characters (prefilled), or register.

## Structure
- `login.html` login and registration
- `index.html` app shell; pages are routed by URL hash in `js/app.js`
- `css/style.css` design system and responsive layout
- `js/mock-data.js` mock data and saved state
- `js/app.js` all pages, filters, modals, forms, planner, AI simulation

Reset the demo by clearing the `edora` key in localStorage.
