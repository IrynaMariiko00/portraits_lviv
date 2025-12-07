import type { TextSectionProps } from "~/types/addText";

const ContactMeLink: React.FC<TextSectionProps> = ({ title, description }) => {
    return (
        <section className="flex flex-col justify-center text-center items-center py-[20px]">
           <h1 className="title">
            {title.map((part, idx) => (
                <span key={idx} className={part.className}>
                {part.text}{" "}
                </span>
            ))}
           </h1>
            <h3 className="subtitle mb-[5%] max-w-[60%]">{description}</h3>
            <button className="blue-btn w-fit">Contact me</button>
        </section>
    )
}

export default ContactMeLink;