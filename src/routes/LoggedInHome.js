//music play section at bottom
import logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText"
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useContext } from "react";




const spotifyPlaylistCardData = [
    {
        title: "hello",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "Deep focus",
        description: "kepp calm",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "focus flow",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "Instrumental Study",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "focus flow",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    }
]

const focusCardsData = [
    {
        title: "peasfull piano",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "Deep focus",
        description: "kepp calm",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "focus flow",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "Instrumental Study",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    },
    {
        title: "focus flow",
        description: "relax and beautiful  piano theme",
        imgUrl: "https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
    }
]


const Home = () => {
    return (
        <LoggedInContainer currentActiveScreen={"home"}>
            <PlaylistView
                titleText={"Focus"}
                cardData={focusCardsData}
            />
            <PlaylistView
                titleText={"Playlist"}
                cardData={spotifyPlaylistCardData}
            />
            <PlaylistView
                titleText={"Sound Of India"}
                cardData={focusCardsData}
            />
        </LoggedInContainer>
    )
}


const PlaylistView = ({ titleText, cardData }) => {
    return (
        <div className="text-white p-5 mt-8">
            <div className="text-2xl font-semibold mb-5 ">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">

                {
                    // cardDatawill be an array
                    cardData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        )
                    })
                }
            </div>

        </div>
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
export default Home;