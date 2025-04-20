import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const Section = ({ right = false, title, heading, detail, image }) => {
  const textOrderLg = right ? 1 : 2;
  const imageOrderLg = right ? 2 : 1;

  return (
    <Container className="py-5">
      <Row className="align-items-center justify-content-center gy-4">
        
        {/* Text Column with Scroll Animation */}
        <Col
          xs={12}
          lg={6}
          className={`order-1 order-lg-${textOrderLg} px-4`}
        >
          <motion.div
            initial={{ opacity: 0, x: right ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h6 className="fs-4">{title}</h6>
            <h1 className="display-5 fw-bold">{heading}</h1>
            <p className="fs-5">{detail}</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button variant="primary" className="fw-bold w-100 w-sm-auto" href='https://www.khanacademy.org/signup?continue=%2Fkhanmigo%2Fcheckout&referral=KhanmigoSignup'>
                Get Khanmigo
              </Button>
              <Button variant="light" className="text-primary fw-bold w-100 w-sm-auto" href="https://www.khanacademy.org/signup?continue=%2Fkhanmigo%2Fcheckout&referral=KhanmigoSignup">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Col>

        {/* Image Column with Scroll Animation */}
        <Col
          xs={12}
          lg={6}
          className={`order-2 order-lg-${imageOrderLg} text-center px-4`}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
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

