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
          <div className={"gridBox"} key={index}>
            <h4 className={"collapseMargin spaceBelow"}>{data.movie}</h4>
            <p className={"collapseMargin"}>Release Date: {data.year}</p>
            <p className={"collapseMargin"}>Price: {data.price}</p>
            <p className={"collapseMargin"}>Stock remaining: {data.stock}</p>
            <div className={"genrePosition"}>
              <h5 className={"collapseMargin addMargin-top"}>Genre</h5>
              {data.genre.map((item, index) => (
                <p className={"collapseMargin genreRow"} key={index}>{item}, </p>
              ))}
            </div>
          </div>
        ))}
      </div>
        
    )
}