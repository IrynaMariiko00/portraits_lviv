import ContactForm from "../ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-between mx-auto w-[85%]">
        <div className="flex flex-col">
          <h1 className="extra-big leading-none">
            Get in <span className="text-blue">Touch</span>
          </h1>
          <h3 className="text text-gray leading-relaxed">
            Get in touch with me — together we’ll bring your ideas to life
            <br />
            I’m always open to your suggestions and questions
          </h3>
        </div>

        <button className="glass-btn h-[5%] self-center">Get Estimate</button>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactMe;
