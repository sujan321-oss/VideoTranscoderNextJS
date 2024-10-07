
"use client"
import React, { useContext, useState } from "react"

import { Course } from "../coursetype"

interface CourseContext {
    courseData: Course[] | null
    setCourseData: React.Dispatch<React.SetStateAction<Course[] | null>>
}

const CourseContext = React.createContext<CourseContext | null>(null)

const CourseProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const [courseData, setCourseData] = useState<Course[] | null>(null)

    return (
        <CourseContext.Provider value={{ courseData, setCourseData }} >
            {children}
        </CourseContext.Provider>
    )
}


export const useCourseContext = () => {
    const data = useContext(CourseContext)
    if (!data) {
        throw Error("only the component wrapped wit hFetchFoldersAndVideosContext can acess it ")
    }
    return data
}

export default CourseProvider;

