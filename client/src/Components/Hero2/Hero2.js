import React, { useEffect } from "react";
import "./Hero2.css";
import { useState } from "react";

function Hero2(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <div class="props">
        <h1>Props Review</h1>
        <h2>Student List</h2>
        <ol>
          {props.students.map((student, index) => (
            <li key={index}>
              {" "}
              {student.name} Status:{" "}
              {student.isStudent ? "Enrolled" : "Inactive"} Age: {student.age}
            </li>
          ))}
        </ol>
      </div>
      <div class="api-review">
        <h1>API Review</h1>
        <h2>Star Wars Data</h2>
        {characters.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>

            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero2;
