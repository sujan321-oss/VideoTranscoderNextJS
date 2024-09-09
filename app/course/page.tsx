import Link from "next/link";

export default function CoursesPageComponent(){
     const item = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
        <h1 className="flex justify-center p-2 text-lg font-bold overflow-hidden ">My Courses</h1>
        <div className="flex  px-4 w-full gap-x-2 flex-wrap justify-center h-[95vh] ml-10 sm:ml-5 overflow-scroll">
        
          {
            item.map((data)=>(
                <div key={data} className="h-[300px] w-[80%] md:w-[300px]  mt-2 sm:ml-0  lg:w-[300px]   object-cover mx-auto rounded-3xl  bg-slate-900"> 
          
                      
                      <img src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" className=" rounded-lg object-cover"  alt="Image"/>

                      <div className="">
                        <h1 className="text-lg text-start ml-2 font-bold mt-2">Ad HOC Classes</h1>
                       <span className="flex justify-center items-center  mt-2">  <input type="range" value={20} disabled className="w-[80%]" /> </span>
                       <span className=" flex justify-center mt-2 ">  <Link href={"/course/"+data}><button className="  px-20 py-1 rounded-3xl bg-blue-500">View Content</button></Link>  </span>

                        </div>
                      
                 </div>
            ))
          }
        </div>

          
        </>
         
    );
          
}