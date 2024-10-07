
import FetchFoldersAndVideosContext from "../../(fetchallfodlers+videos)/fetchcontextfoldersandvideos";
import VideoTiming from "./videofolder";

export default function VideoContains(){

    return (
        <>
        <FetchFoldersAndVideosContext>
            
          <VideoTiming/>

          </FetchFoldersAndVideosContext>

          </>
        
    )
}