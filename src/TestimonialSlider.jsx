import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, Image } from "react-bootstrap";
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



export  function TestimonialSlider({ heading, para }) {
  return (
    <div className="mt-5 testimonial-section py-5" style={{ backgroundColor: "#f4eee2" }}>
      <h2 className="pt-5 text-center display-5 fw-semibold px-0 px-lg-5 mx-auto" style={{width : "80%"}}>{heading}</h2>
      <p className="text-center mb-4 mx-auto  px-2 px-lg-5" >{para}</p>

      <Container>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundColor: item.bg,
                  borderRadius: "1rem",
                  padding: "2rem",
                  minHeight: "300px",
                  transition: "all 0.4s ease",
                }}
              >
                <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                  “{item.quote}”
                </p>
                <div className="d-flex align-items-center mt-4">
                  <Image
                    src={item.image}
                    roundedCircle
                    width={60}
                    height={60}
                    className="me-3"
                  />
                  <div>
                    <h5 className="mb-0">{item.name}</h5>
                    <small className="text-muted">{item.title}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default TestimonialSlider