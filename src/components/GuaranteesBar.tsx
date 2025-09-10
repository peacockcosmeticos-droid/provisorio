import { Shield, Truck, CreditCard } from "lucide-react";

const items = [
  { icon: Shield, text: "Garantia 60 dias" },
  { icon: Truck, text: "Frete gratis Brasil" },
  { icon: CreditCard, text: "12x sem juros" },
];

const GuaranteesBar = () => {
  return (
    <section className="py-6 bg-peacock-cream/60 border-y border-peacock-pink/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-peacock-dark/80">
              <Icon className="w-5 h-5 text-peacock-pink" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesBar;

