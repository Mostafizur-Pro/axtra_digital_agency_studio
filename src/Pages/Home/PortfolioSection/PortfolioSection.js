import React from "react";

import portfolioImage1 from "../../../assets/portfolioSection/1.webp";
import portfolioImage2 from "../../../assets/portfolioSection/2.webp";
import portfolioImage3 from "../../../assets/portfolioSection/3.webp";
import portfolioImage4 from "../../../assets/portfolioSection/4.webp";

const PortfolioSection = () => {
  return (
    <section className="portfolio__area-3">
      <div className="container pt-100 pb-150">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2
                className="sec-sub-title title-anim"
                style={{
                  perspective: "400px",
                }}
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
                  Featured
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
                  Work
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12 portfolio__slider-3">
            <div
              className="swiper-container"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide"
                  style={{
                    width: "1296px",
                  }}
                >
                  <div className="portfolio__slide-3">
                    <a href="https://axtra-next-agency.vercel.app/service-details">
                      <h3 className="portfolio__title-3">
                        Benjon <span>Website</span> 2012
                      </h3>
                      <img
                        alt="Portfolio Image"
                        width="550"
                        height="670"
                        decoding="async"
                        style={{
                          color: "transparent",
                          height: "auto",
                        }}
                        src={portfolioImage1}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    width: "1296px",
                  }}
                >
                  <div className="portfolio__slide-3">
                    <a href="https://axtra-next-agency.vercel.app/service-details">
                      <h3 className="portfolio__title-3">
                        Benjon <span>Website</span> 2012
                      </h3>
                      <img
                        alt="Portfolio Image"
                        width="550"
                        height="670"
                        decoding="async"
                        style={{
                          color: "transparent",
                          height: "auto",
                        }}
                        src={portfolioImage2}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    width: "1296px",
                  }}
                >
                  <div className="portfolio__slide-3">
                    <a href="https://axtra-next-agency.vercel.app/service-details">
                      <h3 className="portfolio__title-3">
                        Benjon <span>Website</span> 2012
                      </h3>
                      <img
                        alt="Portfolio Image"
                        width="550"
                        height="670"
                        decoding="async"
                        style={{
                          color: "transparent",
                          height: "auto",
                        }}
                        src={portfolioImage3}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    width: "1296px",
                  }}
                >
                  <div className="portfolio__slide-3">
                    <a href="https://axtra-next-agency.vercel.app/service-details">
                      <h3 className="portfolio__title-3">
                        Benjon <span>Website</span> 2012
                      </h3>
                      <img
                        alt="Portfolio Image"
                        width="550"
                        height="670"
                        decoding="async"
                        style={{
                          color: "transparent",
                          height: "auto",
                        }}
                        src={portfolioImage4}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                <span className="swiper-pagination-current">2</span> /{" "}
                <span className="swiper-pagination-total">4</span>
              </div>
              <div className="swiper-btn">
                <div className="pp-prev" style={{ cursor: "pointer" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-left"
                    className="svg-inline--fa fa-arrow-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    ></path>
                  </svg>
                </div>
                <div className="pp-next" style={{ cursor: "pointer" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
