export const PRICING_DETAILS = {
    title: "Payment & Process Details",
    payment: {
        label: "Payment Info",
        text: "A 50% deposit is required to confirm your order and secure your spot in the queue. The remaining balance is paid after the final approval, right before shipping. Shipping is calculated separately and typically ranges from $25–$45, depending on your location."
    },
    timeline: (time: string) => ({
        label: "Estimated Timeline",
        text: `The estimated creation time for this portrait is ${time}. Each artwork is created individually and by hand, with great attention to detail.`
    }),
    collaboration: {
        label: "The Process",
        text: `Once you submit the request form, I will personally contact you to confirm the details.
During the painting process:
• You’ll receive progress photos
• You can request adjustments along the way
• Final refinements can be made before completion`
    },
    final: {
        text: "Your feedback is part of the creative process — the goal is to deliver a portrait you truly love."
    }
};