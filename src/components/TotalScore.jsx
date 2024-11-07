export default function TotalScore({ totalScore, players }) {
  return (
    <div id="total-score-box">
      <h3 id="score-title">Score:</h3>
      <div id="total-score">
        <div>
          {players["X"]}:{" "}
          <span className="score-num">{totalScore["X"]} pts</span>
        </div>
        <div>|</div>
        <div>
          {players["O"]}:{" "}
          <span className="score-num">{totalScore["O"]} pts</span>
        </div>
      </div>
    </div>
  );
}
