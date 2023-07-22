import React from "react";
import { useMealsListContext } from "../providers/MealsProvider";

function Counter()
{
    const{mealsList}=useMealsListContext();
    return (
        <div>
            <h3>Number of meals today:{mealsList.length}</h3>
        </div>
    );
}
export default Counter;