import CustomDatePicker from "~/components/ui/DatePicker/DatePicker";
import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { Reveal } from "~/components/ui/Reveal";
import { formDataPage } from "~/constants/formData";

const ContactMe = () => {
  return (
    <section
      id="contact-form"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      <LiquidBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <Reveal direction="right" duration={0.8} className="max-w-xl">
            <h2 className="extra-big leading-none">
              Start Your <br />
              <span className="text-blue">Commission</span>
            </h2>
            <p className="text text-gray leading-relaxed mt-4">
              Just fill out a short and simple form, and I’ll get in touch with
              you soon.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.4}>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 glass-card bg-[var(--color-glass-bg)] p-8 md:p-12">
            {formDataPage.map(({ label, input }) => {
              if (input.id === "size") {
                return (
                  <div
                    key={input.id}
                    className="md:col-span-2 flex flex-col gap-4 mt-4"
                  >
                    <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray">
                      {label.text}
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {input.options?.map((option) => (
                        <label
                          key={option.id}
                          className="group relative flex flex-col p-5 glass-card overflow-hidden cursor-pointer transition-all duration-300 has-[:checked]:border-[var(--color-blue-light)] has-[:checked]:bg-blue/10"
                        >
                          <div className="hover-glow !opacity-0 group-hover:!opacity-100 transition-opacity duration-500 pointer-events-none" />
                          <input
                            type="radio"
                            name={input.id}
                            value={option.id}
                            required={input.required}
                            className="sr-only"
                          />

                          <div
                            className="absolute top-5 right-5 w-5 h-5 flex items-center justify-center pointer-events-none"
                            aria-hidden="true"
                          >
                            <div className="w-5 h-5 rounded-full border-2 border-[var(--color-border-dark)] flex items-center justify-center transition-all duration-300 group-has-[:checked]:border-[var(--color-blue-light)]">
                              <div className="w-3 h-3 rounded-full bg-[var(--color-blue-light)] scale-0 transition-transform duration-300 ease-out group-has-[:checked]:scale-100" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 pr-8">
                            <span className="text-[var(--color-primary)] small-text card-title transition-colors duration-300 group-has-[:checked]:text-[var(--color-blue-light)]">
                              {option.label}
                            </span>
                            <span className="text text-gray text-[0.75rem] uppercase tracking-wider">
                              {option.dims}
                            </span>
                            <span className="text text-gray text-[0.7rem] italic">
                              {option.inches}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              }

              if (input.id === "deadline") {
                return (
                  <CustomDatePicker
                    label="Deadline Date"
                    subLabel="Shipping takes 2-3 weeks"
                  />
                );
              }
              return (
                <div key={input.id} className="flex flex-col gap-2">
                  <label
                    htmlFor={label.htmlFor}
                    className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray"
                  >
                    {label.text}
                  </label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.required}
                    className="bg-transparent [color-scheme:dark] border-b border-[var(--color-border)] py-3 px-1 outline-none focus:border-blue transition-colors text-[var(--color-primary)] placeholder:text-[var(--color-border-dark)]"
                  />
                </div>
              );
            })}

            <div className="md:col-span-2 mt-4">
              <label className="group relative w-full h-32 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/[0.02] hover:border-blue/50 transition-all cursor-pointer">
                <input type="file" className="sr-only" multiple />
                <svg
                  className="w-6 h-6 text-white/20 group-hover:text-blue transition-colors mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <p className="text-[12px] text-white/40 tracking-wide">
                  Upload your photos{" "}
                  <span className="text-white/10">(PNG, JPG)</span>
                </p>
              </label>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue hover:brightness-110 text-white font-medium py-5 rounded-2xl transition-all shadow-xl shadow-blue/20 uppercase tracking-[0.3em] text-[12px]"
              >
                Send Request
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactMe;
