import { Wrench, Car, Snowflake } from "lucide-react";

const services = [
  { icon: Wrench, title: "Mechanika Samochodowa", desc: "Pełna diagnostyka, naprawy silnika, skrzyni biegów, zawieszenia i układu kierowniczego. Obsługujemy wszystkie marki." },
  { icon: Car, title: "Wulkanizacja", desc: "Wymiana opon, wyważanie kół, naprawa przebitych opon oraz przechowywanie opon sezonowych." },
  { icon: Snowflake, title: "Klimatyzacja", desc: "Serwis klimatyzacji samochodowej — nabijanie czynnika, diagnostyka nieszczelności i odgrzybianie." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display tracking-widest text-sm mb-2">CO ROBIMY</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">Nasze Usługi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 transition-all duration-300"
            >
              <service.icon className="h-10 w-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
