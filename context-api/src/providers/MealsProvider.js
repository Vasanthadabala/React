import React from "react";

const MealsContext=React.createContext();//created context varaible using Context-API
/*Which is used to pass data through the component tree.
without having to pass props manually at each level*/

const todayMeals=["Baked Beans","Sweet Potato","Sweet Corn"];//Meals Data
const MealsProvider = ({children}) => {
    const[mealsList,setMealsList] = React.useState(todayMeals);
    return( 
        <MealsContext.Provider value={{mealsList}}>
        {children}
        </MealsContext.Provider>
        /*using jsx property Provider & value attribute accesing mealsList(todaymeals data).
        And passing it to MealsContext(API).*/
    )
}
export const  useMealsListContext=()=>React.useContext(MealsContext);
//exporting data which is shared to Context API(MealsContext)

export default MealsProvider;

