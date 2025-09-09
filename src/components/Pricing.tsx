import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap, Shield, Gift } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      id: 1,
      name: "Plano Básico",
      subtitle: "Experimente a transformação",
      originalPrice: "R$ 197,00",
      price: "R$ 98,50",
      discount: "50%",
      installments: "ou 3x de R$ 32,83",
      popular: false,
      badge: null,
      features: [
        "1 Peacock Lash Serum (5ml)",
        "Guia de aplicação digital",
        "Suporte via WhatsApp",
        "Garantia de 30 dias",
        "Frete grátis para todo Brasil"
      ],
      cta: "COMEÇAR AGORA",
      savings: "Economize R$ 98,50"
    },
    {
      id: 2,
      name: "Plano Transformação",
      subtitle: "Mais vendido - Resultado garantido",
      originalPrice: "R$ 394,00",
      price: "R$ 167,30",
      discount: "57%",
      installments: "ou 6x de R$ 27,88",
      popular: true,
      badge: "MAIS VENDIDO",
      features: [
        "2 Peacock Lash Serum (5ml cada)",
        "1 Primer Fortalecedor GRÁTIS",
        "Guia completo de cuidados",
        "Suporte prioritário 24/7",
        "Garantia estendida de 60 dias",
        "Frete grátis para todo Brasil",
        "Kit de aplicação premium"
      ],
      cta: "QUERO O MAIS VENDIDO",
      savings: "Economize R$ 226,70"
    },
    {
      id: 3,
      name: "Plano Diva Premium",
      subtitle: "Transformação completa + bônus exclusivos",
      originalPrice: "R$ 591,00",
      price: "R$ 236,40",
      discount: "60%",
      installments: "ou 8x de R$ 29,55",
      popular: false,
      badge: "MÁXIMO DESCONTO",
      features: [
        "3 Peacock Lash Serum (5ml cada)",
        "1 Primer Fortalecedor GRÁTIS",
        "1 Máscara de Cílios Premium GRÁTIS",
        "Curso online de maquiagem",
        "Consultoria personalizada",
        "Garantia vitalícia de 90 dias",
        "Frete grátis prioritário",
        "Kit completo de beleza",
        "Grupo VIP no Telegram"
      ],
      cta: "VIRAR DIVA AGORA",
      savings: "Economize R$ 354,60"
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantia Blindada",
      description: "60 dias para testar sem riscos"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Resultados Rápidos",
      description: "Primeiros resultados em 2 semanas"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Bônus Exclusivos",
      description: "Produtos e cursos de presente"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-peacock-cream to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-peacock-pink text-peacock-pink font-semibold px-6 py-2 mb-6">
            🔥 OFERTA ESPECIAL - 60% OFF
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark mb-6">
            Escolha seu{" "}
            <span className="gradient-text">Plano de Transformação</span>
          </h2>
          <p className="text-xl text-peacock-dark/70 max-w-3xl mx-auto mb-8">
            Aproveite nossa promoção exclusiva e transforme seus cílios com até 60% de desconto!
          </p>
          
          <div className="flex items-center justify-center gap-4 text-peacock-dark">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Promoção por tempo limitado</span>
            </div>
            <div className="text-peacock-dark/60">•</div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.9/5 avaliação</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 border-2 ${
                pkg.popular 
                  ? 'border-peacock-pink shadow-2xl bg-gradient-to-br from-white to-peacock-cream' 
                  : 'border-peacock-pink/20 hover:border-peacock-pink/40 shadow-lg'
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-peacock-pink to-peacock-coral text-white text-center py-2 font-bold text-sm">
                  <Crown className="w-4 h-4 inline mr-2" />
                  {pkg.badge}
                </div>
              )}
              
              <CardHeader className={`text-center space-y-4 ${pkg.badge ? 'pt-16' : 'pt-8'}`}>
                <h3 className="text-2xl font-bold text-peacock-dark">{pkg.name}</h3>
                <p className="text-peacock-dark/70">{pkg.subtitle}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-peacock-dark/60 line-through">{pkg.originalPrice}</span>
                    <Badge variant="destructive" className="font-bold">
                      -{pkg.discount}
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold gradient-text">{pkg.price}</div>
                  <p className="text-sm text-peacock-dark/70">{pkg.installments}</p>
                  <p className="text-sm font-semibold text-green-600">{pkg.savings}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-peacock-dark text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "cta" : "hero"} 
                  size="lg" 
                  className="w-full"
                >
                  {pkg.cta}
                </Button>

                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-xs text-peacock-dark/60">
                    <Shield className="w-3 h-3" />
                    <span>Compra segura e protegida</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-peacock-dark/60">
                    <span>💳 Pix, cartão ou boleto</span>
                    <span>🚚 Frete grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-peacock-pink/10 to-peacock-coral/10 text-peacock-pink group-hover:scale-110 transition-transform duration-300 mb-4">
                {guarantee.icon}
              </div>
              <h4 className="text-lg font-bold text-peacock-dark mb-2">{guarantee.title}</h4>
              <p className="text-peacock-dark/70">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-peacock-pink/20 text-center">
          <h3 className="text-3xl font-bold text-peacock-dark mb-4">
            Não Perca Esta Oportunidade Única! ⏰
          </h3>
          <p className="text-lg text-peacock-dark/70 mb-6 max-w-2xl mx-auto">
            Esta promoção é válida apenas por tempo limitado. Garante já seu Peacock Lash Serum com até 60% de desconto!
          </p>
          
          <div className="space-y-4">
            <Button variant="cta" size="xl" className="px-12">
              🛒 APROVEITAR OFERTA AGORA - 60% OFF
            </Button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-peacock-dark/60">
              <span>✅ Garantia de 60 dias</span>
              <span>✅ Frete grátis nacional</span>
              <span>✅ Pagamento seguro</span>
            </div>
            
            <p className="text-xs text-peacock-dark/60">
              * Promoção válida enquanto durarem os estoques. Quantidade limitada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;