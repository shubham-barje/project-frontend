import LoggedInContainer from "../containers/LoggedInContainer";
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
const Library = () => {
    const [myPlaylist, setMyPlaylist] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me")
            
            setMyPlaylist(response.data)
            console.log(response.data)
        }
        getData()
    }, [])

    return (
        <LoggedInContainer currentActiveScreen={"library"}>
            <div className="text-white text-xl pt-8">My playlist</div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {myPlaylist.map((item) => {
                    return <Card key={JSON.stringify(item)} title={item.name} description={item.songs.length + " songs"} imgUrl={item.thumbnail} />
                })}
            </div>

        </LoggedInContainer>
    )
}

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-80 w-1/4 p-4 rounded-lg">
            <div className="py-4">
                <img className="w-full rounded-md"
                    src={imgUrl}
                    alt="label" />
            </div>
            <div className="text-white text-sm font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>

    )
}
export default Library;