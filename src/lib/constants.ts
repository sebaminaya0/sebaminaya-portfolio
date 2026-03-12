export type HighlightColor = 'yellow' | 'pink' | 'blue' | 'green' | 'orange';

export const highlightColorClasses = {
  yellow: {
    bg: 'bg-highlight-yellow',
    text: 'text-white',
    border: 'border-highlight-yellow',
    bgLight: 'bg-gray-100',
    hover: 'hover:bg-highlight-yellow/90',
  },
  pink: {
    bg: 'bg-highlight-pink',
    text: 'text-white',
    border: 'border-highlight-pink',
    bgLight: 'bg-gray-100',
    hover: 'hover:bg-highlight-pink/90',
  },
  blue: {
    bg: 'bg-highlight-blue',
    text: 'text-white',
    border: 'border-highlight-blue',
    bgLight: 'bg-gray-100',
    hover: 'hover:bg-highlight-blue/90',
  },
  green: {
    bg: 'bg-highlight-green',
    text: 'text-white',
    border: 'border-highlight-green',
    bgLight: 'bg-gray-100',
    hover: 'hover:bg-highlight-green/90',
  },
  orange: {
    bg: 'bg-highlight-orange',
    text: 'text-white',
    border: 'border-highlight-orange',
    bgLight: 'bg-gray-100',
    hover: 'hover:bg-highlight-orange/90',
  },
};

export const getHighlightColorClasses = (color: HighlightColor, type: 'bg' | 'text' | 'border' | 'bgLight' | 'hover') => {
  return highlightColorClasses[color][type];
};

// TODO: Replace demoUrl and githubUrl values with real URLs for each project
export const featuredProjects = [
  {
    title: "Análisis de Ventas con R",
    description: "Análisis exploratorio completo de datos de ventas utilizando R para identificar patrones, tendencias y oportunidades de negocio. Implementación de modelos estadísticos para pronóstico.",
    technologies: ["R", "ggplot2", "dplyr", "Statistical Analysis"],
    highlightColor: "yellow" as HighlightColor,
    demoUrl: "https://demo.example.com/r-sales-analysis",
    githubUrl: "https://github.com/sebaminaya/r-sales-analysis",
  },
  {
    title: "Pipeline de Machine Learning",
    description: "Desarrollo completo de un pipeline de machine learning automatizado para procesamiento de datos, entrenamiento de modelos y despliegue en producción.",
    technologies: ["Python", "scikit-learn", "pandas", "MLflow"],
    highlightColor: "pink" as HighlightColor,
    demoUrl: "https://demo.example.com/ml-pipeline",
    githubUrl: "https://github.com/sebaminaya/ml-pipeline",
  },
  {
    title: "Dashboard con Jupyter Notebook",
    description: "Creación de dashboards interactivos utilizando Jupyter Notebook y Python para visualización de datos en tiempo real y reportes automatizados.",
    technologies: ["Python", "Jupyter", "matplotlib", "Plotly"],
    highlightColor: "blue" as HighlightColor,
    demoUrl: "https://demo.example.com/jupyter-dashboard",
    githubUrl: "https://github.com/sebaminaya/jupyter-dashboard",
  },
];

export const services = [
  {
    iconName: "Code",
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas con las últimas tecnologías",
    highlightColor: "yellow" as HighlightColor,
  },
  {
    iconName: "Database",
    title: "Análisis de Datos",
    description: "Transformación de datos en insights valiosos para tu negocio",
    highlightColor: "pink" as HighlightColor,
  },
  {
    iconName: "BarChart3",
    title: "Machine Learning",
    description: "Modelos predictivos y soluciones de IA personalizadas",
    highlightColor: "blue" as HighlightColor,
  },
];

export const statistics = [
  { value: "5+", label: "Años de experiencia", color: "yellow" as HighlightColor },
  { value: "50+", label: "Proyectos completados", color: "pink" as HighlightColor },
  { value: "10+", label: "Tecnologías dominadas", color: "blue" as HighlightColor },
  { value: "100%", label: "Satisfacción del cliente", color: "green" as HighlightColor },
];

// ========================
// Sobre Mí data
// ========================

export type SkillItem = { name: string; highlightColor: HighlightColor };

