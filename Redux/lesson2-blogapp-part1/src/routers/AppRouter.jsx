import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogList from "../pages/BlogList";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" component={BlogList}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;
