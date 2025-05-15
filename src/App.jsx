import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import useQuiz from "./context/hooks/useQuiz";






const App = () => {

  const {
    status,
    dispatch,
    questions,
    index,
    answer,
    points,
    highscore,
    secondsRemaning,
    numQuestions,
    maxPossiblePoints,
  } = useQuiz();


  return (
    <section className="flex flex-col mx-auto max-w-xl">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && <>
          <Progress answer={answer} maxPossiblePoints={maxPossiblePoints} points={points} index={index} numQuestions={numQuestions} />
          <Question answer={answer} dispatch={dispatch} q={questions[index]} />
          <Footer>
            <Timer dispatch={dispatch} secondsRemaning={secondsRemaning} />
            <NextButton index={index} numQuestions={numQuestions} dispatch={dispatch} answer={answer} />
          </Footer>
        </>}
        {status === "finished" && <FinishScreen dispatch={dispatch} highscore={highscore} points={points} maxPossiblePoints={maxPossiblePoints} />}

      </Main>
    </section>
  );
};

export default App;
