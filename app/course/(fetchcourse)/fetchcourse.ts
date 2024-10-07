
import { Course } from "../coursetype";

export default async function fetchcourse(): Promise<Course[] | null> {
    try {
        console.log("try to get the data")
        const response = await fetch("http://localhost:8001/course",{ next: { revalidate: 60 } })
        

        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
            return null
        }
        const data: Course[] = await response.json()
        console.log(data)
        return data
    }

    catch (err) {
        return null
    }

}


