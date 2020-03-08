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
import EditSkill from "./Components/EditSkill";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Provider>
      <Router>
        <ScrollToTop />
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
            <Route exact path="/skill/update/:id" component={EditSkill} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
