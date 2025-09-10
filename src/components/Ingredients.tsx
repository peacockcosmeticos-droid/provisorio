import { Badge } from "@/components/ui/badge";

const Ingredients = () => {
  const items = [
    { title: "Extrato de Pessego", desc: "Rico em vitaminas e antioxidantes para nutrir a fibra do cilio.", emoji: "🍑" },
    { title: "Cafe Verde", desc: "Estimula e energiza o bulbo capilar para crescimento saudável.", emoji: "☕" },
    { title: "Peptideos", desc: "Fortalecem a raiz e reduzem a quebra dos fios.", emoji: "🧬" },
  ];

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-peacock-pink text-peacock-pink font-semibold px-6 py-2 mb-6">Ingredientes-Chave</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark">Formula poderosa e segura</h2>
          <p className="text-peacock-dark/70 mt-2 max-w-3xl mx-auto">Selecionamos ativos premium para resultados reais e comprovados mantendo a segurança de uso diario.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div key={i} className="bg-peacock-cream/50 rounded-2xl p-6 border border-peacock-pink/20 text-center shadow-sm">
              <div className="text-5xl mb-3">{it.emoji}</div>
              <h3 className="text-xl font-bold text-peacock-dark mb-2">{it.title}</h3>
              <p className="text-peacock-dark/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;

