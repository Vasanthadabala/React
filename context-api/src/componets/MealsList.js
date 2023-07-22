import React from "react";
import { useMealsListContext } from "../providers/MealsProvider";
//importing context API from MealsProvider

function MealsList()
{
    const {mealsList} = useMealsListContext();
    //destructing the data stored in api and assigning it to mealsList Varaible
    return (
    <div className="heading">
        <h1>Meals List using Context API</h1>
        {mealsList.map((meal,index) => (
                <h2 key={index}>{meal}</h2>
                ))}
                </div>
                /* map is used to map the array values and render them in h2.
                map(meal->all array items saved)&(index->index of Array).*/
                );
}
export default MealsList;