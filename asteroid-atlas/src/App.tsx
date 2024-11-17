import "./styles/App.css";
import AsteroidTracker from "./components/AsteroidTracker";
import NavBar from "./components/NavBar";
import Starfield from "./animations/Starfield";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <AsteroidTracker startDate={new Date(2024, 10, 18)}></AsteroidTracker>
      <Starfield />
    </>
  );
}

export default App;
