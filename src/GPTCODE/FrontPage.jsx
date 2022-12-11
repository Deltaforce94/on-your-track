import React, { useState, useEffect } from 'react';
import FoodPopUp from "./FoodPopUp";

const Frontpage = (props) => {
    const [caloriasActuales, setCaloriasActuales] = useState(0);
    const [caloriasMeta, setCaloriasMeta] = useState(0);
    const [añadirComida, setAñadirComida] = useState(false);

    // Function to calculate the daily caloric intake
    function calculateCaloricIntake(age, sex, weightKg, heightCm, activityLevel) {
        // Calculate the basal metabolic rate (BMR) based on age, sex, weight, and height
        let bmr = 0;
        if (sex === "male") {
        bmr = 66 + (13.7 * weightKg) + (5 * heightCm) - (6.8 * age);
        } else if (sex === "female") {
        bmr = 655 + (9.6 * weightKg) + (1.8 * heightCm) - (4.7 * age);
        }

        // Calculate the daily caloric intake based on the BMR and activity level
        let dailyIntake = 0;
        if (activityLevel === "sedentary") {
        dailyIntake = bmr * 1.2;
        } else if (activityLevel === "light") {
        dailyIntake = bmr * 1.375;
        } else if (activityLevel === "moderate") {
        dailyIntake = bmr * 1.55;
        } else if (activityLevel === "active") {
        dailyIntake = bmr * 1.725;
        } else if (activityLevel === "veryActive") {
        dailyIntake = bmr * 1.9;
        }
    
        // Return the daily caloric intake
        return Math.round(dailyIntake);
    }

    function handleAddFood() {
        añadirComida ? setAñadirComida(false) : setAñadirComida(true);
    }

    const onSubmit = (value) => {
        const intValue = parseInt(value, 10);
        // Update the value of the `foodCalories` state by adding the `value` passed from the child component
        setCaloriasActuales(caloriasActuales + intValue);
        añadirComida ? setAñadirComida(false) : setAñadirComida(true);
    };
    
    
    useEffect(() => {
        setCaloriasMeta(calculateCaloricIntake(props.age, props.sex, props.weight, props.height, props.activityLevel));
        setCaloriasActuales(0);
    },[]);
  

    //console.log(calculateCaloricIntake(props.age, props.sex, props.weight, props.height, props.activityLevel));

    return (    
        <div className="frontpage-container">
            <h1 className="frontpage-title">Hola {props.name}</h1>
                <progress 
                    className="frontpage-progressbar"
                    value={caloriasActuales}
                    max={caloriasMeta}
                />
                <h3><span>{caloriasActuales}</span>/<span>{caloriasMeta}</span></h3>

            <div className="frontpage-buttons">
                <button id="add-food-button" onClick={handleAddFood}>Añadir Comida</button>
                <button id="add-exercise-button">Añadir Ejercicio</button>
            </div>
            {añadirComida ? <FoodPopUp onSubmit={onSubmit} /> : false}
        </div>
        
    );
}


export default Frontpage;



  