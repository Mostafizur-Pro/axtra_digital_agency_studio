import React from "react";
import brand1 from "../../../assets/largest_brands/1.webp";
import brand2 from "../../../assets/largest_brands/2.webp";
import brand3 from "../../../assets/largest_brands/3.webp";
import brand4 from "../../../assets/largest_brands/4.webp";
import brand5 from "../../../assets/largest_brands/5.webp";
import brand6 from "../../../assets/largest_brands/6.webp";

const LargestBrands = () => {
  const brands = [
    { src: brand1, alt: "Brand Logo 1", width: 97, height: 67 },
    { src: brand2, alt: "Brand Logo 2", width: 85, height: 67 },
    { src: brand3, alt: "Brand Logo 3", width: 114, height: 64 },
    { src: brand4, alt: "Brand Logo 4", width: 82, height: 70 },
    { src: brand5, alt: "Brand Logo 5", width: 115, height: 67 },
    { src: brand6, alt: "Brand Logo 6", width: 121, height: 63 },
  ];

  return (
    <section className="brand__area">
      <div className="container pt-140 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <h2
              className="brand__title-3 title-anim"
              style={{ perspective: "400px" }}
            >
              <div
                style={{
                  display: "block",
                  textAlign: "center",
                  position: "relative",
                  transform: "translate3d(0px, 0px, 0px)",
                  opacity: 1,
                }}
              >
                We worked with global largest brands
              </div>
            </h2>
            <div className="brand__list-3">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="brand__item-2 fade_bottom"
                  style={{ opacity: 1 }}
                >
                  <img
                    alt={brand.alt}
                    width={brand.width}
                    height={brand.height}
                    decoding="async"
                    src={brand.src}
                    style={{ color: "transparent" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargestBrands;
