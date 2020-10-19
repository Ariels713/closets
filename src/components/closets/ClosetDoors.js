import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

function Ecommerce() {
  return (
    <>
      <div className="section latest-offers section-gray">
        <Container>
          <h3 className="section-title">Latest Offers</h3>
          <Row>
            <Col md="4">
              <Card className="card-product card-plain">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("../../assets/images/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg")}
                    />
                  </a>
                  <CardBody>
                    <div className="card-description">
                      <CardTitle tag="h5">Sliding Closet Door</CardTitle>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </p>
                    </div>
                    <div className="price">
                      <s className="mr-1">$3,520 </s>
                      <span className="text-danger">$2,900</span>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-product card-plain">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("../../assets/images/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg")}
                    />
                  </a>
                  <CardBody>
                    <div className="card-description">
                      <CardTitle tag="h5">Closet Organizer</CardTitle>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </p>
                    </div>
                    <div className="price">
                      <span>$90</span>
                      {/* <span className="text-danger">2.000 €</span> */}
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-product card-plain">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("../../assets/images/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg")}
                    />
                  </a>
                  <CardBody>
                    <div className="card-description">
                      <CardTitle tag="h5">Custom Doors</CardTitle>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </p>
                    </div>
                    <div className="price">
                      <s className="mr-1">$100</s>
                      <span className="text-danger">$90</span>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Ecommerce;
