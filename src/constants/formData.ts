import type { FormField } from "~/types/formField";
import AttachFileIcon from "~/assets/icons/AttachFileIcon";
import AttachImageIcon from "~/assets/icons/AttachImageIcon";

export const formData: FormField[] = [
  {
    label: { htmlFor: "name", text: "Name:" },
    input: { id: "name", type: "text", required: true },
  },
  {
    label: { htmlFor: "email", text: "Email:" },
    input: { id: "email", type: "email", required: true },
  },
  {
    label: { htmlFor: "tel", text: "Phone (optional):" },
    input: { id: "tel", type: "tel", required: false },
  },
];

export const formDataPage: FormField[] = [
  {
    label: { htmlFor: "fullName", text: "Full Name" },
    input: {
      id: "name",
      type: "text",
      placeholder: "John Doe",
      required: true,
    },
  },
  {
    label: { htmlFor: "email", text: "Email Address" },
    input: {
      id: "email",
      type: "email",
      placeholder: "example@mail.com",
      required: true,
    },
  },
  {
    label: { htmlFor: "destination", text: "Shipping Destination" },
    input: {
      id: "destination",
      type: "text",
      placeholder: "Country, City",
      required: true,
    },
  },
  {
    label: { htmlFor: "alternative-contact", text: "Alternative Contact" },
    input: {
      id: "alternative-contact",
      type: "text",
      placeholder: "Instagram, Telegram (specify)",
      required: true,
    },
  },
  {
    label: { htmlFor: "size", text: "Select Portrait Size" },
    input: {
      id: "size",
      type: "radio",
      required: true,
      options: [
        {
          id: "small",
          label: "Small",
          dims: "21.0 x 29.7 cm",
          inches: "8.3 x 11.7 in",
        },
        {
          id: "medium",
          label: "Medium",
          dims: "29.7 x 42.0 cm",
          inches: "11.7 x 16.5 in",
        },
        {
          id: "big",
          label: "Big",
          dims: "42.0 x 59.4 cm",
          inches: "16.5 x 23.4 in",
        },
        {
          id: "extra-big",
          label: "Extra Big",
          dims: "59.4 x 84.1 cm",
          inches: "23.4 x 33.1 in",
        },
        {
          id: "custom",
          label: "Custom",
          dims: "Individual size",
          inches: "Special request",
        },
      ],
    },
  },
  {
    label: { htmlFor: "deadline", text: "Deadline Date" },
    input: {
      id: "deadline",
      type: "text",
      placeholder: "dd/mm/yyyy",
      required: true,
    },
  },
];

export const attachmentOptions = [
  {
    id: 1,
    icon: AttachFileIcon,
    label: "Attach File",
  },
  {
    id: 2,
    icon: AttachImageIcon,
    label: "Attach Image",
  },
];
