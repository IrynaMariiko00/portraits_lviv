interface TextPart {
  text: string;
  className?: string;
}

export interface TextSectionProps {
  title: TextPart[];
  description: string;
}
