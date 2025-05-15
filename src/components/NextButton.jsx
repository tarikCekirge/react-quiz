import useQuiz from "../context/hooks/useQuiz";

const NextButton = () => {

    const { dispatch, answer, index, numQuestions } = useQuiz()

    if (answer === null) return null
    if (index === numQuestions - 1) return (
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'finished' })}>
            Bitir
        </button>
    )
    return (
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion' })}>
            Sonraki
        </button>
    );
}

export default NextButton;

















/**
 * const NextButton = ({ dispatch, answer, index, numQuestions }) => {

    if (index === numQuestions - 1 && answer !== null) {
        return (
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'finished' })}>
                Bitir
            </button>
        )
    }
    if (answer === null) return null
    return (
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion' })}>
            Sonraki
        </button>
    );
}

export default NextButton;

 */
