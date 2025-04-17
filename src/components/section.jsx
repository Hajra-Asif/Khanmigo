import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Section = ({ right = false, title, heading, detail, image }) => {
  // On lg+ screens: if right=true, text on left; else text on right. On xs–md: text always first.
  const textOrderLg = right ? 1 : 2;
  const imageOrderLg = right ? 2 : 1;

  return (
    <Container className="py-5">
      <Row className="align-items-center justify-content-center gy-4">
        {/* Text Column */}
        <Col
          xs={12}
          lg={6}
          className={`order-1 order-lg-${textOrderLg}`}
        >
          <h6 className="fs-4">{title}</h6>
          <h1 className="display-5 fw-bold">{heading}</h1>
          <p className="fs-5">{detail}</p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <Button variant="primary" className="fw-bold w-100 w-sm-auto">
              Get Khanmigo
            </Button>
            <Button variant="light" className="text-primary fw-bold w-100 w-sm-auto">
              Learn More
            </Button>
          </div>
        </Col>

        {/* Image Column */}
        <Col
          xs={12}
          lg={6}
          className={`order-2 order-lg-${imageOrderLg} text-center`}
        >
          <img
            src={image}
            alt={heading}
            className="img-fluid w-75"
            style={{ minWidth: '300px', maxWidth: '450px' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
