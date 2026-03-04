import Hero from "~/components/Hero/Hero";
import Benefits from "~/components/Benefits/Benefits";
import FeaturedWorks from "~/components/FeaturedWorks/FeaturedWorks";
import Process from "~/components/Process/Process";
import FeaturedTestimonials from "~/components/FeaturedTestimonials/FeaturedTestimonials";
import FeaturedQuestions from "~/components/FeaturedQuestions/FeaturedQuestions";
import { contactMeHomePage, priceEstimatorHomePage } from "~/constants/addText";
import ContactMeLink from "~/components/ContactMeLink/ContactMeLink";
import ContactMe from "~/components/ContactMe/ContactMe";
import Comparison from "~/components/Comparison/Comparison";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[80%] mx-auto py-[92px] flex flex-col gap-[196px]">
        <Benefits />
        <FeaturedWorks />
        <FeaturedTestimonials />
        <ContactMeLink
          title={contactMeHomePage.title}
          description={contactMeHomePage.description}
          link="#contact"
          button="Contact me"
        />
        <Comparison />
        <ContactMeLink
          title={priceEstimatorHomePage.title}
          description={priceEstimatorHomePage.description}
          link="/estimate"
          button="Get estimate"
        />
        <Process />
        <FeaturedQuestions />
        <ContactMe />
      </div>
    </>
  );
};

export default HomePage;
