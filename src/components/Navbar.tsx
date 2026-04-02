import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollLink = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollTo(id), 300);
    } else {
      scrollTo(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <button className="flex items-center gap-2" onClick={goHome}>
          <img src={logo} alt="Promechanik" className="h-8" />
        </button>

        <div className="hidden md:flex items-center gap-8 font-display text-sm tracking-widest">
          <button
            onClick={() => handleScrollLink("services")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            USŁUGI
          </button>
          <button
            onClick={() => navigate("/cennik")}
            className={`hover:text-primary transition-colors ${location.pathname === "/cennik" ? "text-primary" : "text-muted-foreground"}`}
          >
            CENNIK
          </button>
          <button
            onClick={() => handleScrollLink("contact")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            KONTAKT
          </button>
          <a
            href="tel:514656945"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            ZADZWOŃ
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 font-display text-sm tracking-widest space-y-4">
          <button
            className="block text-muted-foreground hover:text-primary"
            onClick={() => {
              handleScrollLink("services");
              setOpen(false);
            }}
          >
            USŁUGI
          </button>
          <button
            className="block text-muted-foreground hover:text-primary"
            onClick={() => {
              navigate("/cennik");
              setOpen(false);
            }}
          >
            CENNIK
          </button>
          <button
            className="block text-muted-foreground hover:text-primary"
            onClick={() => {
              handleScrollLink("contact");
              setOpen(false);
            }}
          >
            KONTAKT
          </button>
          <a
            href="tel:514656945"
            className="block bg-primary text-primary-foreground text-center px-5 py-2 rounded-md"
          >
            ZADZWOŃ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
