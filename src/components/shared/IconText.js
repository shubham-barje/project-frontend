import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({ iconName, displayText, active ,targetLink,onClick}) => {
    return (
        <Link to={targetLink} className="block">
         <div className="flex items-center justify-start cursor-pointer " onClick={onClick}>
            <div className="px-5 py-2 ">
                {/* //iconNameis a prop */}
                <Icon
                    icon={iconName}
                    color={active ? "white" : "grey"}
                    fontSize={26}
                />
            </div>
            <div>
                <div className={
                    `${active ? "text-white" : "text-gray-400"} text-sm font-semibold hover:text-white`}
                >

                    {displayText}
                </div>
            </div>
        </div>
        </Link>
       
    )

}
export default IconText;