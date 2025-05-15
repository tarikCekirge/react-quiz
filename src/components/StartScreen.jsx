import useQuiz from "../context/hooks/useQuiz"

const StartScreen = () => {
    const { numQuestions, dispatch } = useQuiz();
    return (
        <div className="start">
            <h2>React Sınavına Hoş Geldiniz!</h2>
            <h3>React ustalığınızı test etmek için {numQuestions} soru</h3>
            <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>  Başla </button>
        </div >
    )
}

export default StartScreen