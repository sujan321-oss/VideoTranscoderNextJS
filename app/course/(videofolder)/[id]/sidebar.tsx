
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faV, faXmark } from '@fortawesome/free-solid-svg-icons'
import ArrowDropDown from './dropdown'
import { useState } from 'react'

// chnage it to the appropirate array  type

export default function VideoSideBar({ item, setSideBar }: { item: Object[], setSideBar: Function }) {
    // put id on it 
    const [showdropdown,SetShowDropDown] = useState<number | null >(null)

    return (
        <>
            <div className=' w-[100%] z-50  md:w-auto absolute flex flex-col h-[100%] overflow-scroll top-0 right-0 bg-slate-900 px-10 gap-10'>
                <div className='flex gap-5 mt-2 border-b-2 pb-2 justify-between' > <span>Course Content</span> <span onClick={() => setSideBar(false)}> <FontAwesomeIcon icon={faXmark} /> </span> </div>

                <div className=' w-[100%] z-50  md:w-auto  flex flex-col h-[100%] overflow-scroll  bg-slate-900 px-2 gap-5'>


                    {
                        item.map((data) => (
                            <div className='flex justify-between p-2 gap-4 '>

                                <span className=' text-lg'>week this is the  fdfdf  {Object.keys(data)}</span>

                                <span onClick={() => {
                                    //  SetShowDropDown(data.id)
                                }} >
                                    <FontAwesomeIcon icon={faV} />
                                </span>

                            </div>
                        ))
                    }
                </div>

            </div>

        </>

    )

}