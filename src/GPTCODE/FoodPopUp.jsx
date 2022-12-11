import React from "react";

function FoodPopUp(props) {
  const [nombre, setNombre] = React.useState("");
  const [calorias, setCalorias] = React.useState(0);

  // Create a function that updates the value of the parent's `foodCalories` state
  const handleSubmit = (event) => {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the value of the `food-calories` input field
    const foodCalories = event.target.elements["food-calories"].value;

    // Call the `onSubmit` callback function from the parent component and pass it the `foodCalories` value
    props.onSubmit(foodCalories);

    // Reset the `calorias` state
    setCalorias(0);
  };

  return (
    <div className="food-container">
        <h2 className="food-title">Añadir Comida</h2>
        <form className="food-popup-form" onSubmit={handleSubmit}>
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


