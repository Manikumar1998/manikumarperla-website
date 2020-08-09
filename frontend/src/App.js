import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import HomePage from "./components/HomePage";
import NotFound from "./components/Notfound";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import ScrollToTop from "./components/ScrollToTop";
import axios from "axios";

class Login extends Component {
  state = {
    id: "",
    password: "",
    redirectToReferrer: false,
    authMessage: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { id, password } = this.state;

    if (await auth.authenticate(id, password)) {
      this.setState({
        redirectToReferrer: true,
      });
    } else {
      this.setState({
        redirectToReferrer: false,
        authMessage: "Login falied. Is this really you bro? @Manikumar",
      });
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, authMessage } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container my-5 py-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Login</span>
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="id">ID *</label>
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: "black" }}
              >
                Login
              </button>
            </form>
            <h5 className="text-danger">{authMessage}</h5>
          </div>
        </div>
      </div>
    );
  }
}

const auth = {
  isAuthenticated: false,
  async authenticate(id, password) {
    const authObj = {
      ID: id,
      PASS: password,
    };
    const response = await axios.post(
      process.env.REACT_APP_SERVER + "/api/login",
      authObj
    );
    console.log(response);
    if (response.data.isSuccessful) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/write-a-recommendation"
            component={WriteRecommendation}
          />
          <Route exact path="/project/all" component={AllProjects} />
          <Route exact path="/blog/all" component={AllBlogs} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/project/add" component={AddProject} />
          <PrivateRoute exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
