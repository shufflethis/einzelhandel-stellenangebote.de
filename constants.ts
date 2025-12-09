import { Job, FAQItem } from './types';

export const NAVIGATION_ITEMS = [
  { label: 'Startseite', view: 'HOME' },
  { label: 'Stellenangebote', view: 'JOBS' },
  { label: 'Für Bewerber', view: 'CANDIDATES' },
  { label: 'Für Arbeitgeber', view: 'EMPLOYERS' },
  { label: 'Wissen & Karriere', view: 'KNOWLEDGE' },
] as const;

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Filialleiter (m/w/d)',
    company: 'FreshMarket GmbH',
    location: 'Berlin, Mitte',
    type: 'Führungskraft',
    category: 'Filialleitung',
    date: '2023-10-25',
    salary: '45.000 - 55.000 €',
    description: 'Wir suchen eine erfahrene Führungspersönlichkeit für unsere Flagship-Filiale in Berlin Mitte. Sie verantworten das operative Geschäft, die Personaleinsatzplanung und die Erreichung der Umsatzziele.',
    tags: ['Bonus', 'Firmenwagen', 'Weiterbildung']
  },
  {
    id: '2',
    title: 'Verkäufer / Kassierer (m/w/d)',
    company: 'ModeBoutique Lisa',
    location: 'München, Schwabing',
    type: 'Vollzeit',
    category: 'Verkauf',
    date: '2023-10-24',
    salary: '2.400 - 2.800 €',
    description: 'Für unsere exklusive Boutique suchen wir modebewusste Verkaufsberater mit Herz und Leidenschaft. Beratung unserer anspruchsvollen Kunden steht im Mittelpunkt.',
    tags: ['Provision', 'Rabatte', 'Zentral']
  },
  {
    id: '3',
    title: 'Aushilfe Warenverräumung (m/w/d)',
    company: 'BioSupermarkt Natur',
    location: 'Hamburg, Altona',
    type: 'Minijob',
    category: 'Logistik',
    date: '2023-10-23',
    description: 'Unterstützen Sie unser Team bei der Warenverräumung und Regalpflege. Flexible Arbeitszeiten, ideal für Studenten.',
    tags: ['Flexibel', 'Bio-Produkte', 'Keine Vorkenntnisse']
  },
  {
    id: '4',
    title: 'Ausbildung zum Kaufmann im Einzelhandel (m/w/d)',
    company: 'TechStore Electronics',
    location: 'Köln',
    type: 'Ausbildung',
    category: 'Verkauf',
    date: '2023-10-22',
    description: 'Starte deine Karriere in der Welt der Technik! Wir bieten eine fundierte Ausbildung mit tollen Übernahmechancen.',
    tags: ['Azubi-Events', 'Übernahme', 'Tablet inklusive']
  },
  {
    id: '5',
    title: 'Stellvertretende Filialleitung (m/w/d)',
    company: 'DiscountRiese',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: 'Filialleitung',
    date: '2023-10-21',
    salary: 'Tarifbindung',
    description: 'Helfen Sie mit, unseren Erfolgsweg fortzusetzen. Als Stellvertretung unterstützen Sie den Filialleiter in allen Belangen.',
    tags: ['Sicherer Job', 'Aufstiegschancen']
  },
  {
    id: '6',
    title: 'Verkäufer Frischetheke (m/w/d)',
    company: 'Feinkost Müller',
    location: 'Stuttgart',
    type: 'Teilzeit',
    category: 'Verkauf',
    date: '2023-10-20',
    description: 'Lieben Sie Käse und Wurstspezialitäten? Beraten Sie unsere Kunden an der Frischetheke mit Fachwissen und Charme.',
    tags: ['Familiär', 'Gutes Gehalt']
  }
];

