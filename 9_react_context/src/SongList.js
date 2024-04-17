// SongList.js
import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(MixtapeContext);

  return (
    <>
      <h2 className="heading">Songs</h2>
      <ul>
        {songs
          .filter(song => genre === 'all' || song.genre === genre)
          .sort((a, b) => {
            if (a.year > b.year) {
              return sortOrder === 'ascending' ? 1 : -1;
            }
            if (a.year < b.year) {
              return sortOrder === 'ascending' ? -1 : 1;
            }
            return 0;
          })
          .map((song, index) => (
            <Song key={index} artist={song.artist} genre={song.genre} name={song.name} year={song.year} />
          ))}
      </ul>
    </>
  );
};