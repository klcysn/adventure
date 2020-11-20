import './App.css';
import {Navbar} from "./components/Navbar"
import {Home} from "./pages/Home"
import {Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
