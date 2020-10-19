import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    src:
      "url(" +
      require("../../assets/images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg") +
      ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto text-right" md="7">
            <h2 className="title">Closet Organizers</h2>
            <h5>
              Where Elegance and Functionality meet! Add space for extra drawers
              and a countertop to display your jewelry, or make it a low bench
              for seating - either way, your custom closet will feel like a
              boutique!
            </h5>
            <br />
            <div className="buttons">
              {/* <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-share-alt" />
                Share Offer
              </Button> */}
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                {/* <i className="fa fa-shopping-cart" /> */}
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("../../assets/images/pexels-nugroho-wahyu-3119164.jpg") +
      ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto text-right" md="7">
            <h2 className="title">Closet Doors</h2>
            <h5>
              Obviously a necessity for privacy, security, and containment
              purposes, every room, home, office or closet needs a door.
              However, most doors "interrupt" the decor and flow of a room.
            </h5>
            <br />
            <div className="buttons">
              {/* <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-share-alt" />
                Share Offer
              </Button> */}
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                {/* <i className="fa fa-shopping-cart" /> */}
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("../../assets/images/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg") +
      ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto text-right" md="7">
            <h2 className="title">Room Dividers</h2>
            <h5>
              Do you need to do more with less? Have your space requirements
              changed and you need to turn one room into two? The answer may be
              a custom room divider!
            </h5>
            <br />
            <div className="buttons">
              {/* <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-share-alt" />
                Share Offer
              </Button> */}
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                {/* <i className="fa fa-shopping-cart" /> */}
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
];

function SectionHeader() {
  // carousel - header 3
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
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // video - header 4
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const videoRef = React.createRef();
  const videoButtonClick = () => {
    if (videoPlaying) {
      setVideoPlaying(false);
      videoRef.current.pause();
    } else {
      setVideoPlaying(true);
      videoRef.current.play();
    }
  };
  return (
    <>
      <div className="section section-header cd-section" id="headers">
        {/* ********* HEADER 3 ********* */}
        <div className="header-3">
          <div className="page-carousel">
            <div className="filter" />
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <div
                      className="page-header"
                      style={{ backgroundImage: item.src }}
                    >
                      <div className="filter" />
                      <div className="content-center">{item.content}</div>
                    </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
