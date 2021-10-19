
import IndexView from "./views/IndexView";
import Mint from "./views/Mint/Mint.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <IndexView />
          </Route>
          <Route path="/mint">
            <Mint />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
