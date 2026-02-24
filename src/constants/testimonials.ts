import type { Testimonial } from "~/types/addText";
export const featuredTestimonials: string[] = [];

for (let i = 1; i < 5; ++i)
  featuredTestimonials.push(`./images/featuredTestimonials/${i}.png`);

export const TESTIMONIALS: Testimonial[] = [];

for (let i = 1; i <= 4; i++) {
  TESTIMONIALS.push({
    id: i,
    testimonialImage: `/images/featuredTestimonials/${i}.png`,
    portraitImage: `/images/testimonials/portrait_${i}.png`,
  });
}
