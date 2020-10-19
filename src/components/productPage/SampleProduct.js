import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledCollapse,
  FormGroup,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  Badge,
} from "reactstrap";

// core components

// carousel items
const carouselItems = [
  {
    src: require("../../assets/images/pexels-nugroho-wahyu-3119164.jpg"),
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("../../assets/images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg"),
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("../../assets/images/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg"),
    altText: "Here it is",
    caption: "Here it is",
  },
  {
    src: require("../../assets/images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg"),
    altText: "Here it is",
    caption: "Here it is",
  },
];

function ProductPage() {
  // collapse states and functions
  const [collapseOne, setCollapseOne] = React.useState(false);
  const [collapseTwo, setCollapseTwo] = React.useState(false);
  const [collapseThree, setCollapseThree] = React.useState(false);
  // react-select states
  const [colorSelect, setColorSelect] = React.useState({
    value: "1",
    label: "Black ",
  });
  const [sizeSelect, setSizeSelect] = React.useState({
    value: "1",
    label: "Small ",
  });
  // carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("product-page");
    return function cleanup() {
      document.body.classList.remove("product-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="section">
          <Container>
            <Row className="title-row">
              <Col md="2">
                <h4 className="shop">Ecommerce Sample</h4>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="pull-right">
                  <span className="text-muted">Order Status</span>
                  <Button color="link">
                    <i className="fa fa-shopping-cart" /> 0 Items
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="7" sm="6">
                <div className="ml-auto mr-auto" id="carousel">
                  <Card className="page-carousel">
                    <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                    >
                      <CarouselIndicators
                        items={carouselItems}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                      />
                      {carouselItems.map((item) => {
                        return (
                          <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={item.src}
                          >
                            <img src={item.src} alt={item.altText} />
                            <CarouselCaption
                              captionText={item.caption}
                              captionHeader=""
                            />
                          </CarouselItem>
                        );
                      })}
                      <a
                        className="left carousel-control carousel-control-prev"
                        data-slide="prev"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          previous();
                        }}
                        role="button"
                      >
                        <span className="fa fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control carousel-control-next"
                        data-slide="next"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          next();
                        }}
                        role="button"
                      >
                        <span className="fa fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </Carousel>
                  </Card>
                </div>
                {/* end carousel */}
              </Col>
              <Col md="5" sm="6">
                <h2>Closet Door</h2>
                <h4 className="price">
                  <strong>$1,000</strong>
                </h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut magna aliqua.
                </p>
                <Badge color="danger" pill>
                  Installation Included
                </Badge>{" "}
                <Row>
                  <Col md="6" sm="6">
                    <label>Select color</label>
                    <FormGroup>
                      <Select
                        className="react-select react-select-default"
                        classNamePrefix="react-select"
                        name="colorSelect"
                        value={colorSelect}
                        onChange={(value) => setColorSelect(value)}
                        options={[
                          { value: "1", label: "Black " },
                          { value: "2", label: "Gray" },
                          { value: "3", label: "White" },
                        ]}
                        placeholder="COLOR"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="6">
                    <label>Select size</label>
                    <FormGroup>
                      <Select
                        className="react-select react-select-default"
                        classNamePrefix="react-select"
                        name="sizeSelect"
                        value={sizeSelect}
                        onChange={(value) => setSizeSelect(value)}
                        options={[
                          { value: "1", label: "Small " },
                          { value: "2", label: "Medium" },
                          { value: "3", label: "Large" },
                        ]}
                        placeholder="SIZE"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="offset-md-5" md="7" sm="8">
                    <Button block className="btn-round" color="danger">
                      Add to Cart  <i className="fa fa-chevron-right" />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="card-body-row">
              <Col md="4" sm="4">
                <div className="info">
                  <div className="icon icon-warning">
                    <i className="nc-icon nc-delivery-fast" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">2 Days Delivery</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="4">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-credit-card" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Refundable Policy</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="4">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Popular Item</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing.{" "}
              <a
                className="link-danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Learn more.
              </a>
            </p>
            <hr />
            <div className="faq">
              <h4>Frequently Asked Questions</h4>
              <br />
              <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                  <Card className="no-transition">
                    <CardHeader
                      className="card-collapse"
                      id="headingOne"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapseOne}
                          href="#pablo"
                          id="collapseOne"
                          onClick={(e) => {
                            e.preventDefault();
                            setCollapseOne(!collapseOne);
                          }}
                        >
                          Default Collapsible Item 1{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <UncontrolledCollapse
                      aria-labelledby="headingOne"
                      role="tabpanel"
                      toggler="#collapseOne"
                    >
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </CardBody>
                    </UncontrolledCollapse>
                    <CardHeader
                      className="card-collapse"
                      id="headingTwo"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapseTwo}
                          href="#pablo"
                          id="collapseTwo"
                          onClick={(e) => {
                            e.preventDefault();
                            setCollapseTwo(!collapseTwo);
                          }}
                        >
                          Default Collapsible Item 2{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <UncontrolledCollapse
                      aria-labelledby="headingTwo"
                      role="tabpanel"
                      toggler="#collapseTwo"
                    >
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </CardBody>
                    </UncontrolledCollapse>
                    <CardHeader
                      className="card-collapse"
                      id="headingThree"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapseThree}
                          href="#pablo"
                          id="collapseThree"
                          onClick={(e) => {
                            e.preventDefault();
                            setCollapseThree(!collapseThree);
                          }}
                        >
                          Default Collapsible Item 3{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <UncontrolledCollapse
                      aria-labelledby="headingThree"
                      role="tabpanel"
                      toggler="#collapseThree"
                    >
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                </div>
                {/* end acordeon */}
              </div>
            </div>
            <Row className="add-row">
              <Col md="4" sm="4">
                <h4>Product Info Section</h4>
              </Col>
              <Col md="4" sm="4">
                <h5>Custom Doors</h5>
                <p className="price">
                  <strong>$100</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <br />
                <Button className="btn-round" color="danger">
                  Add to Cart
                </Button>
              </Col>
              <Col className="ml-auto" md="3" sm="4">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/images/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg")}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark">
          <Container>
            <Row>
              <Col md="12">
                <h4>Additional Product Display</h4>
                <br />
              </Col>
              <Col md="4" sm="4">
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
                        <CardTitle tag="h5">Lorem ipsum dolor sit.</CardTitle>
                        <p className="card-description">Test Item</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">FREE</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md="4" sm="4">
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
                        <CardTitle tag="h5">Lorem ipsum dolor sit.</CardTitle>
                        <p className="card-description">Test Item</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">FREE</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>{" "}
              <Col md="4" sm="4">
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
                        <CardTitle tag="h5">Lorem ipsum dolor sit.</CardTitle>
                        <p className="card-description">Test Item</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">FREE</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>{" "}
              <Col md="4" sm="4">
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
                        <CardTitle tag="h5">Lorem ipsum dolor sit.</CardTitle>
                        <p className="card-description">Test Item</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">FREE</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>{" "}
              <Col md="4" sm="4">
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
                        <CardTitle tag="h5">Lorem ipsum dolor sit.</CardTitle>
                        <p className="card-description">Test Item</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">FREE</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>{" "}
              <Col md="4" sm="4">
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
                        <CardTitle tag="h5">Lorem ipsum dolor sit.</CardTitle>
                        <p className="card-description">Test Item</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">FREE</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
