/* eslint-disable eqeqeq */
function ModeToggler(){
    let darkModeOn=true;
    const darkMode=<h1>Dark Mode On</h1>
    const lightMode=<h1>Light Mode On</h1>
   function handler()
   {
        darkModeOn=!darkModeOn;
        if(darkModeOn == true)
    {
        console.log("Dark Mode Is On")
    }
    else
    {
        console.log("Light Mode Is On")
    }
    };   
    return(
        <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handler}>ModeToggler</button>
        </div>
    )
}
export default ModeToggler