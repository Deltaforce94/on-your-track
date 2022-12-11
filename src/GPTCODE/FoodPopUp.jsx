import React from "react";


function FoodPopUp(props) {

  const [nombre, setNombre] = React.useState("");
  const [calorias, setCalorias] = React.useState(0);

  return (
    <div className="food-container">
        <h2 className="food-title">Añadir Comida</h2>
        <form className="food-popup-form" onSubmit={""}>
          <label className="food-label">Nombre de la comida:</label>
          <input className="food-input" type="text" name="food-name" required></input>
          <label className="food-label">Calorías:</label>
          <input className="food-input" type="number" name="food-calories" required></input>

          <input className="food-submit" type="submit" value="Añadir"></input>
        </form>
    </div>
  );
}


export default FoodPopUp;


