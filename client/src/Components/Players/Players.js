import React from "react";

function Players({ players }) {
  return (
    <div data-testid="players" className="players">
      {players.map(player => {
        return (
          <div key={player.id} className="player">
            <p>{player.name}</p>
            <p>{player.country}</p>
            <p>{player.searches}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Players;
