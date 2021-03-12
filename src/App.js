import { BrowserRouter, Switch, Route } from "react-router-dom";
import Quiz from "./views/Quiz";
import ListeningDetailsContainer from "./views/ListeningDetailsContainer";
import NotFoundPage from "./views/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route
            exact
            path="/listening/:id"
            component={ListeningDetailsContainer}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
