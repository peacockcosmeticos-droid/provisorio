import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shield, Award, Heart, Sparkles } from "lucide-react";
import { scrollToPricing } from "@/lib/scroll";

const ResultsGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imagens de antes/depois com dados estratégicos para conversão
  const beforeAfterImages = [
    {
      src: "/assets/images/5c4f588d-fcfe-4934-82c8-fc6a5e0f5733.png",
      title: "Transformação em 4 Semanas",
      period: "4 semanas de uso",
      description: "Cílios mais longos e volumosos naturalmente",
      impact: "300% mais volume",
      priority: 1 // Imagem principal - resultado mais dramático
    },
    {
      src: "/assets/images/a1577366-aced-4e49-bc85-6be8168a85bb.png",
      title: "Crescimento Visível",
      period: "4 semanas de uso",
      description: "Densidade e comprimento naturais",
      impact: "250% mais densidade",
      priority: 2
    },
    {
      src: "/assets/images/20d0cd3c-561a-4783-9c9c-fa79667f9ec2.png",
      title: "Resultado Profissional",
      period: "6 semanas de uso", 
      description: "Cílios dignos de salão de beleza",
      impact: "400% mais comprimento",
      priority: 1 // Segunda imagem principal
    },
    {
      src: "/assets/images/7d34adf7-daa9-4b27-b276-e7de95ce8762.png",
      title: "Transformação Lateral",
      period: "5 semanas de uso",
      description: "Crescimento em todos os ângulos",
      impact: "200% mais curvatura",
      priority: 3
    },
    {
      src: "/assets/images/1ab29c0f-f555-4d9e-9065-31bf5c66bb5b.png",
      title: "Olhar Mais Expressivo",
      period: "3 semanas de uso",
      description: "Diferença desde as primeiras semanas",
      impact: "180% mais definição",
      priority: 2
    },
    {
      src: "/assets/images/e1210165-0ccf-49c3-a305-86f78b2ba7dc.png",
      title: "Cílios Mais Saudáveis",
      period: "4 semanas de uso", 
      description: "Fortalecimento e crescimento",
      impact: "150% mais resistência",
      priority: 3
    }
  ];

  // Ordenar por prioridade para mostrar as melhores primeiro
  const sortedImages = [...beforeAfterImages].sort((a, b) => a.priority - b.priority);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sortedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length);
  };

  const currentImage = sortedImages[currentImageIndex];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-peacock-cream to-white">
      <div className="container mx-auto px-4">
        {/* Header com diferencial ANVISA */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-green-500 text-green-600 font-semibold px-6 py-2 mb-6 bg-green-50">
            <Shield className="w-4 h-4 mr-2" />
            ✅ Aprovado pela ANVISA
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-peacock-dark mb-6">
            Resultados <span className="gradient-text">Comprovados</span> e{" "}
            <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-xl text-peacock-dark/70 max-w-3xl mx-auto mb-8">
            Mais de <strong>50.000 mulheres</strong> já transformaram seus cílios com nosso sérum aprovado pela ANVISA. 
            Veja alguns resultados reais de nossas clientes brasileiras!
          </p>
          
          {/* Badges de credibilidade */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 bg-peacock-pink/10 text-peacock-pink border-peacock-pink/20">
              <Award className="w-4 h-4 mr-2" />
              Produto Nacional
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-peacock-coral/10 text-peacock-coral border-peacock-coral/20">
              <Heart className="w-4 h-4 mr-2" />
              98% Aprovação
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-700 border-green-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Resultados em 3-6 semanas
            </Badge>
          </div>
        </div>

        {/* Galeria Principal com Carrossel */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-peacock-pink/20 shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                {/* Imagem Principal */}
                <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-gradient-to-r from-peacock-cream/50 to-white">
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  
                  {/* Overlay com informações */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                    <div className="text-white">
                      <Badge className="bg-peacock-pink text-white mb-3 px-3 py-1">
                        {currentImage.period}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                        {currentImage.title}
                      </h3>
                      <p className="text-lg text-white/90 mb-2">
                        {currentImage.description}
                      </p>
                      <p className="text-peacock-pink font-semibold text-lg">
                        ⚡ {currentImage.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Controles do Carrossel */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-peacock-pink/20 shadow-lg"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-5 h-5 text-peacock-dark" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-peacock-pink/20 shadow-lg"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-5 h-5 text-peacock-dark" />
                </Button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {sortedImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white shadow-md' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grid de Miniaturas */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {sortedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-3 ring-peacock-pink shadow-lg scale-105' 
                    : 'hover:scale-102 hover:shadow-md opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">
                      {image.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-peacock-dark mb-4">
            Seja a Próxima Transformação! 💫
          </h3>
          <p className="text-lg text-peacock-dark/70 max-w-2xl mx-auto mb-8">
            Resultados reais de mulheres brasileiras como você. Com aprovação ANVISA e garantia de satisfação.
          </p>
          
          <Button variant="cta" size="xl" className="px-12" onClick={scrollToPricing}>
            <Sparkles className="w-5 h-5 mr-2" />
            QUERO MEUS CÍLIOS PERFEITOS AGORA!
          </Button>
          
          <p className="text-sm text-peacock-dark/60 mt-4">
            🛡️ <strong>Aprovado ANVISA</strong> | ⭐ 98% de aprovação | 🚚 Frete grátis | 💳 12x sem juros
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;