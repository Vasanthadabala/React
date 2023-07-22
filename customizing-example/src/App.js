import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Promo from './Components/Promo';

function App() {
  return (
    <div>
      <Nav name="vasanth"/>
      <Promo greetings="Hello Welcome"/>
      <Footer />
    </div>
  );
}

export default App;
