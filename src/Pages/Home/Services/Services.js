import React from "react";
// Consider importing images locally if possible
import serviceImage1 from "../../../assets/service/1.jpg";
import serviceImage2 from "../../../assets/service/2.png";
import serviceImage3 from "../../../assets/service/3.png";
import serviceImage4 from "../../../assets/service/4.png";

const services = [
  {
    title: "Search Engine Optimization",
    link: "https://axtra-next-agency.vercel.app/service-details",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
    image: serviceImage1,
  },
  {
    title: "Email Marketing",
    link: "https://axtra-next-agency.vercel.app/service-details",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
    image: serviceImage2,
  },
  {
    title: "Content Marketing",
    link: "https://axtra-next-agency.vercel.app/service-details",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
    image: serviceImage3,
  },
  {
    title: "Social Marketing",
    link: "https://axtra-next-agency.vercel.app/service-details",
    description:
      "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
    features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
    image: serviceImage4,
  },
];

const ServicesSection = () => {
  return (
    <section className="service__area-3 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper pt-130 text-anim">
              <h2
                className="sec-sub-title title-anim"
                style={{ perspective: "400px" }}
              >
                <div
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Services
                </div>
              </h2>
              <h3
                className="sec-title title-anim"
                style={{ perspective: "400px" }}
              >
                <div
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Our marketing
                </div>
                <div
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Services
                </div>
              </h3>
              <p style={{ perspective: "400px" }}>
                <div
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Consumers today rely heavily on digital means to research
                  products. We research a brand of blend engaging with it,
                  according to the meanwhile, 51% of consumers say they use
                  Google to research products before buying.
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xx-12">
            <div className="service__list-3">
              {services.map((service, index) => (
                <div key={index} className="service__item-3 service_animation">
                  <h3>
                    <a className="service__title-3" href={service.link}>
                      {service.title}
                    </a>
                  </h3>
                  <div className="service__content-3">
                    <p>{service.description}</p>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <a
                        className="wc-btn-black btn-hover btn-item"
                        href={service.link}
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="service3__img-wrap">
              <div className="service3__img"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
