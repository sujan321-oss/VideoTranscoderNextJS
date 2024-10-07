


"use client"
interface VideoArray {
    id        : number
    folderid  : number
    videokey  : string
    thumbnail : null | string
}


export interface data {
     id         : string
     folderName : string
     courseid   : number
     video      : VideoArray[] | []
}

export interface ServerData {
      course     : data[]
      allFolders : data[]
}



import { useCallback, useState } from "react"
import fetchFoldersAndVideos from "../../(fetchallfodlers+videos)/fetchcontnets"
import { useFolderVideosContext } from "../../(fetchallfodlers+videos)/fetchcontextfoldersandvideos"



export default function useFetchFoldeAndVideos({id}:{id:number}){

    
    const { setServerData , serverData } = useFolderVideosContext()

     const [loading , setLoading] = useState<boolean>(true)
     const [err,setErr]  =useState<null|string>(null)

    const fetchContents = useCallback(()=>{
          fetchFoldersAndVideos(id)
            .then((data)=>{
                if (data){
                    setServerData(data)
                    setLoading(false)
                }
            })
            .catch((err)=>setErr(err))
     },[])

     return { loading ,serverData, err ,fetchContents}
}



// now try to get the data from the context api 







