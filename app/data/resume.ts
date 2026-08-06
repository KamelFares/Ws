export interface Experience {
  title: string
  org: string
  date: string
  description: string
  stars: number // 1-8 for card star rating
}

export interface Project {
  name: string
  tech: string
  description: string
  atk: number // frontend complexity 0-3000
  def: number // backend complexity 0-3000
  stars: number
  attribute: 'DARK' | 'LIGHT' | 'FIRE' | 'WATER' | 'EARTH' | 'WIND'
  type: string // e.g. 'Web App / Effect'
  link?: string
}

export interface Skill {
  label: string
  items: string
}

export interface Education {
  title: string
  school: string
  courses?: string
  date?: string
}

export const experiences: Experience[] = [
  {
    title: 'Software Developer',
    org: 'Edel Optics',
    date: '2025 – Present',
    description: 'Migrating legacy frontend to Vue.js Composition API. Building UI components with Nuxt and Pinia. Ensuring accessibility and security best practices.',
    stars: 6
  },
  {
    title: 'Hardware and Smart eyewear designer',
    org: 'Dinge.cool',
    date: '(not selling)',
    description: 'I design and manufacture cool stuff from I2C integrated sunglasses and Retro style buddies with cameras and cute reto animation and smart accessories with NFC and electronic components(some without due to the presence of N52 magnets), and using highly engineered materials such as: Carbon Fiber, PA12 Nylon, ASA.',
    stars: 5
  },
  {
    title: 'Machine Learning Engineer',
    org: 'Omdena',
    date: '2023',
    description: 'Contributed to a Mental Support LLM. EDA, data analysis, model optimization with XGBoost.',
    stars: 4
  },
  {
    title: 'Data Science Intern',
    org: 'The Sparks Foundation',
    date: '2023',
    description: 'Delivered 8 projects across Supervised/Unsupervised ML: K-Means, Time Series, Regression.',
    stars: 4
  },
  {
    title: 'Content Creator',
    org: 'MathematikZ · YouTube',
    date: '2025 – Present',
    description: 'Math visualization content with Manim, R, and LaTeX in EN/DE.',
    stars: 3
  }
]

export const projects: Project[] = [
  {
    name: 'BeBlind.app',
    tech: 'Web App · Live',
    description: 'Web application simulating eye diseases and visual impairments for accessibility awareness.',
    atk: 2400,
    def: 1800,
    stars: 7,
    attribute: 'LIGHT',
    type: 'Web App',
    link: 'https://beblind.app'
  },
  {
    name: 'ML Suite',
    tech: 'PyTorch · Python',
    description: 'Breast Cancer Classification and Fraud Detection using deep learning pipelines.',
    atk: 2000,
    def: 2800,
    stars: 6,
    attribute: 'DARK',
    type: 'ML Pipeline'
  },
  {
    name: 'Web Scraper',
    tech: 'Scrapy · Selenium',
    description: 'Automated data extraction engine with rotating proxies and IP management.',
    atk: 1600,
    def: 2200,
    stars: 5,
    attribute: 'WIND',
    type: 'Automation'
  },
  {
    name: 'Port Scanner',
    tech: 'Rust',
    description: 'Multithreaded high-performance network analysis and port scanning tool.',
    atk: 2800,
    def: 1200,
    stars: 0,
    attribute: 'FIRE',
    type: 'Network Tool'
  }
]

export const skills: Skill[] = [
  { label: 'Languages', items: 'JavaScript, PHP, C, C++(14), Java, SQL' },
  { label: 'Frameworks', items: 'Vue.js, Nuxt, Pinia, PyTorch, Docker, PostgreSQL, AzureML, Fabric' },
  { label: 'Certs', items: 'Azure AI-900, Azure DP-100, GitHub Certified, Google Data Eng. (in progress)' },
  { label: 'Languages', items: 'Arabic (C2), English (C2), German (C1)' }
]

export const education: Education[] = [
  {
    title: 'B.Sc. Computer Engineering',
    school: 'HAW Hamburg',
    date: 'Expected 2027',
    courses: 'Electronics I & II, Signals & Systems, OS, FPGA Design, Digital Logic, Cybersecurity, Embedded Systems, Low-Level Programming'
  },
  {
    title: 'Abitur — Grade 1.1 (Top 0.008%)',
    school: 'Sahara International Schools'
  }
]

export const heroData = {
  name: 'Kamel Fares',
  title: 'Software Developer · Hamburg',
  tagline: 'I love tech, Like really really love it !!!',
  email: 'Kamelfares122@gmail.com',
  linkedin: 'https://linkedin.com/in/kamel-fares',
  github: 'https://github.com/kamelfares',
  youtube: 'https://www.youtube.com/@mathematikss'
}
