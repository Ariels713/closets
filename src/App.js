import React from "react";
// import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Nav } from "reactstrap";
import Navigation from "./components/navigation/Navigation";
import MainHeader from "./components/header/MainHeader";
import MainSectionContent from "./components/mainContent/MainSectionContent";
import LocationMap from "./components/map/LocationMap";
import ClosetDoors from "./components/closets/ClosetDoors";
import SampleProduct from "./components/productPage/SampleProduct";
import Footer from "./components/footer/Footer";
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
      <ClosetDoors />
      <SampleProduct />
      <LocationMap />
      <Footer />
    </>
  );
}

export default App;
