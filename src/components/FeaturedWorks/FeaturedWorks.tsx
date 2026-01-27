import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "~/index.css";
import "@splidejs/react-splide/css";
import { useState } from "react";
import { featuredImages } from "~/constants/featuredImages";
import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";
import { ArrowRight } from "lucide-react";

const FeaturedWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col justify-center mx-[auto]">
      <Reveal direction="up" duration={0.8}>
        <h1 className="title">
          Featured <span className="text-blue">Works</span>
        </h1>
      </Reveal>
      <Reveal
        direction="up"
        delay={0.2}
        duration={0.8}
        className="flex items-center justify-between"
      >
        <div className="flex flex-col gap-[8px] mb-[48px]">
          <h3 className="subtitle">
            Our <span className="text-blue">Best Portraits</span>
          </h3>
          <p className="subtitle">
            Check out a selection of our most loved portrait works by our
            clients.
          </p>
        </div>
        <Link to="/" className="glass-btn group arrow-right">
          View Full Gallery
          <ArrowRight className="arrow" size={18} />
        </Link>
      </Reveal>
      <Splide
        className="relative overflow-visible max-w-[1100px] mx-auto"
        options={{
          type: "loop",
          perPage: 3,
          focus: "center",
          gap: "30px",
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          resetProgress: false,
        }}
        onMove={(splide: SplideInstance) => setActiveIndex(splide.index)}
      >
        {featuredImages.map((img, i) => {
          const isActive = i === activeIndex;
          return (
            <SplideSlide
              key={i}
              className={`relative transition-transform duration-300 group origin-center${
                isActive ? "scale-110 z-10" : "scale-95"
              }`}
            >
              <img
                src={img}
                alt={`Image ${i + 1}`}
                className="w-96 h-[496px] object-cover rounded-xl"
              />
              <div className="card-overlay" />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default FeaturedWorks;
