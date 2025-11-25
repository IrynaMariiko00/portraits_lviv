import Hero from "~/components/Hero/Hero";
import Benefits from "~/components/Benefits/Benefits";
import FeaturedWorks from "~/components/FeaturedWorks/FeaturedWorks";
import Process from "~/components/Process/Process";
import FeaturedTestimonials from "~/components/FeaturedTestimonials/FeaturedTestimonials";
import FeaturedQuestions from "~/components/FeaturedQuestions/FeaturedQuestions";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="max-w-screen-xl mx-auto py-[92px] flex flex-col gap-[156px]">
        <Benefits />
        <FeaturedWorks />
        <FeaturedQuestions />
        <FeaturedTestimonials />
        <Process />
      </div>
    </>
  );
};

export default HomePage;
