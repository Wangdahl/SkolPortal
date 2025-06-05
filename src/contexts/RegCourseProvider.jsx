import { useState } from 'react'
import {RegCoursesContext} from './RegCoursesContext'


export function RegCoursesProvider({ children }) {
    const [registered, setRegistered] = useState([]);

    const registerCourse = (course) => {
        setRegistered(prev => [...prev, course]);
    };

    return(
        <RegCoursesContext.Provider value={{ registered, registerCourse }}>
            {children}
        </RegCoursesContext.Provider>
    )
}