export const skills: Record<string, SkillItem[]> = {
  "Desarrollo Web": [
    { name: "Next.js", highlightColor: "yellow" },
    { name: "React", highlightColor: "blue" },
    { name: "TypeScript", highlightColor: "blue" },
    { name: "Tailwind CSS", highlightColor: "green" },
    { name: "Node.js", highlightColor: "green" },
  ],
  "Análisis de Datos": [
    { name: "Python", highlightColor: "yellow" },
    { name: "R", highlightColor: "blue" },
    { name: "pandas", highlightColor: "pink" },
    { name: "NumPy", highlightColor: "blue" },
    { name: "SQL", highlightColor: "orange" },
  ],
  "Machine Learning": [
    { name: "scikit-learn", highlightColor: "pink" },
    { name: "TensorFlow", highlightColor: "orange" },
    { name: "PyTorch", highlightColor: "orange" },
    { name: "MLflow", highlightColor: "blue" },
    { name: "Keras", highlightColor: "orange" },
  ],
  "Herramientas": [
    { name: "Git", highlightColor: "orange" },
    { name: "Docker", highlightColor: "blue" },
    { name: "Jupyter", highlightColor: "yellow" },
    { name: "VS Code", highlightColor: "blue" },
    { name: "Linux", highlightColor: "yellow" },
  ],
};

export type ExperienceItem = {
  period: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2022 - Presente",
    position: "Desarrollador & Analista de Datos Independiente",
    company: "Consultoría Freelance",
    description: "Brindo servicios de consultoría en desarrollo web, análisis de datos y machine learning para clientes diversos. He completado más de 20 proyectos exitosos en sectores como e-commerce, finanzas y salud.",
    technologies: ["Next.js", "Python", "R", "TensorFlow", "PostgreSQL"],
  },
  {
    period: "2020 - 2022",
    position: "Analista de Datos Senior",
    company: "Tech Solutions S.A.",
    description: "Lideré el equipo de análisis de datos, desarrollando dashboards interactivos y modelos predictivos que mejoraron la toma de decisiones en un 40%. Implementé pipelines de datos automatizados que redujeron el tiempo de procesamiento en 60%.",
    technologies: ["Python", "SQL", "Tableau", "Apache Spark", "AWS"],
  },
  {
    period: "2018 - 2020",
    position: "Desarrollador Web Full Stack",
    company: "Digital Agency Pro",
    description: "Desarrollé aplicaciones web completas utilizando React y Node.js. Participé en más de 15 proyectos para clientes internacionales, implementando soluciones escalables y optimizadas para rendimiento.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
  },
];

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
  credential: string;
};

export const certifications: CertificationItem[] = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
    credential: "TF-2023-001234",
  },
  {
    name: "Professional Data Scientist",
    issuer: "IBM",
    year: "2022",
    credential: "IBM-PDS-2022-5678",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2021",
    credential: "AWS-SA-2021-9012",
  },
];

// ========================
// Blog posts
// ========================

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  highlightColor: HighlightColor;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "r-vs-python-analisis-datos-2026",
    title: "R vs Python para Análisis de Datos en 2026",
    excerpt: "Una comparación práctica de ambos ecosistemas basada en proyectos reales: cuándo elegir cada uno y cómo combinarlos.",
    date: "2026-02-20",
    tags: ["R", "Python", "Análisis de Datos"],
    highlightColor: "yellow",
  },
  {
    slug: "jupyter-a-produccion-mlflow",
    title: "De Jupyter a Producción: Pipelines ML con MLflow",
    excerpt: "Guía paso a paso para llevar modelos entrenados en notebooks a entornos de producción robustos usando MLflow y Docker.",
    date: "2026-01-15",
    tags: ["MLflow", "Docker", "Machine Learning"],
    highlightColor: "pink",
  },
  {
    slug: "nextjs-portfolio-datos",
    title: "Construye tu Portafolio de Datos con Next.js",
    excerpt: "Cómo diseñar y desplegar un portafolio profesional como analista de datos usando Next.js, Tailwind y Vercel.",
    date: "2025-12-10",
    tags: ["Next.js", "Portafolio", "Desarrollo Web"],
    highlightColor: "blue",
  },
];
