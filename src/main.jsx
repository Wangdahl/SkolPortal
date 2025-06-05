import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { RegCoursesProvider } from './contexts/RegCourseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RegCoursesProvider>
        <App />
      </RegCoursesProvider>
    </BrowserRouter>
  </StrictMode>,
)
