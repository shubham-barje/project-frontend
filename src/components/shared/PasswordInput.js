const Textinput = ({label,placeholder,className,value,setValue}) => {
    return (
        <div className={`textInputDiv flex flex-col space-y-3 w-full ${className}`}>
            <label htmlFor={label} className="font-semibold">{label}</label>
            <input type="password" placeholder={placeholder} className="p-2 border border-gray-400 rounded " id={label} 
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }} />
        </div>

    )
}
export default Textinput;