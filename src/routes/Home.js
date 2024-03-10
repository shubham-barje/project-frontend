import logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText"
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";


{/* <Card
                    title="peasfull piano"
                    description={"relax and beautiful  piano theme"}
                    imgUrl="https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
                />
                <Card
                    title="Deep focus"
                    description={"kepp calm"}
                    imgUrl="https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
                />
                <Card
                    title="focus flow"
                    description={"relax and beautiful  piano theme"}
                    imgUrl="https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
                />
                <Card
                    title="peasfull piano"
                    description={"relax and beautiful  piano theme"}
                    imgUrl="https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
                />
                <Card
                    title="peasfull piano"
                    description={"relax and beautiful  piano theme"}
                    imgUrl="https://media.istockphoto.com/id/1285965933/photo/audiobooks-concept.jpg?s=1024x1024&w=is&k=20&c=5W_usVS6XBX3V1DM8Q3NKQsXvEG13Yh0znl9_dv4zsU="
                /> */}

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
        <div className="h-full w-full flex">
            {/* This first div will be the left pannel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-6">
                <div>
                    {/* div for logo */}
                    <div className="logoDiv p-4 mt-3">
                        <img src={logo} alt="logo" width={125} />
                    </div>
                    <div>
                        <IconText
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                        />

                        <IconText
                            iconName={"ic:sharp-search"}
                            displayText={"Search"}
                        />

                        <IconText
                            iconName={"icomoon-free:books"}
                            displayText={"Library"}
                        />
                    </div>

                    <div className="pt-6">
                        <IconText
                            iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
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
                            <TextWithHover displayText={"Sign Up"} />
                            <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">Log In</div>
                        </div>

                    </div>


                </div>
                {/* beacuse of overflow auto we see scroll data which is Spotify Playlist and Sound Of India .The overflow-auto is if my text is goes for scroll in website then put scrollbar and apply desird css*/}
                <div className="content p-1 pt-0 overflow-auto"></div>

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
                /> run
            </div>
        </div>
    )
};

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