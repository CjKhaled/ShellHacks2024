const PopItems = ({choiceOne, choiceTwo, choiceThree, handlePillClick, setEndResult}) => {
    return (
        <div className="flex flex-col space-y-6">
            
            <button id="1"
              onClick={(e) => {
                handlePillClick()
                setEndResult(e.target.id)
              }}
              className="px-5 py-4 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300 transition"
            >
              {choiceOne}
            </button>
            <button
            id="2"
              onClick={(e) => {
                handlePillClick()
                setEndResult(e.target.id)
              }}
              className="px-5 py-4 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition"
            >
              {choiceTwo}
            </button>
            <button
            id="3"
              onClick={(e) => {
                handlePillClick()
                setEndResult(e.target.id)
              }}
              className="px-5 py-4 rounded-full bg-red-200 text-red-800 hover:bg-red-300 transition"
            >
              {choiceThree}
            </button>
          </div>
    )
}

export default PopItems 