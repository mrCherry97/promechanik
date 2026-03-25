import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Certyfikowani Mechanicy", desc: "Wykwalifikowani technicy, którym możesz zaufać." },
  { icon: Clock, title: "Doświadczeni Specjaliści", desc: "Nasi mechanicy mają ponad 10 lat doświadczenia w branży." },
  { icon: Award, title: "Jakość Bez Kompromisów", desc: "Używamy tylko sprawdzonych części i materiałów." },
  { icon: ThumbsUp, title: "Uczciwe Ceny", desc: "Przejrzyste wyceny, bez ukrytych kosztów." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display tracking-widest text-sm mb-2">DLACZEGO MY</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">Zbudowani Na Zaufaniu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
