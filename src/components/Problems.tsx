import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Zap, X, Sparkles } from "lucide-react";
import { scrollToPricing } from "@/lib/scroll";

const Problems = () => {
  const problems = [
    {
      icon: "😔",
      title: "Cílios Curtos e Ralos",
      description: "Você se olha no espelho e sente que seus cílios são quase invisíveis?"
    },
    {
      icon: "💔",
      title: "Maquiagem que Não Dura",
      description: "Gasta horas na maquiagem mas ainda sente que algo está faltando?"
    },
    {
      icon: "😰",
      title: "Baixa Autoestima",
      description: "Evita fotos de perto porque não se sente confiante com seus olhos?"
    },
    {
      icon: "💸",
      title: "Gastos com Extensões",
      description: "Cansada de gastar fortunas em extensões que danificam seus cílios naturais?"
    }
  ];

  const benefits = [
    "Cílios naturalmente mais longos e volumosos",
    "Olhar mais marcante e sedutor",
    "Autoconfiança renovada",
    "Economia com maquiagem e procedimentos",
    "Fórmula 100% segura e dermatologicamente testada"
  ];

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark mb-6">
            Já passou por alguma dessas{" "}
            <span className="gradient-text">situações?</span>
          </h2>
          <p className="text-xl text-peacock-dark/70 max-w-3xl mx-auto">
            Se você se identifica com alguma dessas situações, chegou a hora de transformar seu olhar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-peacock-pink/20 hover:border-peacock-pink/40">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl">{problem.icon}</div>
                <h3 className="text-lg font-semibold text-peacock-dark group-hover:text-peacock-pink transition-colors">
                  {problem.title}
                </h3>
                <p className="text-peacock-dark/70 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demonstração Visual do Problema - Inspirado no Peachup */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-red-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-peacock-dark mb-4">
              Reconhece alguns desses problemas? 😔
            </h3>
            <p className="text-lg text-peacock-dark/70 max-w-3xl mx-auto">
              Milhares de brasileiras sofrem diariamente com esses problemas nos cílios. 
              Mas existe uma solução <strong>aprovada pela ANVISA</strong> que pode mudar tudo!
            </p>
          </div>

          {/* Grid de Problemas Visuais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="aspect-square bg-red-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/images/e1210165-0ccf-49c3-a305-86f78b2ba7dc.png"
                  alt="Cílios ralos antes do tratamento" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <h4 className="font-bold text-red-600 mb-2">Cílios Ralos</h4>
              <p className="text-red-600/80 text-sm">Poucos fios, sem volume nem definição</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="aspect-square bg-red-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/images/1ef8b9ca-2381-44b3-b8c0-f3d089743bac.png"
                  alt="Cílios curtos antes do tratamento" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <h4 className="font-bold text-red-600 mb-2">Cílios Curtos</h4>
              <p className="text-red-600/80 text-sm">Comprimento insuficiente para um olhar marcante</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md md:col-span-2 lg:col-span-1">
              <div className="aspect-square bg-red-100 rounded-xl mb-4 flex items-center justify-center">
                <X className="w-16 h-16 text-red-400" />
              </div>
              <h4 className="font-bold text-red-600 mb-2">Sem Curvatura</h4>
              <p className="text-red-600/80 text-sm">Cílios retos que não valorizam o olhar</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-red-600 font-semibold mb-4">
              🚨 Esses problemas afetam sua autoestima diariamente?
            </p>
            <p className="text-peacock-dark/70 mb-6">
              Não precisa mais sofrer! Temos a solução perfeita com <strong>resultados comprovados</strong>.
            </p>
            <Button variant="cta" size="lg" className="px-8" onClick={scrollToPricing}>
              <Sparkles className="w-5 h-5 mr-2" />
              VER A SOLUÇÃO AGORA!
            </Button>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-peacock-cream to-white rounded-3xl p-8 lg:p-12 border border-peacock-pink/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-peacock-pink" />
                <h3 className="text-3xl font-bold text-peacock-dark">
                  A Solução que Você Esperava!
                </h3>
              </div>
              
              <p className="text-lg text-peacock-dark/80 leading-relaxed">
                Com o <strong className="text-peacock-pink">Peacock Lash Serum</strong>, você finalmente terá os cílios dos seus sonhos de forma natural e duradoura.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-peacock-dark">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-peacock-pink/20">
                <h4 className="text-2xl font-bold text-peacock-dark mb-4">
                  Transformação Garantida!
                </h4>
                <div className="text-4xl font-bold gradient-text mb-2">
                  4-6 semanas
                </div>
                <p className="text-peacock-dark/70 mb-4">
                  para resultados visíveis e duradouros
                </p>
                <Button variant="cta" size="lg" className="w-full" onClick={scrollToPricing}>
                  QUERO MINHA TRANSFORMAÇÃO
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-peacock-dark/70">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Aprovado pela Anvisa</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>60 dias de garantia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-peacock-dark/70 mb-6">
            Não deixe para amanhã a transformação que você pode começar hoje!
          </p>
          <Button variant="hero" size="xl" className="px-12" onClick={scrollToPricing}>
            SIM, EU QUERO CÍLIOS INCRÍVEIS! 💫
          </Button>
          <p className="text-sm text-peacock-dark/60 mt-4">
            ⏰ Oferta por tempo limitado - Aproveite agora!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;