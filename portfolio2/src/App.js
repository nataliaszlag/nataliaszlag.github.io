import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Cards from './components/Cards'
import Contact from './components/Contact'
import './assets/stylesheets.css';

function App() {
  return (
    <div className="App">     
          <Navigation/>
          <Hero/>
          <About/>
          <Cards/>
          <Contact/>   
    </div>
  );
}

export default App;
