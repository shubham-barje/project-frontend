import logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText"
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import Textinput from "../components/shared/Textinput";
import CloudinaryUpload from "../components/shared/CloudinaryUplaod";
import { useEffect, useState } from "react";
import { colorSpace } from "@cloudinary/url-gen/actions/delivery";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { Howl, Howler } from "howler";
import LoggedInContainer from "../containers/LoggedInContainer";

const songData=[
    {
        thumbnail:"",
        name:"Curtains",
        artist:"Ed Sheeran",
    }
]
const MyMusic = () => {
    
    const[songData,setSongData] = useState([])
    const[soundPlayed,setSoundPlayed] = useState(null)

    const playSound = (songSrc) =>{
        if(soundPlayed){
            soundPlayed.stop()
        }
        let sound = new Howl({
            src:[songSrc],
            html5:true,
        })
        setSoundPlayed(sound);
        sound.play()
        console.log(sound)
    }

    useEffect(()=>{
        const getData = async()=>{
            const response = await makeAuthenticatedGETRequest("/song/get/mysongs")
            setSongData(response.data)
            console.log(response)
            console.log(response.data)
        }
        getData()

    },[])

    return (
        <LoggedInContainer currentActiveScreen={"myMusic"}>
            <div className="text-white text-2xl font-semibold pb-4 pl-2">My Songs</div>
            <div className="space-y-3 overflow-auto">
                {songData.map((item) => {
                    return <SingleSongCard key={item.id} info={item} playSound={playSound} />
                })}
            </div>
        </LoggedInContainer>
    )

}

// const songData=[
//     {
//         thumbnail:"",
//         name:"Curtains",
//         artist:"Ed Sheeran",
//     }
// ]
// const MyMusic = () => {
//     const[songData,setSongData] = useState([])
//     const[soundPlayed,setSoundPlayed] = useState(null)

//     const playSound = (songSrc) =>{
//         if(soundPlayed){
//             soundPlayed.stop()
//         }
//         let sound = new Howl({
//             src:[songSrc],
//             html5:true,
//         })
//         setSoundPlayed(sound);
//         sound.play()
//         console.log(sound)
//     }

//     useEffect(()=>{
//         const getData = async()=>{
//             const response = await makeAuthenticatedGETRequest("/song/get/mysongs")
//             setSongData(response.data)
//             console.log(response.data)
//         }
//         getData()

//     },[])

//     return (
//         <div className="h-full w-full flex">
//             {/* This first div will be the left pannel */}
//             <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-6">
//                 <div>
//                     {/* div for logo */}
//                     <div className="logoDiv p-4 mt-3">
//                         <img src={logo} alt="logo" width={125} />
//                     </div>
//                     <div>
//                         <IconText
//                             iconName={"material-symbols:home"}
//                             displayText={"Home"}

//                         />

//                         <IconText
//                             iconName={"ic:sharp-search"}
//                             displayText={"Search"}
//                         />

//                         <IconText
//                             iconName={"icomoon-free:books"}
//                             displayText={"Library"}
//                         />

//                         <IconText
//                             iconName={"entypo:music"}
//                             displayText={"My Music"}
//                             active
//                         />
//                     </div>

//                     <div className="pt-6">
//                         <IconText
//                             iconName={"icon-park-solid:add"}
//                             displayText={"Create Playlist"}
//                         />
//                         <IconText
//                             iconName={"mdi:heart-box"}
//                             displayText={"Liked Songs"}
//                         />
//                     </div>



//                 </div>
//                 <div className="px-5">
//                     <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                         <Icon icon="carbon:earth-europe-africa" />
//                         <div className="ml-2 text-sm font-semibold">
//                             English
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* This second div will be the right part (main conent) */}
//             <div className="h-full w-4/5 bg-app-black overflow-auto">
//                 <div className="navbar h-1/10 w-full bg-black bg-opacity-30 flex items-center justify-end">
//                     <div className="w-1/2 flex h-full">
//                         <div className="w-3/5 flex justify-around items-center">
//                             <TextWithHover displayText={"Primium"} />
//                             <TextWithHover displayText={"Support"} />
//                             <TextWithHover displayText={"Download"} />
//                             <div className="h-1/2 border border-white"></div>
//                         </div>

//                         <div className="w-2/5 flex justify-around h-full items-center">
//                             <TextWithHover displayText={"Upload Song"} />
//                             <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">SB</div>
//                         </div>

//                     </div>


//                 </div>
//                 {/* beacuse of overflow auto we see scroll data which is Spotify Playlist and Sound Of India .The overflow-auto is if my text is goes for scroll in website then put scrollbar and apply desird css*/}
//                 <div className="content p-8 pt-1 overflow-auto">
//                     <div className="text-white text-2xl font-semibold pb-4 pl-2">My Songs</div>
//                     <div className="space-y-3 overflow-auto">
//                        {songData.map((item)=>{
//                             return <SingleSongCard info={item} playSound={playSound}/>
//                        })}
//                     </div>

//                 </div>


//             </div>
//         </div>
//     )
// };


export default MyMusic;