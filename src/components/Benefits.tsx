import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Shield, Zap, Star, Clock } from "lucide-react";
import { scrollToPricing } from "@/lib/scroll";
import { scrollToTestimonials } from "@/lib/scroll";

const Benefits = () => {
  const mainBenefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Aumenta o Volume e Comprimento",
      description: "Melhore a aparência dos seus cílios desde a raiz com nossa eficaz tecnologia de Ligação de Cílios.",
      color: "from-peacock-pink to-peacock-rose"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fórmula Suave e Rica em Nutrientes",
      description: "Cuida da saúde dos seus cílios com peptídeos e nutrientes essenciais, sem irritação ou complicações.",
      color: "from-peacock-coral to-peacock-pink"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Resultados Rápidos e Duradouros",
      description: "Comece a ver cílios mais cheios em apenas 4 semanas com uso rápido e diário.",
      color: "from-peacock-rose to-peacock-coral"
    }
  ];

  const features = [
    { icon: "🌱", text: "100% Vegano" },
    { icon: "🔬", text: "Testado Dermatologicamente" },
    { icon: "✅", text: "Aprovado pela Anvisa" },
    { icon: "💧", text: "Sem Sulfatos" },
    { icon: "🚫", text: "Sem Parabenos" },
    { icon: "❌", text: "Não Testado em Animais" }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-peacock-cream to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-peacock-pink text-peacock-pink font-semibold px-6 py-2 mb-6">
            ✨ Por que escolher Peacock?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark mb-6">
            POR QUE VOCÊ DEVE USAR O{" "}
            <span className="gradient-text">PEACOCK LASH SERUM?</span>
          </h2>
          <p className="text-xl text-peacock-dark/70 max-w-3xl mx-auto">
            Descubra os benefícios que farão você se apaixonar pelos seus próprios cílios!
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="p-8 text-center space-y-6 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-peacock-pink/10 to-peacock-coral/10 text-peacock-pink group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-peacock-dark group-hover:text-peacock-pink transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-peacock-dark/70 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-peacock-pink/20 mb-16">
          <h3 className="text-2xl font-bold text-peacock-dark text-center mb-8">
            Qualidade e Segurança Garantidas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-peacock-dark group-hover:text-peacock-pink transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Timeline */}
        <div className="bg-gradient-to-r from-peacock-pink/5 to-peacock-coral/5 rounded-3xl p-8 lg:p-12 border border-peacock-pink/20 mb-16">
          <h3 className="text-3xl font-bold text-peacock-dark text-center mb-12">
            Sua Jornada de Transformação
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { week: "1ª Semana", result: "Cílios mais hidratados", percentage: "100%" },
              { week: "2ª Semana", result: "Fortalecimento visível", percentage: "85%" },
              { week: "4ª Semana", result: "Comprimento aumentado", percentage: "90%" },
              { week: "6ª Semana", result: "Transformação completa", percentage: "95%" }
            ].map((timeline, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-peacock-pink to-peacock-coral flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-peacock-dark mb-2">{timeline.week}</h4>
                <p className="text-peacock-dark/70 mb-2">{timeline.result}</p>
                <div className="text-2xl font-bold gradient-text">{timeline.percentage}</div>
                <p className="text-xs text-peacock-dark/60">das usuárias relatam resultados</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-peacock-pink to-peacock-coral -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-peacock-dark">
            Pronta para a Transformação? ✨
          </h3>
          <p className="text-lg text-peacock-dark/70 max-w-2xl mx-auto">
            Junte-se a mais de <strong className="text-peacock-pink">50.000 mulheres</strong> que já transformaram seus cílios com Peacock!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="px-12" onClick={scrollToPricing}>
              QUERO RESULTADO EM 7 DIAS! 🚀
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToTestimonials}>
              Ver Mais Depoimentos
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-peacock-dark/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>60 dias de garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.9/5 avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-peacock-pink" />
              <span>Frete grátis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;