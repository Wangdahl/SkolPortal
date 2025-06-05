# StudentPortal

A simple React-based portal for students to view courses, read news, and register for classes. This project uses React Router for navigation, React-Bootstrap for styling, and Material UI for the registration form.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Installation & Setup](#installation--setup)  
5. [Project Structure](#project-structure)  
6. [Usage](#usage)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Features

- **Home Page**: Landing page with links to Courses and News.  
- **Courses Listing**: Displays courses in a responsive grid with pagination.  
- **Course Details**: View detailed information for each course, with “Previous” and “Next” navigation.  
- **News Listing**: Searchable, paginated list of news excerpts.  
- **News Article**: Full‐article view with a random placeholder image and “Previous”/“Next” navigation.  
- **Registration Form**: Material UI form to register for a course; stores name, email, and selected course.  
- **My Courses**: Displays courses the user has registered for, along with their name/email.  
- **Context API**: Shared state for registrations across the app.  
- **Responsive Design**: Mobile‐first layouts using Bootstrap grid.

---

## Tech Stack

- **React** (via Vite)  
- **React Router v6**  
- **React-Bootstrap** and Bootstrap 5  
- **Material UI** (for the registration form)  
- **Context API** (for registration state)  
- **JavaScript (ES6+)**  
- **JSON** (hardcoded data for courses and news)

---

## Prerequisites

- **Node.js** (v14 or later)  
- **npm** or **yarn**  
- A modern browser (Chrome, Firefox, Edge, Safari)

---

## Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/student-portal.git
   cd student-portal


2. **Install dependencies**  
    npm install
    # or
    yarn install

3. **Run the development server**  
    npm run dev
    # or
    yarn dev

---

## Project Structure
student-portal/
├── public/                
├── src/
│   ├── assets/
│   │   ├── courses.json   
│   │   └── news.json      
│   ├── components/
│   │   ├── Layout.jsx     
│   │   └── SearchBar.jsx  
│   │              
│   ├── contexts/
│   │   ├── RegCoursesContext.js      
│   │   └── RegCourseProvider.jsx    
│   ├── pages/
│   │   ├── Home.jsx        
│   │   ├── Courses.jsx     
│   │   ├── CourseDetails.jsx 
│   │   ├── News.jsx        
│   │   ├── NewsArticle.jsx 
│   │   ├── Register.jsx    
│   │   └── MyCourses.jsx   
│   ├── App.jsx             
│   ├── main.jsx            
│   └── index.css          
├── package.json
└── README.md               

---

## Usage
    On the home page, click “View Courses” to browse all courses (presented in a paginated grid), or “Read News” to see announcements. In the course list, each “Read more” link opens a detailed view showing instructor, credits, duration, and an option to register (which preselects that course if you arrived from here). The news page lets you filter headlines with a search bar and navigate pages; clicking “Read more” opens the full article (with a random image) and “Previous/Next” buttons to move between posts. Register by entering your name, email, and selecting a course—upon success, a confirmation dialog appears and your registration is saved. Finally, the “My Courses” page displays every course you’ve signed up for (including your name and email) and links back to each course’s details; if you haven’t registered yet, it prompts you to browse courses.

---
## License

    This project is licensed under the MIT License. Feel free to use and modify.