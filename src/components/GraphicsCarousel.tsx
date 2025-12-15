import { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";

import { graphics } from "../data/graphics";
import "../styles/GraphicsCarousel.css";

const GROUP_NAME = "graphics";
const GROUP_SELECTOR = `[data-fancybox='${GROUP_NAME}']`;

function GraphicsCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    Fancybox.bind(GROUP_SELECTOR);

    return () => {
      Fancybox.unbind(GROUP_SELECTOR);
      Fancybox.close();
    };
  }, []);

  const handlePrev = () => {
   const swiper = swiperRef.current;
  if (!swiper) return;

  swiper.autoplay?.stop();
  swiper.slideToClosest(250);
  swiper.slidePrev(350);
  };

  const handleNext = () => {
  const swiper = swiperRef.current;
  if (!swiper) return;

  swiper.autoplay?.stop();
  swiper.slideToClosest(250);
  swiper.slideNext(350);
  };

  return (
    <div className="graphics-carousel">
      <div className="graphics-frame">
        <button
          type="button"
          className="graphics-nav graphics-nav--prev"
          aria-label="Image précédente"
          onClick={handlePrev}
        />
        <button
          type="button"
          className="graphics-nav graphics-nav--next"
          aria-label="Image suivante"
          onClick={handleNext}
        />

        <Swiper
          modules={[Autoplay, FreeMode]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}          
          freeMode={{ enabled: true, sticky: false }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          speed={19000}
          slidesPerView="auto"
          breakpoints={{
    0: { spaceBetween: 10 },
    768: { spaceBetween: 12 },
    1100: { spaceBetween: 16 },
  }}
          className="graphics-swiper"
        >
          {graphics.map((item) => (
            <SwiperSlide key={item.id} className="graphics-slide">
              <a
                href={item.fullSrc}
                data-fancybox={GROUP_NAME}
                data-caption={item.alt}
                className="graphics-link"
              >
                <img
                  src={item.thumbSrc}
                  alt={item.alt}
                  loading="lazy"
                  className="graphics-thumb"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GraphicsCarousel;
