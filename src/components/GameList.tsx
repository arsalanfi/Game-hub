import useGenres from "@/hooks/useGenres";
import React from "react";

const GameList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GameList;
