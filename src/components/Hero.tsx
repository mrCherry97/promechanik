import heroImage from "@/assets/hero-mechanic.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Profesjonalny mechanik pracujący nad silnikiem samochodu"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-display text-lg tracking-widest mb-4">
            ZAUFANY SERWIS SAMOCHODOWY
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
            Utrzymujemy Cię <br />
            <span className="text-primary">Na Drodze</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 font-light">
            Mechanicy z ponad 10-letnim doświadczeniem. Mechanika, wulkanizacja, klimatyzacja — zajmujemy się wszystkim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 font-display text-lg tracking-wider px-8 py-6"
              asChild
            >
              <a href="tel:514656945">
                <Phone className="mr-2 h-5 w-5" />
                514 656 945
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 font-display text-lg tracking-wider px-8 py-6"
              asChild
            >
              <a href="https://maps.app.goo.gl/EWL7wk4N3MohPm8j9?g_st=ic" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Znajdź nas
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
