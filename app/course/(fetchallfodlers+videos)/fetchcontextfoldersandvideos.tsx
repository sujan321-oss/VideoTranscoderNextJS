"use client"
import React, { useContext, useState } from "react"

import { ServerData } from "../(videofolder)/[id]/useFetchVideoContent"

interface FoldersVideosContextType {
    serverData: ServerData | null
    setServerData: React.Dispatch<React.SetStateAction<ServerData | null>>
}

const foldersVideosContext = React.createContext<FoldersVideosContextType | null>(null)

const FetchFoldersAndVideosContext = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const [serverData, setServerData] = useState<ServerData | null>(null)

    return (
        <foldersVideosContext.Provider value={{ serverData, setServerData }} >
            {children}
        </foldersVideosContext.Provider>
    )
}

export const useFolderVideosContext = () => {
    const data = useContext(foldersVideosContext)
    if (!data) {
        throw Error("only the component wrapped wit hFetchFoldersAndVideosContext can acess it ")
    }
    return data
}

export default FetchFoldersAndVideosContext;

