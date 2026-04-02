import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PriceTable = ({
  title,
  headers,
  rows,
  footnote,
}: {
  title: string;
  headers: string[];
  rows: { label: string; values: string[] }[];
  footnote?: string;
}) => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-bold font-display text-primary mb-6">
      {title}
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`py-3 px-4 text-sm font-display tracking-wider border-b border-border ${i === 0 ? "text-left" : "text-center"} text-muted-foreground`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
            >
              <td className="py-3 px-4 text-sm font-medium">{row.label}</td>
              {row.values.map((v, j) => (
                <td
                  key={j}
                  className="py-3 px-4 text-sm text-center text-muted-foreground"
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {footnote && (
      <p className="text-xs text-muted-foreground mt-2 italic">{footnote}</p>
    )}
  </div>
);

const Cennik = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-display tracking-widest text-sm mb-2">
              SERWIS OPON
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-display">
              Cennik
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Podane ceny są cenami brutto za komplet kół (4 szt.)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PriceTable
              title="Wymiana opon + wyważenie - samochody osobowe"
              headers={["Rozmiar", "Felgi stalowe", "Felgi aluminiowe"]}
              rows={[
                { label: "13, 14 cali", values: ["120,00 zł", "140,00 zł"] },
                { label: "15, 16 cali", values: ["150,00 zł", "170,00 zł"] },
                { label: "17, 18 cali", values: ["180,00 zł", "200,00 zł"] },
                { label: "19, 20, 21 cali", values: ["—", "230,00 zł"] },
              ]}
            />

            <PriceTable
              title="Wymiana opon + wyważenie - SUV / Van / Terenowe"
              headers={["Rozmiar", "Felgi stalowe", "Felgi aluminiowe"]}
              rows={[
                { label: "15, 16 cali", values: ["180,00 zł", "200,00 zł"] },
                {
                  label: "17, 18, 19 cali",
                  values: ["220,00 zł", "240,00 zł"],
                },
                {
                  label: "20, 21, 22 cali",
                  values: ["240,00 zł", "280,00 zł"],
                },
              ]}
            />

            <PriceTable
              title="Wymiana kół + wyważenie - samochody osobowe"
              headers={["Rozmiar", "Felgi stalowe", "Felgi aluminiowe"]}
              rows={[
                { label: "13, 14, 15 cali", values: ["80,00 zł", "100,00 zł"] },
                {
                  label: "16, 17, 18 cali",
                  values: ["100,00 zł", "120,00 zł"],
                },
                {
                  label: "19, 20, 21 cali",
                  values: ["120,00 zł", "140,00 zł"],
                },
              ]}
            />

            <PriceTable
              title="Wymiana kół + wyważenie - SUV / Terenowe"
              headers={["Rozmiar", "Felgi stalowe", "Felgi aluminiowe"]}
              rows={[
                { label: "14, 15 cali", values: ["—", "120,00 zł"] },
                {
                  label: "16, 17, 18 cali",
                  values: ["140,00 zł", "160,00 zł"],
                },
                { label: "19, 20, 21 cali", values: ["—", "200,00 zł"] },
              ]}
            />

            <PriceTable
              title="Samochody dostawcze - wymiana opon"
              headers={["Typ", "Cena"]}
              rows={[
                { label: "Na kołach pojedynczych", values: ["240,00 zł"] },
                { label: "Na kołach bliźniaczych", values: ["280,00 zł"] },
              ]}
              footnote="Cena za komplet (opony/c)"
            />

            <PriceTable
              title="Przechowywanie opon / kół"
              headers={["Typ", "Cena za sezon"]}
              rows={[
                { label: 'Opony do 16" włącznie', values: ["80,00 zł"] },
                { label: 'Opony powyżej 16"', values: ["100,00 zł"] },
                { label: 'Koła do 16" włącznie', values: ["100,00 zł"] },
                { label: 'Koła powyżej 16"', values: ["120,00 zł"] },
              ]}
            />

            <div className="mt-12 p-6 rounded-lg bg-secondary/50 border border-border">
              <h3 className="text-lg font-display font-semibold mb-4 text-primary">
                Uwagi
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>
                  Ceny usług nie ujętych w cenniku ustalane są indywidualnie.
                </li>
                <li>Opony i koła 19, 20 cali - dopłata 40 zł do kompletu.</li>
                <li>
                  Przy wymianie kół o różnych średnicach i różnym rodzaju felg
                  obowiązuje cena odpowiednia dla kół znajdujących się na
                  pojeździe po wymianie.
                </li>
                <li>Opony run flat - dopłata 50 zł brutto.</li>
                <li>Wymiana wentyla koła 1 szt. - dopłata 5 zł brutto.</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cennik;
