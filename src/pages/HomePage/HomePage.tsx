import Hero from "~/components/Hero/Hero";
import Benefits from "~/components/Benefits/Benefits";
import FeaturedWorks from "~/components/FeaturedWorks/FeaturedWorks";
import Process from "~/components/Process/Process";
import FeaturedTestimonials from "~/components/FeaturedTestimonials/FeaturedTestimonials";
import FeaturedQuestions from "~/components/FeaturedQuestions/FeaturedQuestions";
import TextSection from "~/components/TextSection/TextSection";
import { emotions, momentsToRemember, myPhilosophy } from "~/constants/addText";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="max-w-screen-xl mx-auto py-[92px] flex flex-col gap-[126px]">
        <Benefits />
        <TextSection
          title={emotions.title}
          description={emotions.description}
        />
        <FeaturedWorks />
        <TextSection
          title={myPhilosophy.title}
          description={myPhilosophy.description}
        />
        <FeaturedTestimonials />
        <FeaturedQuestions />
        <TextSection
          title={momentsToRemember.title}
          description={momentsToRemember.description}
        />
        <Process />
      </div>
    </>
  );
};

export default HomePage;
