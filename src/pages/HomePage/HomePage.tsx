import Hero from "~/components/Hero/Hero";
import Benefits from "~/components/Benefits/Benefits";
import FeaturedWorks from "~/components/FeaturedWorks/FeaturedWorks";
import Process from "~/components/Process/Process";
import FeaturedTestimonials from "~/components/FeaturedTestimonials/FeaturedTestimonials";
import FeaturedQuestions from "~/components/FeaturedQuestions/FeaturedQuestions";
import TextSection from "~/components/TextSection/TextSection";
import { contactMeHomePage, emotions, myPhilosophy } from "~/constants/addText";
import ContactMeLink from "~/components/ContactMeLink/ContactMeLink";
import ContactMe from "~/components/ContactMe/ContactMe";
import Comparison from "~/components/Comparison/Comparison";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[90%] mx-auto py-[92px] flex flex-col gap-[126px]">
        <Benefits />
        <TextSection
          title={emotions.title}
          description={emotions.description}
        />
        <FeaturedWorks />
        <ContactMeLink
          title={contactMeHomePage.title}
          description={contactMeHomePage.description}
        />
        <FeaturedTestimonials />
        <TextSection
          title={myPhilosophy.title}
          description={myPhilosophy.description}
        />
        <Comparison />
        <Process />
        <FeaturedQuestions />
        <ContactMe />
      </div>
    </>
  );
};

export default HomePage;
