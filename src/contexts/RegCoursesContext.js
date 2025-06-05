import { createContext } from 'react'

export const RegCoursesContext = createContext({
    registered: [],
    registerCourse: () => {}
});
