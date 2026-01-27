import { attachmentOptions } from "~/constants/attachments";
import { formData } from "~/constants/formData";

const ContactForm = () => {
  return (
    <form
      action="/send"
      method="POST"
      className="glass-card mt-[3%] pb-[5%] px-[5%] w-[85%] mx-auto"
    >
      <div className="flex justify-between min-h-[200px]">
        <fieldset className="w-[30%]">
          <legend className="subtitle card-title mb-[2%]">Personal Data</legend>
          {formData.map((item, index) => (
            <div key={index} className="flex flex-col flex-1 gap-1">
              <label htmlFor={item.label.htmlFor} className="mt-[5%]">
                {item.label.text}
              </label>
              <input
                id={item.input.id}
                type={item.input.type}
                required={item.input.required}
                className="glass-btn rounded outline-none focus:ring-0 focus:outline-none"
              />
            </div>
          ))}
        </fieldset>

        <fieldset className="w-[55%] flex flex-col h-full">
          <legend className="subtitle card-title w-full mb-2">
            Your Request or Question
          </legend>

          <label
            htmlFor="message"
            className="mt-4 mb-2 text-white/80 text-sm font-medium"
          >
            Message:
          </label>

          <div className="glass-btn rounded flex flex-col p-0">
            <textarea
              id="message"
              placeholder="Tell me about your idea..."
              className="w-full flex-1 bg-transparent min-h-[165px] text-white p-4 outline-none resize-none placeholder:text-[14px] placeholder:text-[var(--color-btn-highlight)]"
            />
            <div className="flex justify-between w-full items-center p-3 border-t border-[var(--color-border)]">
              <div className="flex gap-4 px-2">
                {attachmentOptions.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className="text-[var(--color-gray-ligh)] hover:text-[var(--color-blue-text-light)] transition-colors transform hover:scale-110"
                      title={item.label}
                    >
                      <IconComponent />
                    </button>
                  );
                })}
              </div>

              <button
                type="submit"
                className="blue-btn p-[15px] text-[13px] h-[30px]"
              >
                Send
              </button>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="hover-glow" />
    </form>
  );
};

export default ContactForm;
