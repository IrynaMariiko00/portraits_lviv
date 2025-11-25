import { featuredQuestions } from "~/constants/questions";
import FAQItem from "../FAQItem/FAQItem";

const FeaturedQuestions = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="title flex justify-center">
        Frequently Asked&nbsp;<span className="text-blue">Questions</span>
      </h1>
      <ul className="flex flex-col gap-[10px] w-[80%] mx-auto">
        {featuredQuestions.map((item, i) => (
          <FAQItem key={i} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedQuestions;
