import logo from './logo.svg';
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Cards from './components/Cards'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">     
          <Nav/>
          <Hero/>
          <About/>
          <Cards/>
          <Contact/>   
    </div>
  );
}

export default App;
