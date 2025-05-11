
const Options = ({ correctOption, options, dispatch, answer }) => {
    const hasAnswered = answer !== null
    return (
        <div className="options">
            {options.map((option, index) => (
                <button
                    key={option}
                    className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""}`}
                    onClick={() => dispatch({ type: 'newAnswer', payload: index })}
                    disabled={hasAnswered}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Options