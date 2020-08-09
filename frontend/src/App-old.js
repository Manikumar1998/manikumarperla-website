import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import AddProject from "./components/AddProject";
import WriteRecommendation from "./components/WriteRecommendation";
import Notfound from "./components/Notfound";
import { Provider } from "./context";
import EditSkill from "./components/EditSkill";
import ScrollToTop from "./components/ScrollToTop";
import AllProjects from "./components/AllProjects";
import AddBlog from "./components/AddBlog";
import AllBlogs from "./components/AllBlogs";
import BlogPage from "./components/BlogPage";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <NavBar branding="Manikumar Perla" />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/project/add" component={AddProject} />
              <Route exact path="/project/all" component={AllProjects} />
              <Route exact path="/project/:id" component={ProjectPage} />
              <Route exact path="/blog/add" component={AddBlog} />
              <Route exact path="/blog/all" component={AllBlogs} />
              <Route exact path="/blog/:id" component={BlogPage} />
              <Route
                exact
                path="/write-a-recommendation/"
                component={WriteRecommendation}
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
}

export default App;
