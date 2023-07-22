import colors from './colors.jpg'
import './App.css';

function Logo(props)
{
  const pic = <img src={colors} />;
  return pic;
}

function App() {
  return (
    <div>
    <h1>Hello!</h1>
    <Logo/>
    </div>
  );
}

export default App;
