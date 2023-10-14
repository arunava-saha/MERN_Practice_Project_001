import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DataComponent from "./components/Jocks";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => setJokes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full bg-opacity-90 flex flex-col justify-center text-center">
      <h1 className="font-bold text-3xl text-red-700 fixed top-0">
        Random Jocks
      </h1>
      <p>jokes: {jokes.length}</p>
      <DataComponent data={jokes} />;
    </div>
  );
}

export default App;
