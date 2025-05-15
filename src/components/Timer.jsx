import { useEffect } from "react";
import useQuiz from "../context/hooks/useQuiz";

const Timer = () => {
    const { dispatch, secondsRemaning } = useQuiz();
    const mins = Math.floor(secondsRemaning / 60);
    const seconds = secondsRemaning % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);

        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className="timer">
            Kalan Süre: {String(mins).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    );
};

export default Timer;
