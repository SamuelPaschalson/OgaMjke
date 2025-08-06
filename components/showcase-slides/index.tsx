import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowcaseSlides = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <Image
            src="/showcase.png"
            width={700}
            height={700}
            alt={"showcase"}
          />
        </div>

        <div>
          <Image
            src="/showcase-2.svg"
            width={700}
            height={700}
            className="!min-h-full !min-w-full relative lg:top-12 top-0"
            alt={"showcase"}
          />
        </div>
      </Slider>
    </>
  );
};

export default ShowcaseSlides;
