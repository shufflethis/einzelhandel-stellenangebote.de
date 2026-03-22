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
    title: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    company: 'Gemeinde HudeSofort-Bewerbung',
    location: 'Hude (Oldb)',
    type: 'Vollzeit',
    category: 'Sonstiges',
    description: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    tags: [],
    date: '2026-03-22'
  },
  {
    id: '2',
    title: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    company: 'Serviscope AG',
    location: 'Köln',
    type: 'Vollzeit',
    category: 'Sonstiges',
    description: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    tags: [],
    date: '2026-03-22'
  },
  {
    id: '3',
    title: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    company: 'Serviscope AG',
    location: 'Troisdorf',
    type: 'Vollzeit',
    category: 'Sonstiges',
    description: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    tags: [],
    date: '2026-03-22'
  },
  {
    id: '4',
    title: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    company: 'Scheidt & Bachmann Signalling Systems GmbH',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    category: 'Sonstiges',
    description: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    tags: [],
    date: '2026-03-22'
  },
  {
    id: '5',
    title: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    company: 'Scheidt & Bachmann Signalling Systems GmbH',
    location: 'Mönchengladbach',
    type: 'Vollzeit',
    category: 'Sonstiges',
    description: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    tags: [],
    date: '2026-03-22'
  },
  {
    id: '6',
    title: 'Versand- & Lagermitarbeiter (m/w/d) als Shipping & Receiving Clerk',
    company: 'Elevate Aircraft Seating GmbH',
    location: 'Kaiserslautern',
    type: 'Vollzeit',
    category: 'Sonstiges',
    description: 'Versand- & Lagermitarbeiter (m/w/d) als Shipping & Receiving Clerk',
    tags: [],
    date: '2026-03-22'
  },
  {
    id: '7',
    title: 'Ausbilder*in im Einzelhandel',
    company: 'Faprik gGmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Ausbilder*in im Einzelhandel',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '8',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '9',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Stadtbergen',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '10',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Gersthofen',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '11',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Königsbrunn bei Augsburg',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '12',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Untermeitingen',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '13',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Buchloe',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '14',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Bad Wörishofen',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '15',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Mindelheim',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '16',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Landsberg am Lech',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '17',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Ottobeuren',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '18',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Schwabmünchen',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '19',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Eggenfelden',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '20',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Taufkirchen (Vils)',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '21',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Frontenhausen',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '22',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Neuötting',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '23',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Plattling',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '24',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Vilshofen an der Donau',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
  },
  {
    id: '25',
    title: 'Teamleiter im Einzelhandel (m/w/d)',
    company: 'TEDi GmbH & Co. KG',
    location: 'Aldersbach',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Einzelhandel',
    description: 'Teamleiter im Einzelhandel (m/w/d)',
    tags: ['Kaufmann/-frau - Einzelhandel'],
    date: '2026-03-20'
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
    name: "Social Media Venture GmbH",
    address: "Schliemannstraße 23, 10437 Berlin",
    contact: "Tel: +49 30 959 988 700 | E-Mail: info@socialmediaventure.com",
    legal: "Amtsgericht Berlin-Charlottenburg, HRB 162557 B | USt-ID: DE298885799 | Geschäftsführer: Thomas Sander"
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