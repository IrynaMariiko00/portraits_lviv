import type { Benefit } from "~/types/addText";

const blueShadowClass = "text-blue text-shadow-[var(--text-shadow-dark)]";

export const myPhilosophy = {
  title: [
    { text: "My", className: "" },
    {
      text: "Philosophy",
      className: blueShadowClass,
    },
  ],
  description:
    "I believe that a portrait is more than just an image. It is an emotion, a story, and a moment you want to preserve forever. Every piece I create is made with attention to detail and with love for the person in front of me",
};

export const momentsToRemember = {
  title: [
    {
      text: "Moments",
      className: "",
    },
    {
      text: "to Remember",
      className: blueShadowClass,
    },
  ],
  description:
    "Life is full of fleeting moments. I aim to freeze those moments in portraits that are honest, heartfelt, and timeless, so you can relive them every day",
};

export const emotions = {
  title: [
    {
      text: "Emotion in",
      className: "",
    },
    {
      text: "Every Detail",
      className: blueShadowClass,
    },
  ],
  description:
    "From subtle expressions to the tiniest gestures, I capture the little things that make you who you are. These details turn a simple portrait into a personal story",
};

export const contactMeHomePage = {
  title: [
    { text: "Have a", className: "" },
    {
      text: "unique",
      className: blueShadowClass,
    },
    { text: "idea?", className: "" },
  ],
  description:
    "  Not sure which photo to choose or have questions about the process? Let's discuss your perfect portrait",
};

export const ABOUT_ME_CONTENT = {
  TITLE: "About",
  TITLE_ACCENT: "me",
  GREETING: "Hello! My name is",
  NAME: "Iryna",
  QUOTE:
    "My goal is to capture the soul behind the eyes, turning a simple photograph into a timeless piece of art.",
  BUTTON_TEXT: "CONTACT ME",

  PARAGRAPHS: [
    {
      text: "I’m inspired by the human face — its gaze, emotions, and unique character. I create ",
      highlight: "hand-drawn pencil portraits",
      after:
        ", paying close attention to every detail to capture not only likeness, but also mood and individuality.",
    },
    {
      text: "Each portrait is more than just a drawing to me — it’s a personal story. I work from photographs and carefully refine every stroke, shadow, and proportion so the result feels alive and authentic. ",
      italic:
        "All artworks are created entirely by hand, without filters or templates.",
    },
    {
      text: "A pencil portrait is a meaningful gift — for a loved one, to commemorate an important moment, or simply for yourself. I’ll be happy to bring your idea to life and create a portrait you’ll want to cherish for years.",
    },
  ],
};

export const benefits: Benefit[] = [
  {
    icon: "./assets/icons/user-icon.svg",
    title: "Personalized approach",
    description:
      "each portrait is created with attention to the smallest details, capturing features and character accurately.",
  },
  {
    icon: "./assets/icons/camera-icon.svg",
    title: "Hyperrealism",
    description:
      "the portrait looks like a photo, but with a unique artistic touch.",
  },
  {
    icon: "./assets/icons/pensil-icon.svg",
    title: "Hand-drawn with pencil",
    description:
      "no two portraits are alike, as every piece is crafted by hand.",
  },
  {
    icon: "./assets/icons/smile-icon.svg",
    title: "Emotional value",
    description:
      "your portrait becomes more than an image; it’s a memory to cherish for a lifetime.",
  },
  {
    icon: "./assets/icons/premium-icon.svg",
    title: "Premium paper and materials",
    description: "the drawing will last for decades without losing its detail.",
  },
  {
    icon: "./assets/icons/gift-icon.svg",
    title: "Perfect gift",
    description: "unique, personal, and truly memorable.",
  },
];

export const smallBenefits = [
  "100% Hand-drawn artwork",
  "Premium graphite materials",
  "Attention to every detail",
];

export const STATS = [
  "150+ Hand-Drawn Portraits",
  "99% Happy Clients",
  "Shipping Worldwide 🌍",
  "Museum Quality Materials",
];

export const featuredQuestions = [
  {
    question: "Is this fully manual work?",
    answer:
      "Absolutely! Each piece is a unique artwork, hand-painted with love and attention to detail. No digital prints—just real art.",
  },
  {
    question: "How long does it take to create a painting?",
    answer:
      "The timeline varies depending on the style, size, and the number of people in the portrait. On average, it takes between 3 days and 2 weeks to bring your idea to life.",
  },
  {
    question: "Is international shipping available?",
    answer:
      "Yes, I deliver to any part of the world. Please allow extra time for international logistics and customs.",
  },
  {
    question: "Do you offer framing and packaging services?",
    answer:
      "Certainly. You can choose to have your artwork framed and gift-wrapped upon request.",
  },
  {
    question: "Where can I see the prices?",
    answer:
      "You can check our standard rates here [посилання] or use our integrated AI calculator to get a quick quote based on your preferences.",
  },
];
