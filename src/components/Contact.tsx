import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-display tracking-widest text-sm mb-2">SKONTAKTUJ SIĘ</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">Kontakt</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.299433402375!2d18.672044076837594!3d50.28633819916634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471131007ca27a59%3A0x38ac0f585cba0cbe!2sPromechanik%20-%20mechanika%20samochodowa%2C%20wulkanizacja%2C%20klimatyzacja!5e0!3m2!1spl!2spl!4v1774426807276!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji ProMechnik S.C."
            />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-lg">Lokalizacja</h4>
                <a href="https://maps.app.goo.gl/EWL7wk4N3MohPm8j9?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  ul. Pszczyńska 74, 44-100 Gliwice
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-lg">Telefon</h4>
                <a href="tel:514656945" className="text-muted-foreground hover:text-primary transition-colors">514 656 945</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-lg">Godziny Otwarcia</h4>
                <p className="text-muted-foreground">Pon–Pt: 8:00 – 18:00</p>
                <p className="text-muted-foreground">Sob: 8:00 – 13:00</p>
                <p className="text-muted-foreground">Ndz: Zamknięte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
