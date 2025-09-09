import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Phone, MapPin, Instagram, Shield, Clock, CreditCard } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Sobre Nós", href: "#about" },
    { label: "Como Usar", href: "#howto" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Política de Privacidade", href: "#privacy" },
    { label: "Termos de Uso", href: "#terms" },
    { label: "Trocas e Devoluções", href: "#returns" }
  ];

  const certifications = [
    { icon: <Shield className="w-5 h-5" />, text: "Aprovado pela Anvisa" },
    { icon: <Heart className="w-5 h-5" />, text: "Não testado em animais" },
    { icon: <Clock className="w-5 h-5" />, text: "Entrega em 24h" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Pagamento seguro" }
  ];

  return (
    <footer className="bg-peacock-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4">Peacock Cosmetics</h3>
              <p className="text-white/80 leading-relaxed max-w-md">
                Transformamos vidas através da beleza natural. Nossos produtos são desenvolvidos com tecnologia avançada 
                e ingredientes de alta qualidade para proporcionar resultados excepcionais.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-peacock-coral">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-peacock-coral" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-peacock-coral" />
                  <span>contato@peacockcosmetics.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-peacock-coral" />
                  <span>São Paulo - SP, Brasil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-peacock-coral" />
                  <span>@peacockcosmetics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-peacock-coral">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-peacock-coral transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-peacock-coral">Newsletter</h4>
            <p className="text-white/80">
              Receba dicas exclusivas de beleza e ofertas especiais diretamente no seu e-mail!
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-peacock-coral transition-colors"
              />
              <Button variant="cta" className="w-full">
                Cadastrar Agora
              </Button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/20 mt-12 pt-12">
          <h4 className="text-xl font-semibold text-peacock-coral mb-6 text-center">
            Qualidade e Segurança Garantidas
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 text-white/80 justify-center">
                <div className="text-peacock-coral">
                  {cert.icon}
                </div>
                <span className="text-sm font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-peacock-pink/20 to-peacock-coral/20 rounded-2xl p-8 mt-12 text-center border border-peacock-pink/30">
          <h4 className="text-2xl font-bold mb-4">
            Ainda não transformou seus cílios? 💫
          </h4>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Não perca mais tempo! Junte-se a mais de 50.000 mulheres que já descobriram o segredo dos cílios perfeitos.
          </p>
          <Button variant="cta" size="lg" className="px-8">
            GARANTIR MEUS CÍLIOS PERFEITOS
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-peacock-dark/80 border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Peacock Cosmetics. Todos os direitos reservados. 
              <span className="block md:inline md:ml-2">
                CNPJ: 00.000.000/0001-00
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Badge variant="outline" className="border-white/20 text-white/80">
                Site Seguro SSL
              </Badge>
              <span>Desenvolvido com ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;