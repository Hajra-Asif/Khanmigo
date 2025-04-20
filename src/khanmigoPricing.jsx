import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function KhanmigoPricing() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 fw-semibold display-6 mt-5">
        Sign up for unlimited, always-<br />available tutoring.
      </h1>
      
      <Card className="border-0 pricingcard p-5">
        <Card.Body className="p-1 p-md-5">
          <Row>
            {/* Left Column - Pricing */}
            <Col md={4} className="mb-4 mb-md-0">
              <h4 className="fw-bold">Khanmigo for families</h4>
              
              <div className="mt-3">
                <span className="fs-1 fw-bold">$4/month</span>
                <div className="d-flex align-items-center mt-1 mb-3">
                  <span className="me-2 fw-bold">$44/year</span>
                  <span 
                    className="px-2 py-1 rounded-pill text-white"
                    style={{ backgroundColor: '#0d6efd', fontSize: '0.8rem' }}
                  >
                    Save $4 w/ annual
                  </span>
                </div>
              </div>
            </Col>
            
            {/* Right Column - Features */}
            <Col md={8}>
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <BsCheck className="text-dark me-2 mt-1" size={20} />
                  <span>Master skills with personalized tutoring on Khan Academy's world-class content.</span>
                </li>
                <li className="d-flex mb-3">
                  <BsCheck className="text-dark me-2 mt-1" size={20} />
                  <span>Write and debate with guided prompts and immediate feedback.</span>
                </li>
                <li className="d-flex mb-3">
                  <BsCheck className="text-dark me-2 mt-1" size={20} />
                  <span>Navigate college admissions with personalized coaching.</span>
                </li>
                <li className="d-flex mb-3">
                  <BsCheck className="text-dark me-2 mt-1" size={20} />
                  <span>Hone coding skills with real-time feedback.</span>
                </li>
                <li className="d-flex mb-3">
                  <BsCheck className="text-dark me-2 mt-1" size={20} />
                  <span>Add children from your parent account.</span>
                </li>
                <li className="d-flex mb-3">
                  <BsCheck className="text-dark me-2 mt-1" size={20} />
                  <span>View the history of your children's interactions and get moderation alerts.</span>
                </li>
              </ul>
            </Col>
          </Row>
          
          {/* Footer */}
          <Row className="mt-4">
            <Col md={8}>
              <p className="text-muted small mb-0">
                *Sales tax not included in Khanmigo pricing.
              </p>
              <p className="text-muted small">
                Khanmigo uses GPT-4, and every interaction has costs. Your payment helps cover these costs and supports Khan Academy's work to bring educational innovations and AI to communities that traditionally get left behind.
              </p>
            </Col>
            <Col md={4} className="d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
              <Button variant="primary" size="lg" className="px-4 w-100">
                Get Khanmigo
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}