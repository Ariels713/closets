import React from "react";
// import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Nav } from "reactstrap";
import Navigation from "./components/navigation/Navigation";
import MainHeader from "./components/header/MainHeader";
import MainSectionContent from "./components/mainContent/MainSectionContent";
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <MainHeader />
          <MainSectionContent />
        </Route>
      </Switch>
    </>
  );
}

export default App;
