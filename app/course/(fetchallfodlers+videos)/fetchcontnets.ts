"use server"
import { ServerData } from "../(videofolder)/[id]/useFetchVideoContent"
import { Course } from "../coursetype"


export default async function fetchFoldersAndVideos():Promise<null | Course[]> {
      try{
         const contents = await fetch(`http://localhost:8001/getcoursefoldervideo`)
         const data:Course[]  = await contents.json()
          return data  
      }

      catch(e){
        return null
      }

}