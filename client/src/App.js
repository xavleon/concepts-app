import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Hero2 from "./Components/Hero2/Hero2";
import students from "./Components/Hero2/studentsData";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./HeroPage/HeroPage";
import MyFinalSite from "./MySite/MyFinalSite";
import Slideshow from "./Slideshow/Slideshow";
import Form from "./Components/Form/Form";
import Form2 from "./Components/Form2/Form2";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/herox" element={<HeroPage />} />
          <Route path="/hero" element={<Hero2 students={students} />} />
          {/* Add more Route components for other paths as needed */}
          <Route path="/clean" element={<MyFinalSite />} />
          <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form2" element={<Form2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
