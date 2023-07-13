import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Part5 from './components/Part5';
import Part6 from './components/Part6';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Part6/>
      <Footer/>
    </div>
  );
}

export default App;
