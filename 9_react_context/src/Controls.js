//Controls.js
import React, {useContext} from "react";
import { MixtapeContext } from "./MixtapeContext";

export const Controls = () => {
  const {genre, setGenre, sortOrder, setSortOrder} = useContext(MixtapeContext);
  return (
    <div className="controls">
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value='all'>All</option>
        <option value='pop'>Pop</option>
        <option value='rock'>Rock</option>
        <option value='hip-hop'>Hip hop</option>
        <option value='rap'>Rap</option>
      </select>
      <button onClick={() => {
        sortOrder === 'ascending' ? setSortOrder('descending') : setSortOrder('ascending')
      }}>
        {sortOrder}
      </button>
    </div>
  );
};
