# SovTech Graduate Program
---
## Next JS Web Application 
---
## Objectives
---

### Create a static single page application using React. You can use any modern React framework, such as Next.JS or CRA and It should have a home page that tells us a bit about yourself and why you want to be a developer at SovTech.

---


## Tech stack used

- React JS (Front-end)
- Next JS (Front-end/Back-end)
- Vercel (Deployment)

---

## Main build

- Next JS Build

`"dependencies": {
    "eslint": "8.28.0",
    "eslint-config-next": "13.0.5",
    "next": "13.0.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  `
  
---
## Dependencies

- eslint
- react
- next
- Tailwind css (css dependencies)


`
 {
  "name": "new-proj",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "eslint": "8.28.0",
    "eslint-config-next": "13.0.5",
    "next": "13.0.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.19",
    "tailwindcss": "^3.2.4"
  }
}
`

---



## Frontend / Backend code review

### Frontend features updated

- Added main components to the project
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