import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import UsersPage from "./Pages/UsersPage"
import UserPage from "./Pages/UserPage"

const HomePage = ()=><div>Home</div>
const AboutPage = ()=><div>About</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link> {" "}
          <Link to="/users">Users</Link>{" "}
          <Link to="/about">About</Link>

          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/users/:id" exact component={UserPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
