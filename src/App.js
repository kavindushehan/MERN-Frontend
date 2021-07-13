import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import EditPost from "./components/EditPost";
import PostDetails from "./components/PostDetails";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
