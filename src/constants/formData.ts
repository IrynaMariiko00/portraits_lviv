import type { FormField } from "~/types/formField";

export const formData:FormField[]= [
  {
    label: { htmlFor: "name", text: "Name:" },
    input: {id: "name", type: "text", required: true}, 
  },
  {
    label: { htmlFor: "email", text: "Email:" },
    input: {id: "email", type: "email", required: true}, 
  },
  {
    label: { htmlFor: "tel", text: "Phone (optional):" },
    input: {id: "tel", type: "tel", required: false}, 
  },
];