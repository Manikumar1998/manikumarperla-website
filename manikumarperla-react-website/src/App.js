import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import AddProject from "./Components/AddProject";
import Recommendation from "./Components/Recommendation";
import Notfound from "./Components/Notfound";
import { Provider } from "./context";
import UpdateProject from "./Components/UpdateProject";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Manikumar Perla" />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/project/add" component={AddProject} />
            <Route exact path="/project/:id" component={ProjectPage} />
            <Route
              exact
              path="/write-a-recommendation/"
              component={Recommendation}
            />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
