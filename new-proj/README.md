# RadicalX-Apprenticeship Web Application
---
## Apprenticeship flow
---
## Objectives
---

### The company must be able to set up an apprenticeship program on RadicalX and successfully hire a team on contractual basis.

---


## Tech stack used

- React JS (Front-end)
- Node JS (Backend)
- Postman API (Testing of API's)

---

## Main build

- Vite build

`"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },`
  
---
## Dependencies

- axios
- babel
- bootstrap
- flowbite
- react
- SVG image components
- Tailwind css (css dependencies)


`
 "dependencies": {
    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@fortawesome/fontawesome-svg-core": "^6.2.0",
    "@fortawesome/free-regular-svg-icons": "^6.2.0",
    "@fortawesome/free-solid-svg-icons": "^6.2.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@material-tailwind/react": "^1.2.4",
    "@mui/material": "^5.10.8",
    "@mui/x-date-pickers-pro": "^5.0.4",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "alpinejs": "^3.10.4",
    "axios": "^1.1.2",
    "babel-plugin-macros": "^3.1.0",
    "bootstrap": "^5.2.2",
    "boxicons": "^2.1.4",
    "dayjs": "^1.11.5",
    "flowbite": "^1.5.3",
    "flowbite-react": "^0.1.11",
    "font-awesome": "^4.7.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.5.0",
    "react-date-range": "^1.4.0",
    "react-dom": "^18.2.0",
    "react-icon": "^1.0.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.4.2"
  },
`

---



## Frontend / Backend code review

### Frontend features updated

- Updated menu bar
- Updated form
- updated timeline
- Adding tailwind css to dependencies
- Finished select role box
- Added workflow
- Fixed icons

### Backend features updated

- Added 4 API requests  
- Added views to the database
- Added new branches for endpoints
- Token is generated
- Generate JWT token
- All 4 requests were tested on Postman API
- team types and team roles controller and router were created

### Frontend and Backend connectivity

- Authentication login page

---
## List all the features of the project

---

### Main form components

- Apprenticeship Title
- Company Description
- Apprenticeship Description
- Introduction
- Team Types
- Team Roles
- Team Admin
- Timeline

---


`
function Form() {
  return (
    
        <div className='bottom'>
            <ApprenticeshipTitle />
            <CompanyDescription />
            <ApprenticeshipDescription />
            <Introduction />
            <TeamType />
            <TeamRoles />
            <TeamAdmin />
            <Timeline />
        </div>  
  )
`

---

### Side bar components

- Dashboard
- Apprenticeship
- Internship
- Jobs
- Settings

---