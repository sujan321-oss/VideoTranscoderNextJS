
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBookmark, faEnvelope, faHouse, faLock, faQuestion, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const element = <FontAwesomeIcon icon={faBars} />


export default function Nav() {
    const [navopen, setNavOpen] = useState<boolean>(true)

    if (navopen) {

    }

    return (

        <>
            <nav id="nav"
                className={` flex-shrink-0 bg-black z-50 absolute sm:relative min-h-screen sm: flex flex-col bg-navbackground ${navopen? "flex":""} `}
            >

                <div
                    className=" flex justify-between   px-5 py-3 "
                >
                    <span className={`${navopen? "block":"hidden"} `}>LOGO</span>
                    <span
                        onClick={() => setNavOpen(!navopen)}
                        className="   px-2 cursor-pointer">
                        {element}
                    </span>
                </div>

                <ul
                    className=" flex flex-col gap-5 px-5 py-3 flex-grow justify-between"
                >

                    <div className="  flex flex-col gap-5  py-5  flex-grow ">
                        <li> <Link
                            href={""}
                            className="  flex gap-4 p-2  rounded-lg border-2 transition-all duration-300 ease-in-out border-transparent  hover:border-gray-200  " >
                            <span > <FontAwesomeIcon icon={faHouse} /> </span>
                            <span className={`${navopen? "block":"hidden"} `}> My Courses </span> </Link>
                        </li>

                        <li>
                            <Link href={""}
                                className=" flex gap-4 p-2  rounded-lg border-2 transition-all duration-300 ease-in-out border-transparent hover:border-gray-200  ">
                                <span> <FontAwesomeIcon icon={faBookmark} /> </span>
                                <span className={`${navopen? "block":"hidden"} `}>Bookmarks</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={""}
                                className=" flex gap-4 p-2  rounded-lg border-2 transition-all duration-300 ease-in-out border-transparent hover:border-gray-200  ">
                                <span> <FontAwesomeIcon icon={faQuestion} />
                                </span>  <span className={`${navopen? "block":"hidden"} `}>Questions</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={""} className=" flex gap-4 p-2  rounded-lg border-2 transition-all duration-300 ease-in-out border-transparent hover:border-gray-200  ">
                                <span> <FontAwesomeIcon icon={faLock} />  </span>
                                <span className={`${navopen? "block":"hidden"} `}>Watch History</span>
                            </Link>
                        </li>
                    </div>


                    <div
                        id="logoutrefresh "
                        className="  flex gap-5 text-red-500 px-2 " >
                        <span> <FontAwesomeIcon icon={faRightFromBracket} />
                        </span>   <span className={`${navopen? "block":"hidden"} `}>LOGOUT</span>
                    </div>


                </ul>

            </nav>

        




            

        </>









    )
}