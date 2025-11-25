import type { Benefit } from "~/types/benefit";
import userIcon from "~/assets/icons/user-icon.svg";
import cameraIcon from "~/assets/icons/camera-icon.svg";
import pensilIcon from "~/assets/icons/pensil-icon.svg";
import smileIcon from "~/assets/icons/smile-icon.svg";
import premiumIcon from "~/assets/icons/premium-icon.svg";
import giftIcon from "~/assets/icons/gift-icon.svg";

export const benefits: Benefit[] = [
  {
    icon: userIcon,
    title: "Personalized approach",
    description:
      "each portrait is created with attention to the smallest details, capturing features and character accurately.",
  },
  {
    icon: cameraIcon,
    title: "Hyperrealism",
    description:
      "the portrait looks like a photo, but with a unique artistic touch.",
  },
  {
    icon: pensilIcon,
    title: "Hand-drawn with pencil",
    description:
      "no two portraits are alike, as every piece is crafted by hand.",
  },
  {
    icon: smileIcon,
    title: "Emotional value",
    description:
      "your portrait becomes more than an image; it’s a memory to cherish for a lifetime.",
  },
  {
    icon: premiumIcon,
    title: "Premium paper and materials",
    description: "the drawing will last for decades without losing its detail.",
  },
  {
    icon: giftIcon,
    title: "Perfect gift",
    description: "unique, personal, and truly memorable.",
  },
];

export const smallBenefits = [
  "100% Hand-drawn artwork",
  "Premium graphite materials",
  "Attention to every detail",
];
