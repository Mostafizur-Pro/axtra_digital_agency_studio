import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    name: "Maria D. Halk",
    role: "Managing Director",
  },
  {
    text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    name: "Maria D. Halk",
    role: "Managing Director",
  },
  {
    text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    name: "Maria D. Halk",
    role: "Managing Director",
  },
  {
    text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    name: "Maria D. Halk",
    role: "Managing Director",
  },
  {
    text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    name: "Maria D. Halk",
    role: "Managing Director",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial__area-3">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
              pagination={{ clickable: true }}
              className="testimonial__slider-3"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial__slide-3">
                    <p>{testimonial.text}</p>
                    <h2 className="client__name-3">{testimonial.name}</h2>
                    <h3 className="client__role-3">{testimonial.role}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonial__images-3 animation_image_zoom">
              <img
                alt="testimonial Image"
                width="170"
                height="200"
                className="testimonial3__img"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5fcd9521.jpg&w=256&q=75"
              />
              <img
                alt="testimonial Image"
                width="90"
                height="100"
                className="testimonial3__img-2"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.44563823.jpg&w=96&q=75"
              />
              <img
                alt="testimonial Image"
                width="110"
                height="130"
                className="testimonial3__img-3"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.82004ae1.jpg&w=128&q=75"
              />
              <img
                alt="testimonial Image"
                width="330"
                height="430"
                className="testimonial3__img-4"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.632d09dc.jpg&w=384&q=75"
              />
              <img
                alt="testimonial Image"
                width="245"
                height="278"
                className="testimonial3__img-5"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.83e5f14f.jpg&w=256&q=75"
              />
              <img
                alt="testimonial Image"
                width="140"
                height="160"
                className="testimonial3__img-6"
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=256&q=75"
              />
            </div>
            <div className="swiper-btn">
              <div className="prev-button swipper-btn">
                <FaArrowLeft aria-hidden="true" />
              </div>
              <div className="next-button swipper-btn">
                <FaArrowRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
