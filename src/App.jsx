 
 import { useState, useEffect } from "react";

 import Header from "./Header";
 import Hero from "./Hero";
 import VideoSection from "./VideoSection";
 import Planets from "./Planets";
 import PlanetTable from "./PlanetTable";
 import Contact from "./Contact";
 import Footer from "./Footer";


 function App() {
   const [planets, setPlanets] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

  useEffect(() => {
  fetch("https://anurella.github.io/json/planets.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch planets");
      }
      return response.json();
    })
    .then((data) => {
      setPlanets(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);
  if (loading) {
  return <h2>Loading planets... 🚀</h2>;
  }
  if (error) {
  return <h2 style={{ color: "red" }}>{error}</h2>;
  } 
  
  return (
    <div className="container">
      <Header />
      <Hero />
      <VideoSection/>
      <Planets planets={planets} />
      <PlanetTable planets={planets} />
      <Contact />
      <Footer />
   </div>
  );
}

 export default App;