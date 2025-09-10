export const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const scrollToTestimonials = () => {
  const element = document.getElementById('testimonials-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};