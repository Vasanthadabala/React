import "./App.css";
import Card from "./Cards";
import Bag from "./Components/styles";

function App() {
return (
    <div className="App">
        <h1>Task: Add three Card elements</h1>
        <Bag children={<Card h2="First card's h2" h3="First card's h3"/>} />
        <Bag children={<Card h2="Second card's h2" h3="Second card's h3"/>}/>
        <Bag children={<Card h2="Third card's h2" h3="Third card's h3"/>}/>
    </div>
    );
};

export default App;