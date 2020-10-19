import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function MainSectionContent() {
  return (
    <>
      <div className="section section-feature cd-section" id="features">
        {/* ********* FEATURES 1 ********* */}
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Nevato Difference</h2>
                <h5 className="description">
                  <strong>
                    Your home and work space tell a story, and you are the
                    storyteller. The story is how your home or office serves
                    your life, and how your lifestyle transforms to adapt to
                    changes with your family and career.
                  </strong>
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-spaceship" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Custom Doors</h4>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Affordable</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-delivery-fast" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 1 ********* */}
      </div>
    </>
  );
}

export default MainSectionContent;
