import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogList from "../pages/BlogList";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import NotFoundPage from "../pages/NotFoundPage";
import BlogDetails from "../pages/BlogDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" exact component={BlogList}></Route>
          <Route path="/blogs/:id" component={BlogDetails}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;
