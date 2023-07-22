import React from "react";

const reducer=(state,action)=>
{
    if(action.type==='ride') return {money: state.money+10}
    if(action.type==='fuel') return {money: state.money-10}

}
 function Reducer(){
    const intialState={money:100}
    const[state,dispatch]=React.useReducer(reducer,intialState);

    return (
        <div>
            <h1>Wallet:{state.money}</h1>
            <div>
                <button onClick={()=>dispatch({type:'ride'})}>A new Customer</button>
                <button onClick={()=>dispatch({type:'fuel'})}>Refill the tank</button>
            </div>
        </div>
    )
 }
 export default Reducer;