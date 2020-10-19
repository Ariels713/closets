import React from "react";
// react plugin used to create an image gallery
import { PhotoSwipeGallery } from "react-photoswipe";
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

// PhotoSwipe items

let options = {
  //http://photoswipe.com/documentation/options.html
};

let getThumbnailContent = (item) => {
  return (
    <div
      className="gallery-item"
      itemProp="associatedMedia"
      itemScope=""
      itemType="http://schema.org/ImageObject"
    >
      <a data-size="750x1002" href={item.src} itemProp="contentUrl">
        <img
          alt="..."
          className="vertical-image img-rounded img-responsive"
          itemProp="thumbnail"
          src={item.src}
        />
      </a>
      <figcaption className="gallery-caption" itemProp="caption description">
        {item.title}
      </figcaption>
    </div>
  );
};

const photoSwipeItems = [
  {
    src: require("../../assets/images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg"),
    title: "Title",
    w: "750",
    h: "1002",
  },
  {
    src: require("../../assets/images/pexels-nugroho-wahyu-3119164.jpg"),
    title: "Title",
    w: "750",
    h: "1002",
  },
  {
    src: require("../../assets/images/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg"),
    title: "Title",
    w: "750",
    h: "1002",
  },
  {
    src: require("../../assets/images/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg"),
    title: "Title",
    w: "750",
    h: "1002",
  },
  {
    src: require("../../assets/images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg"),
    title: "Title",
    w: "960",
    h: "800",
  },
  {
    src: require("../../assets/images/pexels-nugroho-wahyu-3119164.jpg"),
    title: "Sample Title",
    w: "960",
    h: "800",
  },
  {
    src: require("../../assets/images/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg"),
    title: "Sample Title",
    w: "960",
    h: "800",
  },
  {
    src: require("../../assets/images/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg"),
    title: "Sample Title",
    w: "960",
    h: "800",
  },
];

function PhotoGallary() {
  return (
    <>
      <Container>
        <h3 className="section-title">Latest Offers</h3>
        <Row>
          <PhotoSwipeGallery
            items={photoSwipeItems}
            options={options}
            thumbnailContent={getThumbnailContent}
          />
        </Row>
      </Container>
    </>
  );
}

export default PhotoGallary;
