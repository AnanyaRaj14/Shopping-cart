import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
// import Cart from "./components/Cart"
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path='/' Component={<Home/>}>
          
        </Route>
        <Route exact path='/Cart' Component={<Cart/>}>
        
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
