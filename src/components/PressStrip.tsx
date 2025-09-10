const logos = ["Vogue", "Marie Claire", "UOL", "Terra", "Beleza.br", "Globo" ];

const PressStrip = () => {
  return (
    <section id="press" className="py-12 bg-peacock-cream/60 border-y border-peacock-pink/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-80">
          {logos.map((name) => (
            <div key={name} className="text-peacock-dark/60 text-sm md:text-base font-semibold tracking-wide uppercase">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressStrip;

