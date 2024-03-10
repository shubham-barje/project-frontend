// in this file we save the basic structure of our website likw navbar,left side bar which requried in all pages and we remove right space and do configurations according to need of page(right side)

//music play section at bottom
import logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText"
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import { useContext } from "react";
// import LoggedInContainer from "../containers/LoggedInContainer";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlayListModel from "../modals/AddToPlaylistModal";


const LoggedInContainer = ({ children, currentActiveScreen }) => {
    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false)
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false)

    // const [soundPlayed, setSoundPlayed] = useState(null)
    // default music is off so its true
    // const [isPaused, setIsPaused] = useState(true)

    //this useContext is used to get the currentSong and setCurrentSong from songContext.Provider also it render once when we change the currentSong
    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused
    } = useContext(songContext);

    //useEffect activates when currentSong is changed also useeffect is resonsible for playing the music    
    //useEffect is used to reredner the component otherwise som changes that will happen in dependency it will use so we not use useEffect because when we move from one page to other the song is rerendering or say start from begining so at background 2 songs are playing (renderring)
    //so insted of this we use useLayoutEffect which is used to render the component before the useeffect so it will not rerender the component and the song will not start from begining

    const firstUpdate = useRef(true);
    //when we call firstUpdate means our first update is going to be true according to useRef(true) and this is its initial value
    useLayoutEffect(() => {
        // the following if statement will prevent the useEffect from running on the first render
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track)
    }, [currentSong && currentSong.track])

    // useEffect(() => {
    //     // the following if statement will prevent the useEffect from running on the first render
    //     if(){

    //     }
    //     if(!currentSong){
    //         return;
    //     }
    //     changeSong(currentSong.track)
    // },[currentSong])

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    }
    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop()
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        })
        setSoundPlayed(sound);
        sound.play()
        setIsPaused(false);
        console.log(sound)
    }

    // pause function is used to pause the music
    const pauseSound = () => {
        soundPlayed.pause()
    }


    const togglePlayPause = () => {
        if (isPaused) {
            playSound(currentSong.track)
            // music is on so false
            setIsPaused(false)

        } else {
            pauseSound()
            setIsPaused(true)
        }

    }

    return (
        <div className="h-full w-full  bg-app-black">

            {createPlaylistModalOpen && <CreatePlaylistModal closeModal={() => { setCreatePlaylistModalOpen(false) }} />}

            {addToPlaylistModalOpen && <AddToPlayListModel closeModal={() => { setAddToPlaylistModalOpen(false) }} />}

            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`} >
                {/* This first div will be the left pannel */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-6">
                    <div>
                        {/* div for logo */}
                        <div className="logoDiv p-4 mt-3">
                            {/* <img src={logo} alt="logo" width={125} /> */}
                        </div>
                        <div>
                            <IconText
                                iconName={"material-symbols:home"}
                                displayText={"Home"}
                                active={currentActiveScreen === "home"}
                                targetLink={"/home"}
                            />

                            <IconText
                                iconName={"ic:sharp-search"}
                                displayText={"Search"}
                                targetLink={"/search"}
                                active={currentActiveScreen === "search"}
                            />

                            <IconText
                                iconName={"icomoon-free:books"}
                                displayText={"Library"}
                                active={currentActiveScreen === "library"}
                                targetLink={"/library"}
                            />

                            <IconText
                                iconName={"entypo:music"}
                                displayText={"My Music"}
                                targetLink="/myMusic"
                                active={currentActiveScreen === "myMusic"}
                            />
                        </div>

                        <div className="pt-6">
                            <IconText
                                iconName={"icon-park-solid:add"}
                                displayText={"Create Playlist"}
                                onClick={() => {
                                    setCreatePlaylistModalOpen(true)
                                }}
                            />
                            <IconText
                                iconName={"mdi:heart-box"}
                                displayText={"Liked Songs"}

                            />
                        </div>



                    </div>
                    <div className="px-5">
                        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                            <Icon icon="carbon:earth-europe-africa" />
                            <div className="ml-2 text-sm font-semibold">
                                English
                            </div>
                        </div>
                    </div>

                </div>

                {/* This second div will be the right part (main conent) */}
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className="navbar h-1/10 w-full bg-black bg-opacity-30 flex items-center justify-end">
                        <div className="w-1/2 flex h-full">
                            <div className="w-3/5 flex justify-around items-center">
                                <TextWithHover displayText={"Primium"} />
                                <TextWithHover displayText={"Support"} />
                                <TextWithHover displayText={"Download"} />
                                <div className="h-1/2 border border-white"></div>
                            </div>

                            <div className="w-2/5 flex justify-around h-full items-center">
                                <TextWithHover displayText={"Upload Song"} />
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">SB</div>
                            </div>

                        </div>


                    </div>
                    {/* beacuse of overflow auto we see scroll data which is Spotify Playlist and Sound Of India .The overflow-auto is if my text is goes for scroll in website then put scrollbar and apply desird css*/}
                    <div className="content p-1 pt-0 overflow-auto">
                        {children}

                    </div>


                </div>
            </div>
            {/* this div is show the current playing song */}
            {currentSong && (
                <div className="w-full h-1/10 bg-black bg-opacity-30 flex items-center px-5">
                    <div className="w-1/3 flex items-center">
                        <img
                            src={currentSong.thumbnail}
                            className="h-14 w-14 rounded p-2"
                        />

                        <div className="pl-4">
                            <div
                                className="text-white text-sm hover:underline cursor-pointer">
                                {currentSong.name}
                            </div>

                            <div className="text-xm text-gray-400 hover:underline cursor-pointer">
                                {currentSong.artist.firstName + " " + currentSong.artist.lastName}
                            </div>

                        </div>
                    </div>

                    <div className="w-1/2 flex justify-center  h-full flex-col items-center">
                        <div className=" flex w-1/3 justify-between items-center">
                            {/* control pannel */}
                            <Icon icon="ph:shuffle"
                                font-size={30}
                                className="cursor-pointer  text-gray-500 hover:text-white" />


                            <Icon icon="ic:outline-skip-previous"
                                font-size={30}
                                className="cursor-pointer 
                         text-gray-500 hover:text-white" />

                            <Icon
                                icon={
                                    isPaused
                                        ? "ic:baseline-play-circle"
                                        : "ic:baseline-pause-circle"
                                }
                                font-size={40}
                                className="cursor-pointer  text-gray-500 hover:text-white"
                                onClick={togglePlayPause} />

                            <Icon icon="ic:outline-skip-next"
                                font-size={30} className="cursor-pointer  text-gray-500 hover:text-white" />

                            <Icon icon="mdi:repeat"
                                font-size={30} className="cursor-pointer  text-gray-500 hover:text-white" />
                        </div>
                        {/* progress bar */}
                    </div>
                    <div className="w-1/4 justify-end flex  items-center px-3 m-2">
                        <Icon icon="ic:twotone-playlist-add"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                            onClick={() => { setAddToPlaylistModalOpen(true) }}
                        />
                        <Icon icon="iconoir:heart"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white" />
                    </div>



                </div>
            )}
        </div>



    )
};

export default LoggedInContainer;