import Options from "./Options"

const Question = ({ q, dispatch, answer }) => {
    const { question, options, correctOption, points, id } = q
    return (
        <div>
            <h4>{question}</h4>
            <Options options={options} dispatch={dispatch} answer={answer} correctOption={correctOption} />
        </div>
    )
}

export default Question