import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  NavLink,
} from "reactstrap";
// core components
import ContactModal from "../contact/ContactModal";
import SignIn from "../signIn/SignIn";

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      <Navbar
        className="fixed-top"
        style={{ boxShadow: "none" }}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
              {/* <img
                style={{ width: "40%" }}
                alt="..."
                className="img-rounded img-responsive"
                src={require("../../assets/images/tcb_logo.png")}
              /> */}
              The <span style={{ color: "#F5593D" }}>Closet</span> Builder
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>

          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink tag={Link} to="/interiors">
                  Organizers <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/production">
                  Doors <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/styling">
                  Room Dividers <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              {/* <NavItem className="active">
                <NavLink tag={Link} to="/blawg">
                  About Us <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem> */}
              <NavItem>
                {/* <Button tag={Link} to="/signup" color="#fff">
                  Contact
                </Button> */}
                <ContactModal />
              </NavItem>
              <NavItem>
                <SignIn />
              </NavItem>
              <NavItem className="active">
                <NavLink tag={Link} to="/blawg" disabled>
                  {/* About Us <span className="sr-only">(current)</span> */}
                  201-<span style={{ color: "#F5593D" }}>766</span>-4361
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
