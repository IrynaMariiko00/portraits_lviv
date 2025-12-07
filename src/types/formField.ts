export type FormField = { 
    label: {
        htmlFor: string,
        text: string,
    },
    input: {
        id: string,
        type: string,
        required: boolean;
    }
}