import { Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-wider">
            PROMECHANIK S.C.
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} ProMechanik S.C. Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
