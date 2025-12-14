import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectCarousel.css";

function ProjectCarousel() {
  return (
    <div className="project-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          740: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