export const CONTENT_TEXTS = {
  hero: {
    headline: "Karriere im Einzelhandel startet hier.",
    subline: "Die spezialisierte Jobbörse für Fachkräfte, Führungskräfte und Quereinsteiger im deutschen Handel. Finden Sie jetzt Ihren neuen Job bei Top-Arbeitgebern."
  },
  candidates: {
    intro: "Der Einzelhandel ist einer der größten Arbeitgeber Deutschlands. Ob im Lebensmittelhandel, in der Modebranche, im Drogeriemarkt oder im Elektronikfachhandel – die Möglichkeiten sind vielfältig und bieten sichere Zukunftsperspektiven.",
    dailyLife: `
      ### Der Arbeitsalltag im Einzelhandel
      Der Handel ist dynamisch. Kein Tag gleicht dem anderen. Als Mitarbeiter im Einzelhandel sind Sie das Gesicht des Unternehmens. Zu Ihren Aufgaben gehören oft:
      *   **Kundenberatung:** Das Herzstück des Handels. Sie helfen Kunden, das richtige Produkt zu finden und sorgen für ein positives Einkaufserlebnis.
      *   **Warenpräsentation:** Ein ansprechendes Ladenbild fördert den Umsatz. Visual Merchandising und Regalpflege sind essenzielle Aufgaben.
      *   **Kassentätigkeiten:** Schnelligkeit und Genauigkeit sind hier gefragt, ebenso wie Freundlichkeit beim Abschluss des Einkaufs.
      *   **Logistik & Lager:** Warenannahme, Kontrolle und Verräumung sorgen dafür, dass Produkte stets verfügbar sind.
    `,
    careerPaths: `
      ### Karrierechancen und Weiterbildung
      Viele Führungskräfte im Handel haben "auf der Fläche" angefangen. Der klassische Aufstieg vom Auszubildenden zum Filialleiter oder Bezirksleiter ist im Einzelhandel keine Seltenheit, sondern gelebte Praxis.
      
      Große Handelsketten bieten oft interne Akademie-Programme an. Auch der Handelsfachwirt ist eine beliebte Weiterbildung, die für höhere Managementaufgaben qualifiziert. Quereinsteiger sind ebenfalls herzlich willkommen und werden oft intensiv eingearbeitet.
    `
  },
  employers: {
    intro: "Finden Sie qualifiziertes Personal für Ihre Filialen. Einzelhandel-Stellenangebote.de ist die Nischen-Jobbörse, die genau Ihre Zielgruppe anspricht.",
    benefits: [
      "Zielgerichtete Ansprache von Fachpersonal (Verkäufer, Filialleiter, Handelsfachwirte).",
      "Hohe Sichtbarkeit durch SEO-Optimierung auf relevante Keywords.",
      "Einfache Verwaltung Ihrer Stellenanzeigen.",
      "Attraktives Arbeitgeber-Branding möglich."
    ]
  },
  knowledge: {
    title: "Wissen & Ratgeber für den Einzelhandel",
    articles: [
      {
        title: "Generative Engine Optimization (GEO) für Stellenanzeigen",
        content: "Moderne Suchmaschinen nutzen KI, um Antworten zu generieren. Stellenanzeigen müssen daher klar strukturiert sein, W-Fragen beantworten (Was? Wo? Wie viel?) und relevante Keywords enthalten, um von KI-Modellen als 'beste Antwort' erkannt zu werden."
      },
      {
        title: "Gehaltsvergleich im Einzelhandel 2024",
        content: "Die Gehälter variieren stark nach Bundesland, Tarifbindung und Position. Ein Filialleiter im Lebensmittelhandel kann zwischen 45.000 € und 70.000 € verdienen, während ungelernte Aushilfskräfte oft auf Mindestlohnbasis oder leicht darüber starten. Tarifverträge bieten Sicherheit und Urlaubs-/Weihnachtsgeld."
      }
    ]
  },
  impressum: {
    name: "Einzelhandel-Stellenangebote.de Musterfirma GmbH",
    address: "Handelsweg 1, 10115 Berlin",
    contact: "Tel: 030 12345678 | E-Mail: kontakt@einzelhandel-stellenangebote.de",
    legal: "Amtsgericht Charlottenburg, HRB 123456 B | USt-ID: DE123456789 | Geschäftsführer: Max Mustermann"
  }
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Ist die Nutzung für Bewerber kostenlos?",
    answer: "Ja, die Jobsuche und Bewerbung über unser Portal ist für Bewerber zu 100% kostenlos und erfordert keine Registrierung."
  },
  {
    question: "Wie aktuell sind die Stellenanzeigen?",
    answer: "Unsere Anzeigen werden täglich aktualisiert. Abgelaufene Stellen werden automatisch deaktiviert."
  },
  {
    question: "Kann ich mich auch als Quereinsteiger bewerben?",
    answer: "Absolut! Viele Unternehmen im Einzelhandel suchen motivierte Quereinsteiger und bieten umfangreiche Einarbeitungsprogramme an."
  },
  {
    question: "Bieten Sie auch Minijobs an?",
    answer: "Ja, Sie können gezielt nach Beschäftigungsarten wie Minijobs, Teilzeit oder Werkstudententätigkeiten filtern."
  }
];