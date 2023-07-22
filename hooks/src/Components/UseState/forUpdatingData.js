import { useState } from "react";

export default function ForUpdatingData()
{
const[word, setWord]=useState('Eat')
function handleClick()
{
    setWord('Drink')
}
return(
    <div>
        <h1>{word + " at Little Lemon"}</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
)
}