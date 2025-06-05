import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import News from './pages/News'
import Register from './pages/Register'
import Layout from './components/Layout'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='courses' element={<Courses />}/>
        <Route path='courses/:id' element={<CourseDetails/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
