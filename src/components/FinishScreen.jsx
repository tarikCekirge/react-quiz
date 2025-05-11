
const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
    const percentage = (points / maxPossiblePoints) * 100

    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage >= 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤦‍♂️";


    return (
        <>
            <p className="result">
                <span>{emoji}</span>
                Başarı Oranı: {points}/{maxPossiblePoints}<strong>(%{Math.ceil(percentage)})</strong>
            </p>
            <p className="highscore">(En Yüksek puan: {highscore})</p>

            <button className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })} >
                Yeni Oyun
            </button>
        </>
    )
}

export default FinishScreen