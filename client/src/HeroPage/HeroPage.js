import React from "react";
import Hero from "../Components/Hero/Hero";
import Hero2 from "../Components/Hero2/Hero2";
import students from "../Components/Hero2/studentsData";

const HeroPage = () => {
  return (
    <div>
      <Hero />
      <Hero2 students={students} />
    </div>
  );
};

export default HeroPage;
