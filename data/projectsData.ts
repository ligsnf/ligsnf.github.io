export const techStackLinks: Record<string, string> = {
  React: 'https://react.dev',
  Vite: 'https://vitejs.dev',
  Tailwind: 'https://tailwindcss.com',
  'Vega-Lite': 'https://vega.github.io/vega-lite',
  Tableau: 'https://www.tableau.com',
  TypeScript: 'https://www.typescriptlang.org',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  HTML: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  CSS: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  NextJS: 'https://nextjs.org',
  PostgreSQL: 'https://www.postgresql.org',
  GPT: 'https://openai.com/gpt-4',
  DrizzleORM: 'https://orm.drizzle.team',
  NextAuth: 'https://next-auth.js.org',
  HTTrack: 'https://www.httrack.com',
  'GitHub Pages': 'https://pages.github.com',
}

type TechStack = keyof typeof techStackLinks

interface Project {
  title: string
  description: string
  href: string
  imgSrc?: string
  tags: TechStack[]
}

const projectsData: Project[] = [
  {
    title: 'Monash Grades Calculator',
    tags: ['React', 'Vite', 'Tailwind', 'TypeScript'],
    description: `A streamlined calculator that computes both GPA and WAM for Monash University students, 
    featuring CSV import and real-time calculations. Built with React, Vite, and Tailwind.`,
    imgSrc: '/static/images/monash-grades-calculator.png',
    href: 'https://liangdi.dev/monash-grades-calculator/',
  },
  {
    title: 'Where should I live in Malaysia?',
    tags: ['Vega-Lite', 'HTML', 'CSS', 'JavaScript'],
    description: `An interactive visualization comparing quality of life across Malaysian states. 
    Explore cost of living, income levels, population density, and development indexes through dynamic maps and charts.`,
    imgSrc: '/static/images/malaysia-liveability-visualization.png',
    href: 'https://liangdi.dev/FIT3179/Assignment-2/',
  },
  {
    title: 'Speedcubing - Malaysia vs Global',
    tags: ['Tableau'],
    description: `A comprehensive analysis of Malaysia's speedcubing performance globally. 
    Interactive dashboards showcase national records, event trends, and competitor rankings, 
    highlighting the growing competitive community.`,
    imgSrc: '/static/images/malaysia-speedcubing-visualization.png',
    href: 'https://public.tableau.com/app/profile/liangdi/viz/Speedcubing-MalaysiavsGlobal/Dashboard',
  },
  {
    title: "Nine Men's Morris",
    tags: ['React', 'Vite', 'Tailwind', 'TypeScript'],
    description: `A modern implementation of the ancient strategy board game where players compete to 
    form mills and capture opponents' pieces. Includes AI opponent capability to provide a single-player experience.`,
    imgSrc: '/static/images/nine-mens-morris.png',
    href: 'https://9-mens-morris.vercel.app/',
  },
  {
    title: 'Mental Gym',
    tags: ['NextJS', 'TypeScript', 'DrizzleORM', 'NextAuth'],
    description: `A student productivity platform combining task tracking with gamified time management. 
    Features experience-based leveling system, real-time progress visualization, and competitive leaderboards.`,
    imgSrc: '/static/images/mental-gym.png',
    href: 'https://devpost.com/software/mental-gym',
  },
  {
    title: 'EdVantage',
    tags: ['NextJS', 'TypeScript', 'GPT'],
    description: `GPT-powered educational platform enabling video content management. Features automatic caption generation, 
    AI-assisted assessments, and comprehensive analytics for tracking student engagement and performance.`,
    imgSrc: '/static/images/EdVantage.png',
    href: 'https://github.com/Monash-FIT3170/EdVantage',
  },
  {
    title: 'Wikipedia Mirror - Apam Balik',
    tags: ['HTTrack', 'GitHub Pages'],
    description: `A static mirror of the Malay Wikipedia page for "Apam balik", showcasing techniques for creating 
    functional static mirrors of web pages while preserving their original styling and interactivity.`,
    imgSrc: '/static/images/apam-balik.png',
    href: 'https://github.com/ligsnf/Apam-balik#readme',
  },
  {
    title: 'Connect Four',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: `Browser-based Connect Four implementation featuring hover preview, turn indicators, 
    draw detection, and a clean reset functionality. Built using vanilla JavaScript, HTML, and CSS.`,
    imgSrc: '/static/images/connect-four.png',
    href: 'https://github.com/ligsnf/connect-four',
  },
]

export default projectsData
