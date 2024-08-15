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
                style={{ perspective: "400px" }}
              >
                <div
                  className="text-6xl"
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
                className="text-6xl"
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
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <div className="portfolio__slide-3">
                  <a href="https://axtra-next-agency.vercel.app/service-details">
                    <h3 className="portfolio__title-3">
                      Benjon <span>Website</span> 2012
                    </h3>
                    <img
                      src={portfolioImage1}
                      alt="Portfolio Image 1"
                      className="w-1/2 mx-auto"
                    />
                  </a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <div className="portfolio__slide-3">
                  <a href="https://axtra-next-agency.vercel.app/service-details">
                    <h3 className="portfolio__title-3">
                      Benjon <span>Website</span> 2012
                    </h3>
                    <img
                      src={portfolioImage2}
                      alt="Portfolio Image 2"
                      className="w-1/2 mx-auto"
                    />
                  </a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <div className="portfolio__slide-3">
                  <a href="https://axtra-next-agency.vercel.app/service-details">
                    <h3 className="portfolio__title-3">
                      Benjon <span>Website</span> 2012
                    </h3>
                    <img
                      src={portfolioImage3}
                      alt="Portfolio Image 3"
                      className="w-1/2 mx-auto"
                    />
                  </a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <div className="portfolio__slide-3">
                  <a href="https://axtra-next-agency.vercel.app/service-details">
                    <h3 className="portfolio__title-3">
                      Benjon <span>Website</span> 2012
                    </h3>
                    <img
                      src={portfolioImage4}
                      alt="Portfolio Image 4"
                      className="w-1/2 mx-auto"
                    />
                  </a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
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
