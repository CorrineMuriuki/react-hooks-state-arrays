import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";


function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    //spread operator
    const newFoodArray =[...foods, newFood];
    setFoods(newFoodArray);
  }
//Removing elements from arrays in state
function handleLiClick(id) {
  const newFoodArray = foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    }
  });
  setFoods(newFoodArray);
}

return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
);
}
export default SpicyFoodList;
