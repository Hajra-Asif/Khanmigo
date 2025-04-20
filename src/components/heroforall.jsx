import React from 'react';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const Heroforall = ({ subhead, heading, content, btnText, image, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor || 'rgb(177, 204, 253)',
      }}
      className="herocontent pt-5 px-0 px-lg-4 d-flex flex-column justify-content-center align-items-center text-center gap-5"
    >
      <motion.div
        className="content mt-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="fs-4">{subhead}</h4>
        <h1
          className="display-5 fw-semibold px-2"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h1>
        <p
          className="pt-2"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <Button variant="primary" className="p-2 p-lg-3 mt-3">
          {btnText}
        </Button>
      </motion.div>

      <motion.img
        src={image}
        className="mb-5"
        alt=""
        style={{ width: '85%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      />
    </div>
  );
};

export default Heroforall;
