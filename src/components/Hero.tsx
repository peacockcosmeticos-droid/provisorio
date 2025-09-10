import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Star, Users, Heart } from "lucide-react";
import { scrollToPricing } from "@/lib/scroll";
import beforeAfterImage from "@/assets/before-after-lashes.jpg";
import heroProductImage from "@/assets/111.webp";
import { useState, useEffect } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-peacock-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-peacock-coral rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-peacock-rose rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Top Promotional Banner */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2 font-bold cta-gradient text-white border-0">
            🔥 OFERTA EXCLUSIVA - VOCÊ GANHOU 50% OFF!
          </Badge>
          
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-peacock-dark">
              <Timer className="w-5 h-5" />
              <span className="font-semibold">Oferta expira em:</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-peacock-pink text-white px-3 py-2 rounded-lg font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="bg-peacock-pink text-white px-3 py-2 rounded-lg font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="bg-peacock-pink text-white px-3 py-2 rounded-lg font-bold">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
          
          <p className="text-peacock-dark font-semibold text-lg">
            USE O CUPOM: <span className="text-peacock-pink font-bold text-xl">PEACOCK50</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-peacock-pink text-peacock-pink font-semibold px-4 py-2">
                ⭐ O Mais Vendido do Brasil
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-peacock-dark leading-tight">
                Cílios mais{" "}
                <span className="gradient-text">longos e cheios</span>{" "}
                em 4-6 semanas! ✨
              </h1>
              
              <p className="text-xl text-peacock-dark/80 leading-relaxed">
                Desperte o <strong>poder transformador</strong> dos seus olhos com nossa fórmula exclusiva. 
                <strong className="text-peacock-pink"> Resultados visíveis desde a primeira aplicação!</strong>
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-peacock-pink/20">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-semibold text-peacock-dark">4.9/5</span>
                <span className="text-peacock-dark/70">• 50.000+ clientes</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Aprovado pela Anvisa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Frete grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Vegano</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sem sulfato</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full" onClick={scrollToPricing}>
                🛒 QUERO CÍLIOS DE DIVA - 50% OFF
              </Button>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-peacock-dark/70 text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Garantia de 60 dias ou seu dinheiro de volta</span>
                </div>
                <p className="text-xs text-peacock-dark/60 mt-2">
                  Pedidos são enviados em até 24 horas! Receba seu produto rapidamente.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Images */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Main Product */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-peacock-pink/20 to-peacock-coral/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  src={heroProductImage} 
                  alt="Sérum para Cílios Peacock Cosmetics"
                  className="relative z-10 w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 z-20 cta-gradient text-white border-0 text-sm px-3 py-1">
                  EM ESTOQUE
                </Badge>
              </div>

              {/* Before/After com imagem real */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-peacock-rose/20 to-peacock-pink/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <img 
                  src="/assets/images/5c4f588d-fcfe-4934-82c8-fc6a5e0f5733.png"
                  alt="Antes e Depois - Resultados Reais Peacock Cosmetics"
                  className="relative z-10 w-full rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-green-600 text-white font-bold px-3 py-1 shadow-lg">
                    ANTES ↔ DEPOIS
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-sm font-bold text-peacock-dark text-center">
                    ⚡ +300% mais volume em 4 semanas
                  </p>
                  <p className="text-xs text-peacock-dark/70 text-center">
                    Cliente real - Aprovado ANVISA
                  </p>
                </div>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-peacock-pink/20 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-peacock-pink rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-peacock-dark">Maria Silva</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-peacock-dark/70 mt-2">
                "Meus cílios cresceram tanto que não preciso mais de rímel!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;