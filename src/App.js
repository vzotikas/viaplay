import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import { Watched } from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <GlobalProvider>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </GlobalProvider>
  );
}

export default App;
