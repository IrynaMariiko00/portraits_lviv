type Option = {
  id: string;
  label: string;
  dims: string;
  inches: string;
};

export type FormField = {
  label: {
    htmlFor: string;
    text: string;
  };
  input: {
    id: string;
    type: string;
    placeholder?: string;
    required: boolean;
    options?: Option[];
  };
};
