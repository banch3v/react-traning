import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) onChangeName(symbol, playerName);
  }

  const editablePlayerName = isEditing ? (
    <input
      type="text"
      value={playerName}
      onChange={(event) => setPlayerName(event.target.value)}
      required
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
