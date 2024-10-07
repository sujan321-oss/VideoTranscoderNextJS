
interface VideoArray {
    id        : number
    folderid  : number
    videokey  : string
    thumbnail : null | string
}
export interface Folder {
     id         : number
     folderName : string
     courseid   : number
     video      : VideoArray[] | []
}

export interface ServerData {
      course     : Folder[]
      allFolders : Folder[]
}

export interface Course{
        id  :  number
        coursename : string
        thumbnails : string | null
        folders : Folder[]
}

