import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import AddProject from "./Components/AddProject";
import WriteRecommendation from "./Components/WriteRecommendation";
import Notfound from "./Components/Notfound";
import { Provider } from "./context";
import EditSkill from "./Components/EditSkill";
import ScrollToTop from "./Components/ScrollToTop";
import AllProjects from "./Components/AllProjects";
import AddBlog from "./Components/AddBlog";
import AllBlogs from "./Components/AllBlogs";
import BlogPage from "./Components/BlogPage";

function App() {
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

export default App;
