 
function Planets({ planets }) {
  return (
    <section  id="planets">
      <h2 className="hero-title">Explore Our Solar System</h2>

      <div className="planet-container">
        {planets && planets .map((planet, index) => (
          <div key={index} className="planet-card">
            <img
              src={planet.image}
              alt={planet.planet}
              width="200"
            />

            <h3>{planet.planet}</h3>

            <p>
              Distance from Sun:
              {planet.distanceFromSun} million km
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Planets;

