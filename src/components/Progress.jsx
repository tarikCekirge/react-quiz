import useQuiz from "../context/hooks/useQuiz"

const Progress = () => {

    const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz()
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>Soru:<strong>{index + 1}</strong>/{numQuestions} </p>
            <p style={{ textAlign: "right" }}>Puan:<strong>{points}/{maxPossiblePoints}</strong>  </p>
        </header>
    )
}

export default Progress