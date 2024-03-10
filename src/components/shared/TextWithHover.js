

const TextWithHover = ({  displayText, active }) => {
    return (
        <div className="flex items-center justify-start cursor-pointer ">


            <div>
                <div className={
                    `${active ? "text-white" : "text-gray-500"}  font-semibold hover:text-white text-lg`}
                >

                    {displayText}
                </div>
            </div>
        </div>
    )

}
export default TextWithHover;