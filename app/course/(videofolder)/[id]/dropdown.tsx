

// {week1:[] , week2:[] , week3 : []}

import  { useCourseContext } from "../../(coursecontext)/coursecontext"


export default function ArrowDropDown({courseid}:{courseid:number}){

    const {courseData} = useCourseContext()
      let course
      if (courseData){

         course =  courseData.find((course)=>course.id==courseid)
      }
      else{
         return <h1>data not found</h1>
      }

        return (
            <>
             <div>
                 {
                    course &&
                    course.folders.map((folder)=>(
                        <div key={folder.id}> {folder.id} </div>
                      ))
                 }
             </div>
              

            </>
        )
   
}