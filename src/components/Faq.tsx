import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Em quanto tempo vejo resultados?",
    a: "A maioria das clientes relata resultados visiveis entre 4 e 6 semanas com uso diario conforme instrucoes.",
  },
  {
    q: "O produto e aprovado pela ANVISA?",
    a: "Sim, nosso serum e 100% nacional e possui aprovacao ANVISA.",
  },
  {
    q: "Posso usar com extensoes ou alongamento de cilios?",
    a: "Pode, mas recomendamos pausar procedimentos agressivos durante as primeiras semanas para potencializar o tratamento.",
  },
  {
    q: "Gravidas ou lactantes podem usar?",
    a: "Consulte seu medico antes do uso. O produto e seguro, mas avaliacoes individuais sao importantes.",
  },
  {
    q: "Qual a politica de garantia?",
    a: "Garantia de satisfacao de 60 dias: se nao amar os resultados, devolvemos seu dinheiro.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-peacock-pink text-peacock-pink font-semibold px-6 py-2 mb-6">Duvidas Frequentes</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark">Perguntas Frequentes</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-peacock-dark font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-peacock-dark/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;

