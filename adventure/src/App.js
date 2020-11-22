import './App.css';
import {Navbar} from "./components/Navbar"
import {Home} from "./pages/Home/Home"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import {Services} from "./pages/Services"
import {Products} from "./pages/Products"
import {Footer} from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
