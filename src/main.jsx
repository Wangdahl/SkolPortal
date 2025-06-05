import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'                          // Global styles
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap styles
import App from './App.jsx'
import { RegCoursesProvider } from './contexts/RegCourseProvider.jsx' // Registration context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RegCoursesProvider>
        <App />
      </RegCoursesProvider>
    </BrowserRouter>
  </StrictMode>,
)
