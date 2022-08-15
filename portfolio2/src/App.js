import Main from './Main.js'
import Navigation from './components/Navigation.js'
import AccountingWebsite from './pages/AccountingWebsite.js'
import MyDelivery from './pages/myDelivery.js'
import WeddingWebsite from './pages/weddingWebsite.js'
import GoogleAds from './pages/googleAds.js'
import Test from './pages/deliveryFree.js'
import './assets/stylesheets.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <Router>
          <Navigation/>
          <Routes basename="https://nataliaszlag.github.io/" >
            <Route exact path="" element={<Main />}/>
            <Route exact path="free" element={<Test />}/>
            <Route exact path="#cards" element={<Main />}/>
            <Route exact path="#About" element={<Main />}/>
            <Route exact path="#contact" element={<Main />}/>
            <Route exact path="accounting" element={<AccountingWebsite />}/>
            <Route exact path="delivery" element={<MyDelivery />}/>
            <Route exact path="wedding" element={<WeddingWebsite />}/>
            <Route exact path="ads" element={<GoogleAds />}/>
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
