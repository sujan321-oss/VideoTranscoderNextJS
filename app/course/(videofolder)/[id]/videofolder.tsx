"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFolder } from '@fortawesome/free-solid-svg-icons'
import VideoSideBar from './sidebar';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import useFetchFoldeAndVideos  from './useFetchVideoContent';
import { useCourseContext } from '../../(coursecontext)/coursecontext';
import fetchcourse from '../../(fetchcourse)/fetchcourse';
import FetchFoldersAndVideosContext from '../../(fetchallfodlers+videos)/fetchcontextfoldersandvideos';
import fetchFoldersAndVideos from '../../(fetchallfodlers+videos)/fetchcontnets';
import { Course } from '../../coursetype';

// import  { useFolderVideosContext } from '../../(fetchallfodlers+videos)/fetchcontextfoldersandvideos';


export default  function VideoTiming() {
   const {id} = useParams()

   const [videosidebar, setVideoSideBar] = useState<boolean>(false)
   console.log("video sidebar is " , videosidebar)
  //  const { loading , serverData  , err, fetchContents } = useFetchFoldeAndVideos({id:Number(id)})

   const { courseData , setCourseData  } = useCourseContext()
     
     console.log("outside the useffect")
    
    useEffect(()=>{
      fetchFoldersAndVideos()
        .then((data)=> {
            console.log("it runs")
             setCourseData(data)
        })

        console.log("Inside the use effect")  



    },[])

     let course:Course|undefined
     
     
    if (courseData){
      // console.log(courseData)
      
      try{
        course = courseData.find((course)=>course.id== Number(id))
      }
       catch(e){
        return <h1>Error occured</h1>
        
       }
 
   }

     else{

         return <h1>loading....</h1>
      }
      
 
  // it is setting up in the context 


  // if (loading) return  <div className='min-h-screen flex justify-center items-center'><Box >  <CircularProgress></CircularProgress> </Box></div> 
  // if (loading)  return <h1 className=' text-lg text-center block'> Loading...</h1>
  // if (err) return <h1> Error occured </h1>
  // if (!serverData) <h1> Data doesnt exist with that id </h1>


  return (
 
    <>
      <div className='flex  items-center justify-between ml-20 '>
        <h1 className="flex justify-center p-2 text-lg font-bold overflow-hidden">CourseName</h1>
        <h1 onClick={() => setVideoSideBar(true)} className='flex gap-2 border-2 px-2 py-1 rounded-2xl font-bold md:mr-10'> <span  ><FontAwesomeIcon className='' icon={faFolder} /></span>  <span> Show Content</span></h1>

      </div>

      <div className="flex  px-4 w-full gap-x-2 flex-wrap justify-center ml-10 sm:ml-5 h-[95vh] overflow-scroll  ">
    

        {
           course?.folders &&  course?.folders.map((data) => (
            <div className="h-[300px] w-[80%] md:w-[300px]  mt-2 sm:ml-0  lg:w-[300px]   object-cover  rounded-3xl  bg-slate-900 mx-auto" key={data.id}>
              <img src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" className="rounded-lg object-cover" />
              <div className="  ">
                <h1 className="text-lg text-start ml-2 font-bold mt-2"> {data.folderName}</h1>
                <span className="flex justify-center items-center  mt-2">  <input type="range" value={20} disabled className="w-[80%]" /> </span>
                <span className=" flex justify-center mt-2 ">  <button className="  px-20 py-1 rounded-3xl bg-blue-500"  >View Content</button> </span>
              </div>

            </div>
          ))
        }
      </div>


      {/* this is the side bar before removeing keep in mind  */}
      {videosidebar && course && <VideoSideBar  setSideBar={setVideoSideBar} />}

    </>
  
  )
}


