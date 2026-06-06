 

 function PlanetTable({ planets }) {
  return (
   <section className="table-section">
     <h2 className="table-title">Planetary Facts at a Glance</h2>
     <table>
       <thead>
          <tr>
           <th>Planet</th>
           <th>Distance from Sun (million km)</th>
        </tr>
       </thead>
         <tbody>
          {planets.map((planet, index) => (
            <tr key={index}>
              <td>{planet.planet}</td>
              <td>{planet.distanceFromSun}</td>
             </tr>
          ))}
         </tbody>
     </table>
    </section>
  );
 }

 export default PlanetTable;


