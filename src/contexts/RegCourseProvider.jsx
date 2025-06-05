import { useState } from 'react'
import {RegCoursesContext} from './RegCoursesContext'


export function RegCoursesProvider({ children }) {
    const [registered, setRegistered] = useState([]);

    const registerCourse = (registrationObj) => {
        if (registered.some(r => r.courseId === registrationObj.courseId)) {
            return;
        }
        setRegistered(prev => [...prev, registrationObj]);
    };

    return(
        <RegCoursesContext.Provider value={{ registered, registerCourse }}>
            {children}
        </RegCoursesContext.Provider>
    )
}