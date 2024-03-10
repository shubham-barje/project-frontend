import React from 'react';

const AddToPlayListModel = () => {
    return (
        <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center" >
            <div className="bg-app-black w-1/3 rounded-md p-4" onClick={(e) => { e.stopPropagation() }}>
                <div className="text-white mb-5 font-semibold text-lg">
                    Select Playlist
                </div>
                <div className="space-y-4">
                   
                    
                </div>
            </div>

        </div>
    )
}

const PlaylistComponentComponent = ({ info }) => {
    return (
        <div className="bg-black flex bg-opacity-80 w-1/4 p-4 rounded-lg">
            
        </div>

    )
}
export default AddToPlayListModel;