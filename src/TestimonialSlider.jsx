import React from "react";
import { Carousel, Container, Row, Col, Card, Image } from "react-bootstrap";
import "./App.css"; // Optional, for custom CSS

const testimonials = [
  {
    quote:
      "Khanmigo's Rubric Generator allowed me to incorporate our actual unit plans and objectives to construct a rubric from scratch. A task that would normally take me about an hour was now completed in no more than 15 minutes.",
    name: "Ms. Bartsch",
    title: "High school English teacher",
    image: "/assets/bartsch.png", // Image in public/assets folder
    bg: "#feebc8", // Light yellow background
  },
  {
    quote:
      "Khanmigo, the GPT-4-powered chatbot by @khanacademy, has been blowing my mind. It's SO good! It will walk you through the solution and ask questions so you can work it out yourself rather than just get the answer.",
    name: "Dani Guardiola",
    title: "@daniguardio_la",
    image: "/assets/dani.png", // Image in public/assets folder
    bg: "#fff", // White background
  },
  {
    quote:
      "It has changed the way I homeschool. I love how it makes the kids explain ‘why’ constantly. Way better than trying to figure it out from materials alone.",
    name: "Katie",
    title: "Homeschool parent",
    image: "/assets/katie.png", // Image in public/assets folder
    bg: "#e9d8fd", // Light purple background
  },
];

export function TestimonialSlider() {
  return (
  <div className="mt-5 maindiv p-0 p-lg-5" style={{backgroundColor : "#f4eee2"}}>
    <h2 className="display-5 text-center fw-meduim">Praise for Khanmigo</h2>
      <Container className="my-5">
      <Carousel indicators={true} controls={true} interval={null}>
        {testimonials.map((item, index) => (
          <Carousel.Item key={index}>
            <Row className="d-flex justify-content-center">
              <Col md={8}>
                <div
                  style={{
                    backgroundColor: item.bg,
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    minHeight: "300px",
                  }}
                >
                  <Card className="border-0 bg-transparent">
                    <Card.Body>
                      <Card.Text style={{ fontSize: "1.1rem" }}>
                        “{item.quote}”
                      </Card.Text>
                      <div className="d-flex align-items-center mt-4">
                        <Image
                          src={item.image}
                          roundedCircle
                          width={50}
                          height={50}
                          className="me-3"
                        />
                        <div>
                          <div className="fw-semibold">{item.name}</div>
                          <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                            {item.title}
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </div>
  );
}

// export default TestimonialSlider