import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", target: "hero" },
  { label: "Problemas", target: "problems" },
  { label: "Resultados", target: "results" },
  { label: "Benefícios", target: "benefits" },
  { label: "Social", target: "social-proof" },
  { label: "Depoimentos", target: "testimonials-section" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-peacock-pink/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          className="text-peacock-dark font-extrabold text-xl tracking-tight"
          onClick={() => scrollTo("hero")}
        >
          Peacock
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-peacock-dark/80 hover:text-peacock-pink font-semibold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="cta" size="sm" onClick={() => scrollTo("pricing-section")}>COMPRAR AGORA</Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-6">
                <span className="text-peacock-dark font-extrabold text-lg">Menu</span>
                <Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => { setOpen(false); scrollTo(item.target); }}
                    className="text-left px-3 py-2 rounded-lg hover:bg-peacock-cream font-semibold text-peacock-dark"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-6">
                <Button className="w-full" variant="cta" onClick={() => { setOpen(false); scrollTo("pricing-section"); }}>COMPRAR AGORA</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

