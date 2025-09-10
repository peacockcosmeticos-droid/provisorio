import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-peacock-cream to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-peacock-pink/20 text-center">
          <h3 className="text-3xl font-bold text-peacock-dark mb-4">Pronta para transformar seus cilios? ✨</h3>
          <p className="text-lg text-peacock-dark/70 mb-6 max-w-2xl mx-auto">
            Oferta por tempo limitado. Garanta seu Peacock Lash Serum com desconto especial agora mesmo.
          </p>
          <Button variant="cta" size="xl" className="px-12" onClick={() => {
            const el = document.getElementById("pricing-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>
            COMPRAR AGORA
          </Button>
          <p className="text-sm text-peacock-dark/60 mt-4">Garantia de 60 dias • Frete gratis • Pagamento seguro</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

