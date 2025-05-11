
const StartScreen = ({ numQuestions }) => {
    return (
        <div className="start">
            <h2>React Sınavına Hoş Geldiniz!</h2>
            <h3>React ustalığınızı test etmek için {numQuestions} soru</h3>
            <button className="btn btn-ui">  Başla </button>
        </div>
    )
}

export default StartScreen