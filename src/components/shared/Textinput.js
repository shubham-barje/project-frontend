// value and setValue are used to retrive or run api
const Textinput = ({ label, placeholder, value, setValue ,labelClassName}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-3 w-full">
            <label htmlFor={label} className={`font-semibold ${labelClassName}`}>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-2 border border-gray-400 rounded "
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }} />
        </div>

    )
}
export default Textinput;