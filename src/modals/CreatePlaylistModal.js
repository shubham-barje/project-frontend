import Textinput from "../components/shared/Textinput";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal = ({ show, handleClose, closeModal }) => {
    const [playlistName, setPlaylistName] = useState("")
    const [plalistThumbnail, setPlalistThumbnail] = useState("")
    console.log(playlistName)
    console.log(plalistThumbnail)

    const createPlaylist = async ()=>{
        const response = await makeAuthenticatedPOSTRequest("/playlist/create",{
            name:playlistName,
            thumbnail:plalistThumbnail,
            songs:[]
            

        }
        );
        console.log(response)
        if(response._id){
            closeModal()
        }
        
        console.log(response._id)
    }
    return (
        <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
            <div className="bg-app-black w-1/3 rounded-md p-4" onClick={(e) => { e.stopPropagation() }}>
                <div className="text-white mb-5 font-semibold text-lg">
                    Create Playlist
                </div>
                <div className="space-y-4">
                    <Textinput
                        label="Playlist Name"
                        labelClassName={"text-white"}
                        placeholder="Enter Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />

                    <Textinput
                        label="Thumbnail"
                        labelClassName={"text-white"}
                        placeholder="Thumbnail"
                        value={plalistThumbnail}
                        setValue={setPlalistThumbnail}
                    />
                    <div className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 cursor-pointer" onClick={createPlaylist}>Create</div>
                </div>
            </div>
            
        </div>
    )
}
export default CreatePlaylistModal;