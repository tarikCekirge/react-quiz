import Options from "./Options"

const Question = ({ q }) => {
    const { question, options, correctOption, points, id } = q
    return (
        <div>
            <h4>{question}</h4>
            <Options options={options} />
        </div>
    )
}

export default Question