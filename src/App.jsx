import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
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
    default:
      throw new Error("Unknown action type");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        {state.status === "loading" && <p>Yükleniyor...</p>}
        {state.status === "error" && <p className="text-red-500">Veriler alınamadı.</p>}
        {state.status === "ready" && (
          <>
            <p>1/{state.questions.length}</p>
            <p>Soru</p>
            {state.questions.map((q) => (
              <div key={q.question}>
                <p>{q.question}</p>
              </div>
            ))}
          </>
        )}
      </Main>
    </section>
  );
};

export default App;
