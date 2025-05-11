import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
  answer: null,
  points: 0,
  highscore: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active"
      }
    case 'newAnswer':
      const question = state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }

    case 'nextQuestion': {
      const hasNextQuestion = state.index < state.questions.length - 1;

      return {
        ...state,
        index: hasNextQuestion ? state.index + 1 : state.index,
        answer: null,
        status: !hasNextQuestion ? 'finished' : "active"
      };
    }

    case 'finished':
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore ? state.points : state.highscore
      }

    case 'restart': {
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};

const App = () => {
  const [{ questions, status, index, answer, points, highscore }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length
  const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/questions");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.error(err);
        dispatch({ type: "dataFailed" });
      }
    };

    fetchQuestions();
  }, []);

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
          <NextButton index={index} numQuestions={numQuestions} dispatch={dispatch} answer={answer} />
        </>}
        {status === "finished" && <FinishScreen dispatch={dispatch} highscore={highscore} points={points} maxPossiblePoints={maxPossiblePoints} />}

      </Main>
    </section>
  );
};

export default App;
