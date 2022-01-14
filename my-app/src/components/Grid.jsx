import { useState, useEffect } from "react";
import "./grid.css";

export const GridContent = () => {

const [moviesData, setMoviesData] = useState([]);

  const getData = () => {
    fetch("movies.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setMoviesData(data));
  };

  useEffect(() => {
    getData();
  }, []);

    return(
        <div className="container">
        {moviesData.map((data, index) => (
          <div key={index}>
            <h5>{data.movie}</h5>
            <p>{data.year}</p>
            <p>{data.price}</p>
            <p>{data.stock}</p>
            {data.genre.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ))}
      </div>
        
    )
}