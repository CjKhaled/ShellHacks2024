const PopItems = ({handlePillClick}) => {
    return (
        <div className="flex flex-col space-y-6">
            
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300 transition"
            >
              Pill 1
            </button>
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition"
            >
              Pill 2
            </button>
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-red-200 text-red-800 hover:bg-red-300 transition"
            >
              Pill 3
            </button>
          </div>
    )
}

export default PopItems 