import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
