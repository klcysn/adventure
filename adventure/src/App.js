import './App.css';
import {Navbar} from "./components/Navbar"
import {Home} from "./pages/Home/Home"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import {Services} from "./pages/Services"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
