const Event = ({index, age, explanation}) => {
    return (
        <div key={index} className="life-event" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <h2>{age}</h2>
            <p>{explanation}</p>
        </div>
    )
}

export default Event