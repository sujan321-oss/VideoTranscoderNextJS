
import Link from "next/link";
import fetchcourse from "./(fetchcourse)/fetchcourse";


export default async  function CoursesPageComponent() {

    const courseData = await fetchcourse()

  return (
    <>
      <h1 className="flex justify-center p-2 text-lg font-bold overflow-hidden ">My Courses</h1>

      <div className="flex px-4 w-full  gap-x-2 flex-wrap justify-center h-[95vh] ml-10 sm:ml-5 overflow-scroll">
        {Array.isArray(courseData) && courseData.length > 0 ? (
          courseData.map((data) => (
            <div key={data.id} className="h-[300px] w-[80%] md:w-[300px] mt-2 sm:ml-0 lg:w-[300px] object-cover mx-auto rounded-3xl bg-slate-900">
              <img src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" className="rounded-lg object-cover" alt="Image" />
              <div className="">
                <h1 className="text-lg text-start ml-2 font-bold mt-2">{data.coursename}</h1>
                <span className="flex justify-center items-center mt-2">
                  <input type="range" value={20} disabled className="w-[80%]" />
                </span>
                <span className="flex justify-center mt-2">
                  <Link href={`/course/${data.id}`}>
                    <button className="px-20 py-1 rounded-3xl bg-blue-500">View Content</button>
                  </Link>
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>No items available</div>
        )}
      </div>

    </>

  );

}