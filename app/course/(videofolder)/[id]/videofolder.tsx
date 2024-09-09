"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFolder, faV, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Folder } from '@mui/icons-material';
import VideoSideBar from './sidebar';
import { useState } from 'react';
import { redirect } from 'next/dist/server/api-utils';


//  there is the issue of a prop drilling solve it 


// it contain the information related to the timing 
export default function VideoTiming() {
  const [videosidebar, setVideoSideBar] = useState<boolean>(false)
  
  // first fetch all the weeks and show based on id 
  // then fetch all the course inside  all the week {week0:[],week1:[],week3:[]}
  //  data should be look like that from the server side 
  // best on the click also fetch the video url from  database and show the video

  // after fetching data our data should look like that 
  const weekcontent = [
    {
      id:0,
      week0: [
        { title: "async function", videoid: 2 },
        { title: "Promises in javascript", videoid: 2 }
      ]

    },
  
    {
      id:1,
      week1: [
        { title: "async function", videoid: 2 },
        { title: "Promises in javascript", videoid: 2 }
      ]
    },
    {
      id:2,
      DSA: [
        { title: "Array in C++", videoid: 3 },
        { title: "graph and tree in C++", videoid: 4 }
      ]
    }
  ];

  


  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>

      <div className='flex  items-center justify-between ml-20 '>
        <h1 className="flex justify-center p-2 text-lg font-bold overflow-hidden">CourseName</h1>
        <h1 onClick={() => setVideoSideBar(true)} className='flex gap-2 border-2 px-2 py-1 rounded-2xl font-bold md:mr-10'> <span  ><FontAwesomeIcon className='' icon={faFolder} /></span>  <span> Show Content</span></h1>

      </div>



      <div className="flex  px-4 w-full gap-x-2 flex-wrap justify-center ml-10 sm:ml-5 h-[95vh] overflow-scroll  ">

        {

         weekcontent.map((data) => (
            <div className="h-[300px] w-[80%] md:w-[300px]  mt-2 sm:ml-0  lg:w-[300px]   object-cover  rounded-3xl  bg-slate-900 mx-auto" key={data.id}>
              <img src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" className="rounded-lg object-cover" />

              <div className="  ">
                <h1 className="text-lg text-start ml-2 font-bold mt-2"> {Object.keys(data).filter((key)=>key!="id")}</h1>
                <span className="flex justify-center items-center  mt-2">  <input type="range" value={20} disabled className="w-[80%]" /> </span>
                <span className=" flex justify-center mt-2 ">  <button className="  px-20 py-1 rounded-3xl bg-blue-500"  >View Content</button> </span>
              </div>

            </div>
          ))
        }
      </div>

      {videosidebar && <VideoSideBar item={weekcontent} setSideBar={setVideoSideBar} />}










    </>
  )
}


