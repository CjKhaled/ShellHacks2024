const PopHeader = ({category, scenario}) => {
    return (
        <>
            <p className="font-bold mb-6">{scenario}</p>
            <div className="flex flex-col mb-6">
                <h3 className="font-semibold">{category}</h3> 
            </div>
        </>
    )
}

export default PopHeader