export interface Philosopher {
  id: string
  name: string
  birth: number
  death: number | null
  birthPlace: string
  era: string
  mainThought: string
  shortBio: string
  imageUrl: string
  contribution: string
  keyWorks: string[]
}

const philosophers: Philosopher[] = [
  {
    id: "socrates",
    name: "Sócrates",
    birth: -470,
    death: -399,
    birthPlace: "Atenas, Grecia",
    era: "Antigüedad Clásica",
    mainThought: "El conocimiento es virtud",
    shortBio: "Filósofo griego que desarrolló el método socrático basado en el diálogo y la interrogación.",
    imageUrl: "/socrates-ancient-greek-philosopher.jpg",
    contribution: "Fundó las bases de la filosofía occidental mediante el diálogo crítico.",
    keyWorks: ["Diálogos de Platón", "Método Socrático"],
  },
  {
    id: "plato",
    name: "Platón",
    birth: -428,
    death: -348,
    birthPlace: "Atenas, Grecia",
    era: "Antigüedad Clásica",
    mainThought: "Teoría de las Formas",
    shortBio: "Estudiante de Sócrates, fundó la Academia y desarrolló la teoría de las formas ideales.",
    imageUrl: "/plato-ancient-greek-philosopher.jpg",
    contribution: "Desarrolló la teoría de las formas y sentó bases para la metafísica occidental.",
    keyWorks: ["La República", "El Banquete", "Fedón"],
  },
  {
    id: "aristotle",
    name: "Aristóteles",
    birth: -384,
    death: -322,
    birthPlace: "Estagira, Grecia",
    era: "Antigüedad Clásica",
    mainThought: "Lógica y Metafísica",
    shortBio: "Estudiante de Platón, desarrolló el sistema de la lógica formal y la metafísica.",
    imageUrl: "/aristotle-ancient-greek-philosopher.jpg",
    contribution: "Creó la lógica formal y transformó el pensamiento filosófico occidental.",
    keyWorks: ["Metafísica", "Ética a Nicómaco", "Política"],
  },
  {
    id: "descartes",
    name: "René Descartes",
    birth: 1596,
    death: 1650,
    birthPlace: "La Haye, Francia",
    era: "Edad Moderna",
    mainThought: "Cogito, ergo sum",
    shortBio: "Filósofo y matemático francés que revolucionó el pensamiento con el método del escepticismo metódico.",
    imageUrl: "/descartes-modern-philosopher.jpg",
    contribution: "Fundó la filosofía moderna y desarrolló el método de la duda cartesiana.",
    keyWorks: ["Meditaciones Metafísicas", "El Discurso del Método"],
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    birth: 1724,
    death: 1804,
    birthPlace: "Königsberg, Prusia",
    era: "Ilustración",
    mainThought: "Crítica de la Razón Pura",
    shortBio: "Filósofo alemán que sintetizó el racionalismo y el empirismo en su filosofía crítica.",
    imageUrl: "/kant-philosopher-enlightenment.jpg",
    contribution: "Revolucionó la epistemología y la ética con sus críticas y el imperativo categórico.",
    keyWorks: ["Crítica de la Razón Pura", "Crítica de la Razón Práctica", "Fundamentación"],
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    birth: 1844,
    death: 1900,
    birthPlace: "Röcken, Prusia",
    era: "Siglo XIX",
    mainThought: "Más allá del bien y del mal",
    shortBio:
      "Filósofo alemán que cuestionó los valores occidentales y propuso la transvaloración de todos los valores.",
    imageUrl: "/nietzsche-german-philosopher.jpg",
    contribution: "Transformó la filosofía moderna con su crítica de la moral y su concepto del superhombre.",
    keyWorks: ["Así habló Zaratustra", "Más allá del bien y del mal", "La genealogía de la moral"],
  },
]

export function getAllPhilosophers(): Philosopher[] {
  return philosophers
}

export function getPhilosopherById(id: string): Philosopher | undefined {
  return philosophers.find((p) => p.id === id)
}

export function getPhilosophersByEra(era: string): Philosopher[] {
  return philosophers.filter((p) => p.era === era)
}
