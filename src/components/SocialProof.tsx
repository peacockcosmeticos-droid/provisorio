import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Verified, TrendingUp, Users, Award } from "lucide-react";

const SocialProof = () => {
  // Stats inspirados no padrão Peachup mas adaptados para cílios
  const stats = [
    { number: "50.000+", label: "Clientes Transformadas", icon: Users },
    { number: "98%", label: "Taxa de Satisfação", icon: Star },
    { number: "4.9/5", label: "Avaliação Média", icon: Award },
    { number: "30 dias", label: "Primeiros Resultados", icon: TrendingUp }
  ];

  // Casos antes/depois específicos com dados de conversão
  const transformationCases = [
    {
      beforeImage: "/lovable-uploads/1f8d6e0f-0548-4a57-84ca-22f4e7000ec9.png",
      title: "Cílios Ralos → Volumosos",
      description: "De cílios quase inexistentes para um olhar marcante",
      period: "4 semanas",
      improvement: "+300% volume",
      testimonial: '"Não acreditava que meus cílios pudessem ficar assim!"',
      name: "Carolina, 28 anos",
      location: "São Paulo - SP"
    },
    {
      beforeImage: "/lovable-uploads/1ef8b9ca-2381-44b3-b8c0-f3d089743bac.png",
      title: "Crescimento Natural",
      description: "Sem extensões, sem truques. Apenas crescimento real",
      period: "5 semanas", 
      improvement: "+250% comprimento",
      testimonial: '"Economizo tempo e dinheiro em salões!"',
      name: "Beatriz, 32 anos",
      location: "Rio de Janeiro - RJ"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header com foco em aprovação ANVISA */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-green-500 text-green-600 font-semibold px-6 py-2 mb-6 bg-green-50">
            <Verified className="w-4 h-4 mr-2" />
            🇧🇷 Produto Nacional Aprovado pela ANVISA
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark mb-6">
            Por que <span className="gradient-text">50.000+ brasileiras</span>{" "}
            confiam no Peacock?
          </h2>
          <p className="text-xl text-peacock-dark/70 max-w-3xl mx-auto">
            O único sérum para cílios 100% nacional com aprovação ANVISA. 
            Resultados comprovados por milhares de mulheres em todo o Brasil.
          </p>
        </div>

        {/* Stats com design inspirado no Peachup */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-peacock-pink/10 to-peacock-coral/10 rounded-2xl p-6 mb-4 group-hover:from-peacock-pink/20 group-hover:to-peacock-coral/20 transition-all duration-300 border border-peacock-pink/10">
                  <Icon className="w-8 h-8 text-peacock-pink mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-peacock-dark/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Casos de Transformação Destacados */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {transformationCases.map((case_, index) => (
            <Card key={index} className="overflow-hidden border-peacock-pink/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Imagem Antes/Depois */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={case_.beforeImage}
                      alt={case_.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay com badge de melhoria */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-peacock-pink text-white font-bold px-3 py-1 shadow-lg">
                      {case_.improvement}
                    </Badge>
                  </div>

                  {/* Badge de período */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-peacock-dark font-medium px-3 py-1 shadow-lg">
                      {case_.period}
                    </Badge>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-peacock-dark mb-2">
                    {case_.title}
                  </h3>
                  <p className="text-peacock-dark/70 mb-4">
                    {case_.description}
                  </p>
                  
                  {/* Depoimento */}
                  <div className="bg-peacock-cream/50 rounded-lg p-4 mb-4">
                    <Quote className="w-5 h-5 text-peacock-pink mb-2" />
                    <p className="text-peacock-dark italic mb-3">
                      {case_.testimonial}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-peacock-pink to-peacock-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {case_.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-peacock-dark text-sm">
                          {case_.name}
                        </p>
                        <p className="text-peacock-dark/60 text-xs">
                          {case_.location}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                          ✓ Verificado
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de Credibilidade ANVISA */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border border-green-200 mb-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Verified className="w-12 h-12 text-green-600" />
              <Badge className="bg-green-600 text-white px-4 py-2 text-lg font-bold">
                APROVAÇÃO ANVISA
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-peacock-dark">
              O Único Sérum 100% Nacional com Aprovação ANVISA
            </h3>
            <p className="text-xl text-peacock-dark/80 max-w-4xl mx-auto leading-relaxed">
              Diferente dos produtos importados, o Peacock Lash Serum foi desenvolvido especificamente 
              para as brasileiras, com aprovação da ANVISA que garante <strong>segurança e eficácia comprovadas</strong>. 
              Você pode usar com total tranquilidade!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-peacock-dark mb-2">Registro ANVISA</h4>
                <p className="text-peacock-dark/70 text-sm">Produto registrado e aprovado pela Agência Nacional de Vigilância Sanitária</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-peacock-dark mb-2">Testes Clínicos</h4>
                <p className="text-peacock-dark/70 text-sm">Eficácia comprovada em estudos realizados no Brasil</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-peacock-dark mb-2">50.000+ Clientes</h4>
                <p className="text-peacock-dark/70 text-sm">Milhares de brasileiras já comprovaram os resultados</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA inspirado no Peachup */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl lg:text-4xl font-bold text-peacock-dark">
            Pronta para ter os cílios dos seus sonhos? 💫
          </h3>
          <p className="text-lg text-peacock-dark/70 max-w-2xl mx-auto">
            Junte-se às <strong>50.000+ brasileiras</strong> que já descobriram o poder dos cílios naturalmente perfeitos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="px-12 text-lg">
              🇧🇷 QUERO O PRODUTO NACIONAL APROVADO!
            </Button>
          </div>

          <p className="text-sm text-peacock-dark/60">
            ✅ <strong>Aprovado ANVISA</strong> | 🛡️ Garantia de 60 dias | 📦 Frete grátis | 💳 12x sem juros
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;