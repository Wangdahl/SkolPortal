import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Register from './pages/Register'
import Layout from './components/Layout'
import MyCourses from './pages/MyCourses'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='courses' element={<Courses />}/>
        <Route path='courses/:id' element={<CourseDetails/>}/>
        <Route path='news' element={<News/>}/>
        <Route path="news/:id" element={<NewsArticle />} />
        <Route path='register' element={<Register/>}/>
        <Route path='my-courses' element={<MyCourses/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
