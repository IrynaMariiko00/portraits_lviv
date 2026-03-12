import { Reveal } from "~/components/ui/Reveal";
import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { featuredQuestions } from "~/constants/addText";
import { MessageCircle, Mail, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FAQItem from "~/components/FAQItem/FAQItem";

const FAQPage = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <LiquidBackground />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <Reveal direction="up">
            <h1 className="extra-big leading-tight">
              Curious about <br />
              <span className="text-blue text-shadow-blue">the process?</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text text-gray mt-6 max-w-xl">
              Everything you need to know about getting your custom portrait,
              from photo selection to worldwide shipping.
            </p>
          </Reveal>
        </div>

        {/* FAQ List */}
        <ul className="flex flex-col gap-4 mb-24">
          {featuredQuestions.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <FAQItem question={item.question} answer={item.answer} />
            </Reveal>
          ))}
        </ul>

        {/* Grid for Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ask a Question Section */}
          <Reveal direction="right">
            <div className="glass-card p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-sm text-gray mb-8">
                  I'm here to help. Message me directly, and I'll guide you
                  through the process.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://t.me/yourusername"
                  className="flex items-center gap-2 text-blue hover:text-white transition-colors"
                >
                  <MessageCircle size={20} /> Telegram
                </a>
                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-2 text-blue hover:text-white transition-colors"
                >
                  <Mail size={20} /> Email
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  className="flex items-center gap-2 text-blue hover:text-white transition-colors"
                >
                  <Instagram size={20} /> Instagram
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick Links Section */}
          <Reveal direction="left">
            <div className="glass-card p-8 h-full bg-blue/5 border-blue/10">
              <h3 className="text-2xl font-light text-white mb-4">
                Quick Links
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  to="/price"
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <span className="text-gray group-hover:text-white">
                    Price Calculator
                  </span>
                  <ArrowRight size={18} className="text-blue" />
                </Link>
                <Link
                  to="/portfolio"
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <span className="text-gray group-hover:text-white">
                    Full Portfolio
                  </span>
                  <ArrowRight size={18} className="text-blue" />
                </Link>
                <Link
                  to="/testimonials"
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <span className="text-gray group-hover:text-white">
                    Client Reviews
                  </span>
                  <ArrowRight size={18} className="text-blue" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
