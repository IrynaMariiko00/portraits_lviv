export const PRICES = [
  {
    size: "Small",
    dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)",
    description: "Best for single portraits and small, detailed keepsakes.",
    items: [
      { label: "1 Person", price: "$150" },
      { label: "2 Persons", price: "$220" },
      { label: "1 Pet (Solo)", price: "$110" },
      { label: "Extra Pet", price: "+$60" },
    ],
  },
  {
    size: "Medium",
    dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)",
    description: "Premium size for family compositions and deep detailing.",
    isPopular: true,
    items: [
      { label: "1 Person", price: "$260" },
      { label: "2 Persons", price: "$350" },
      { label: "3 Persons", price: "$440" },
      { label: "Extra Person", price: "+$90" },
      { label: "Extra Pet", price: "+$80" },
    ],
  },
  {
    size: "Big",
    dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)",
    description:
      "Grand scale for statement pieces and complex group portraits.",
    items: [
      { label: "1 Person", price: "$450" },
      { label: "2 Persons", price: "$620" },
      { label: "3 Persons", price: "$790" },
      { label: "Extra Person", price: "+$150" },
      { label: "Extra Pet", price: "+$120" },
    ],
  },
  {
    size: "Extra Big",
    dimensions: "59.4 x 84.1 cm (23.4 x 33.1 in)",
    description:
      "Maximum impact for large wall spaces and high-end collections.",
    items: [
      { label: "1 Person", price: "$700" },
      { label: "2 Persons", price: "$950" },
      { label: "3 Persons", price: "$1200" },
      { label: "Extra Person", price: "+$220" },
      { label: "Extra Pet", price: "+$180" },
    ],
  },
];

export const PRICING_DETAILS = {
  title: "Payment & Process",
  sections: [
    {
      text: "To ensure your portrait is exactly as you envisioned, I follow a transparent and collaborative process from start to finish:",
    },
    {
      type: "stepper" as const,
      steps: [
        "Submit the form and your photo. I’ll personally contact you to review the photo quality, help you choose the best reference, and, if needed, enhance the image using various AI tools.",
        "We confirm all details and timelines in advance. Work begins immediately after a 50% prepayment. The painting process usually takes up to one week (excluding delivery time), depending on the size and level of detail. All timelines are discussed and agreed upon before the work begins.",
        "I’ll send you progress updates during the process, allowing you to refine the details, adjust the direction, and request changes along the way.",
        "Final review through photos and videos. You can request final adjustments at this stage, and once approved and the remaining balance is paid via Payoneer, I’ll ship your portrait.",
      ],
    },
    {
      text: "If you have any additional questions or special requests, feel free to include them in the form — I’ll personally get in touch with you and answer everything.",
    },
  ],
};
