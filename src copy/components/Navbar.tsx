import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={logo} alt="Promechanik" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8 font-display text-sm tracking-widest">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">USŁUGI</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">KONTAKT</a>
          <a href="tel:514656945" className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors">
            ZADZWOŃ
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 font-display text-sm tracking-widest space-y-4">
          <a href="#services" className="block text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>USŁUGI</a>
          <a href="#contact" className="block text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>KONTAKT</a>
          <a href="tel:514656945" className="block bg-primary text-primary-foreground text-center px-5 py-2 rounded-md">ZADZWOŃ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
