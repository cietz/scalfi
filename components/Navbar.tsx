import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Search, User, Calendar } from "lucide-react";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Nossa Clínica", href: "#about" },
    { name: "Especialidades", href: "#services" },
    { name: "Corpo Clínico", href: "#doctor" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <>
      {/* Utility Bar - Estilo Americano (Mayo Clinic/Cleveland style) */}
      <div className="bg-slate-900 text-white text-xs md:text-sm py-2.5 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-primary-300 transition-colors hidden md:block"
            >
              Portal do Paciente
            </a>
            <a
              href="#"
              className="hover:text-primary-300 transition-colors hidden md:block"
            >
              Carreiras
            </a>
            <a
              href="#"
              className="hover:text-primary-300 transition-colors hidden md:block"
            >
              Notícias
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-6 ml-auto md:ml-0">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary-400" />
              <span className="font-medium tracking-wide">(11) 3333-4444</span>
            </div>
            <div className="flex items-center gap-2 border-l border-slate-700 pl-4">
              <MapPin size={14} className="text-primary-400" />
              <span className="hidden sm:inline">São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
          isScrolled ? "shadow-md py-2" : "border-b border-slate-100 py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo estilo Instituição Americana */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-primary-900 text-white p-2 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-tight leading-none group-hover:text-primary-800 transition-colors">
                  Dr Luiz Scalfi
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mt-0.5">
                  Clínica de Cardiologia
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-primary-800 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <button className="text-slate-400 hover:text-slate-700 transition-colors">
                <Search size={20} />
              </button>
              <div className="h-6 w-px bg-slate-200"></div>
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView()
                }
                className="bg-primary-800 hover:bg-primary-900 text-white rounded-none px-6 font-semibold uppercase text-xs tracking-wider"
              >
                <Calendar size={14} className="mr-2" />
                Agendar
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-slate-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-0 flex flex-col animate-in slide-in-from-top-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-800 font-medium text-base py-4 px-6 border-b border-slate-100 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="p-6 bg-slate-50">
                <Button
                  fullWidth
                  className="bg-primary-900 rounded-sm"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
