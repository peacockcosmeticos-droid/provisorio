import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Heart, Sparkles } from "lucide-react";
import { scrollToPricing } from "@/lib/scroll";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina, 28",
      location: "São Paulo - SP",
      rating: 5,
      text: "Meus cílios cresceram tanto que não preciso mais de rímel! Em 5 semanas já vi uma diferença incrível. Recomendo para todas as amigas!",
      result: "Cresceu em 5 semanas",
      avatar: "A",
      verified: true
    },
    {
      name: "Marina Santos, 35",
      location: "Rio de Janeiro - RJ",
      rating: 5,
      text: "Depois de anos usando extensões que danificavam meus cílios, encontrei o Peacock. Agora tenho cílios naturais lindos e saudáveis!",
      result: "Recuperou os fios após extensões",
      avatar: "M",
      verified: true
    },
    {
      name: "Júlia Ferreira, 24",
      location: "Belo Horizonte - MG",
      rating: 5,
      text: "Produto incrível! Meus cílios ficaram muito mais volumosos e longos. A autoestima foi lá em cima! Valeu cada centavo investido.",
      result: "30 dias depois",
      avatar: "J",
      verified: true
    },
    {
      name: "Camila Rosa, 31",
      location: "Brasília - DF",
      rating: 5,
      text: "Estava cética no início, mas os resultados me surpreenderam. Em 6 semanas meus cílios estavam irreconhecíveis. Produto excelente!",
      result: "Resultados em 6 semanas",
      avatar: "C",
      verified: true
    },
    {
      name: "Letícia Oliveira, 29",
      location: "Porto Alegre - RS",
      rating: 5,
      text: "Finalmente um produto que funciona de verdade! Meus cílios estão longos, volumosos e super saudáveis. Não largo mais!",
      result: "rotina e progresso",
      avatar: "L",
      verified: true
    },
    {
      name: "Rafaela Lima, 26",
      location: "Fortaleza - CE",
      rating: 5,
      text: "O melhor investimento que fiz para minha beleza! Em apenas 4 semanas já estava recebendo elogios. Produto sensacional!",
      result: "Elogios em 4 semanas",
      avatar: "R",
      verified: true
    }
  ];

  const stats = [
    { number: "50.000+", label: "Clientes Satisfeitas" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "95%", label: "Recomendam o Produto" },
    { number: "30 dias", label: "Primeiros Resultados" }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-peacock-pink text-peacock-pink font-semibold px-6 py-2 mb-6">
            💖 Depoimentos Reais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark mb-6">
            O que nossas{" "}
            <span className="gradient-text">clientes dizem?</span>
          </h2>
          <p className="text-xl text-peacock-dark/70 max-w-3xl mx-auto">
            Mais de 50.000 mulheres já transformaram seus cílios com Peacock. Veja alguns depoimentos reais!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-peacock-pink/10 to-peacock-coral/10 rounded-2xl p-6 mb-4 group-hover:from-peacock-pink/20 group-hover:to-peacock-coral/20 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-peacock-dark/70 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-peacock-pink/20 hover:border-peacock-pink/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-peacock-pink/10 to-peacock-coral/10 rounded-bl-3xl"></div>
              <CardContent className="p-6 space-y-4 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-peacock-pink to-peacock-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-peacock-dark flex items-center gap-2">
                        {testimonial.name}
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-green-100 text-green-700 border-green-200">
                            ✓ Verificado
                          </Badge>
                        )}
                      </h4>
                      <p className="text-sm text-peacock-dark/60">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-peacock-pink/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-peacock-dark/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-peacock-pink" />
                  <span className="text-sm font-medium text-peacock-pink">
                    {testimonial.result}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-peacock-cream to-white rounded-3xl p-8 lg:p-12 border border-peacock-pink/20 mb-16">
          <div className="text-center space-y-6">
            <Quote className="w-16 h-16 text-peacock-pink/30 mx-auto" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-peacock-dark leading-relaxed max-w-4xl mx-auto">
              "Eu sempre tive cílios muito ralos e isso me incomodava muito. Com o Peacock Lash Serum, em apenas 6 semanas meus cílios ficaram incríveis! Agora me sinto muito mais confiante e bonita. É um produto que realmente funciona!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-peacock-pink to-peacock-coral rounded-full flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-peacock-dark">Beatriz Costa, 32</h4>
                <p className="text-peacock-dark/70">Curitiba - PR</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-peacock-dark">
            Seja a Próxima Success Story! 💫
          </h3>
          <p className="text-lg text-peacock-dark/70 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já descobriram o segredo dos cílios perfeitos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="px-12" onClick={scrollToPricing}>
              <Heart className="w-5 h-5 mr-2" />
              QUERO MINHA TRANSFORMAÇÃO AGORA!
            </Button>
          </div>

          <p className="text-sm text-peacock-dark/60">
            ⭐ Mais de 50.000 clientes satisfeitas | 🛡️ Garantia de 60 dias | 🚚 Frete grátis
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;