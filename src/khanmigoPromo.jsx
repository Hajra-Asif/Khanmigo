import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircleFill } from 'react-icons/bs';


export default function KhanmigoPromo() {
  return (
    <div className="p-1 p-lg-5 mt-5 khansection">
      <h1 className="text-center mb-5 fw-semibold mt-5">Khanmigo outshines all other AI chatbots.</h1>
      
      <Row className="gap-5 pt-5 d-flex justify-content-center">
        {/* Left Feature Box */}
        <Col md={5} className='p-5' style={{backgroundColor : "#fee7ad", borderRadius : "40px"}}>
          <Card className="h-100 border-0" style={{ backgroundColor: '#FFF9C4' }}>
            <Card.Body className="d-flex flex-column">
             <img src="/assets/parent4.png" className='w-25 mx-auto mt-0' alt="" />
              
              {/* Feature List */}
              <div className="mb-4 pt-5">
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <BsCheckCircleFill  color="#1565C0" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Instant homework help</h5>
                    <p className="mb-0">Khanmigo is your magic wand that makes homework woes disappear.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <BsCheckCircleFill  color="#1565C0" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Deep learning, no answers</h5>
                    <p className="mb-0">Unlike ChatGPT, Khanmigo never gives the answer. It's built to help your child learn.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <BsCheckCircleFill  color="#1565C0" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Always-available tutoring</h5>
                    <p className="mb-0">Tailored support, engaging lessons, and parental peace of mind</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <Button variant="primary" size="lg" className="mt-auto">Get Khanmigo</Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Right Testimonial Box */}
        <Col md={5} className='p-5' style={{backgroundColor : "#febfb1", borderRadius : "40px"}}>
          <Card className="h-100 border-0" style={{ backgroundColor: '#FFCDD2' }}>
            <Card.Body className="d-flex flex-column">
              <div className="mb-4">
                <p className="fs-5">
                  "It has completely revolutionized our homeschool. We ask it questions and follow-up questions and then more follow-up questions when our textbooks don't provide enough explanation. It is perfect for a family that asks 'why' constantly. It is so much more time-efficient than trying to piece together intelligent answers from many sources."
                </p>
              </div>
              
              <div className="mt-auto">
                <p className="fw-bold mb-0">Katie</p>
                <p className="text-muted">Homeschool parent</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}