import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectCarousel.css";

function ProjectCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    return () => {
      const swiper = swiperRef.current;
      if (swiper) swiper.autoplay?.stop();
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
    <div className="project-carousel">
      <div className="project-frame">
        <button
          type="button"
          className="project-nav project-nav--prev"
          aria-label="Projet précédent"
          onClick={handlePrev}
        />
        <button
          type="button"
          className="project-nav project-nav--next"
          aria-label="Projet suivant"
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
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="project-slide">
              <Link
                to={`/projets#${project.slug}`}
                aria-label={`Ouvrir le projet ${project.title}`}
                className="project-link"
              >
                <ProjectCard project={project} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectCarousel;
