interface TextPart {
  text: string;
  className?: string;
}

export interface TextSectionProps {
  title: TextPart[];
  description: string;
}

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export type FAQItemProps = {
  question: string;
  answer: string;
};

export interface Testimonial {
  id: number;
  testimonialImage: string;
  portraitImage: string;
}
