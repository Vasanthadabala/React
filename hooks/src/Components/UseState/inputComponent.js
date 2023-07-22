import { useState } from "react"

export default function InputComponent()
{
    const[inputText,setText]=useState('hello')
    function handleChange(change)//stores changed value
    {
        setText(change.target.value);//pass it to setText function which passed to inputText
    }
    return(
        <div>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed:{inputText}</p>
            <button onClick={()=>setText('hello')}>Reset</button>
        </div>
    )
    //value means intial ,onchange means after typing in the field it passes to handlechange function
}