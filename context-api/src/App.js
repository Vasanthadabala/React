import MealsList from "./componets/MealsList";
import MealsProvider from "./providers/MealsProvider";
import Counter from "./componets/Counter";
import "./App.css";

function App() {
  return (
    <div>
    <MealsProvider>
      <MealsList/>
      <Counter/>
    </MealsProvider>
    </div>
  );
}

export default App;
