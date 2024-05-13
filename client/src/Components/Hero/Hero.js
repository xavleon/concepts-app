import React from "react";
import { useState } from "react";

const Hero = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(25); // [state, setState]
  const [isEmployed, setIsEmployed] = useState(false); // [state, setState]
  const [favColor, setFavColor] = useState("Blue"); // [state, setState

  const updateName = () => {
    setName("Superman");
  };

  const updateAge = () => {
    setAge(30);
  };

  const updateAgeby5 = () => {
    setAge(age + 5);
  };

  const updateEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  };
  const updateFavColor = () => {
    setFavColor(favColor === "Blue" ? "Red" : "Blue");
  };
  return (
    <div>
      <h1>UseState Review</h1>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Change Age</button>
      <button onClick={updateAgeby5}>+ 5 years</button>
      <p>My Favorite color is {favColor}</p>
      <button onClick={updateFavColor}>Change to Red</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={updateEmploymentStatus}>Toggle Employment Status</button>
    </div>
  );
};

export default Hero;
