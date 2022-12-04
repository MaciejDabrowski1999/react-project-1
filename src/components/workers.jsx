import React from "react";
import './style/workers.css';

const Workers = () => {
    return(
<section className="container">
<p className="specText">Nasi specjaliści</p>
      <div className="spec">
        <div className="circle bob"></div>
        <div>
          <h3 className="nameSpec">Imię nazwisko [dział]</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
            nunc, id malesuada ex lobortis a. Integer felis nisi, tempor
            elementum lorem in, varius pellentesque ligula. Duis efficitur
            lacinia enim, non tincidunt libero ultrices in.
          </p>
        </div>
      </div>
      <div className="spec">
        <div className="circle jack"></div>
        <div>
          <h3 className="nameSpec">Imię nazwisko [dział]</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
            nunc, id malesuada ex lobortis a. Integer felis nisi, tempor
            elementum lorem in, varius pellentesque ligula. Duis efficitur
            lacinia enim, non tincidunt libero ultrices in.
          </p>
        </div>
      </div>
</section>
    )
}

export default Workers;