interface Project {
  title: string
  date: string
  description: string
  href: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Monash Grades Calculator',
    date: '2024-12-31',
    description: `A streamlined calculator that computes both GPA and WAM for Monash University students, 
    featuring CSV import and real-time calculations. Built with React, Vite, and Tailwind.`,
    imgSrc: '/static/images/monash-grades-calculator.png',
    href: 'https://liangdi.dev/monash-grades-calculator/',
  },
  {
    title: 'Where should I live in Malaysia?',
    date: '2024-10-17',
    description: `An interactive visualization comparing quality of life across Malaysian states. 
    Explore cost of living, income levels, population density, and development indexes through dynamic maps and charts.`,
    imgSrc: '/static/images/malaysia-liveability-visualization.png',
    href: 'https://liangdi.dev/FIT3179/Assignment-2/',
  },
  {
    title: 'Speedcubing - Malaysia vs Global',
    date: '2024-09-04',
    description: `A comprehensive analysis of Malaysia's speedcubing performance globally. 
    Interactive dashboards showcase national records, event trends, and competitor rankings, 
    highlighting the growing competitive community.`,
    imgSrc: '/static/images/malaysia-speedcubing-visualization.png',
    href: 'https://public.tableau.com/app/profile/liangdi/viz/Speedcubing-MalaysiavsGlobal/Dashboard',
  },
  {
    title: "Nine Men's Morris",
    date: '2023-06-07',
    description: `A modern implementation of the ancient strategy board game where players compete to 
    form mills and capture opponents' pieces. Includes AI opponent capability to provide a single-player experience.`,
    imgSrc: '/static/images/nine-mens-morris.png',
    href: 'https://9-mens-morris.vercel.app/',
  },
  {
    title: 'Mental Gym',
    date: '2024-05-05',
    description: `A student productivity platform combining task tracking with gamified time management. 
    Features experience-based leveling system, real-time progress visualization, and competitive leaderboards.`,
    imgSrc: '/static/images/mental-gym.png',
    href: 'https://devpost.com/software/mental-gym',
  },
  {
    title: 'EdVantage',
    date: '2023-10-20',
    description: `GPT-powered educational platform enabling video content management. Features automatic caption generation, 
    AI-assisted assessments, and comprehensive analytics for tracking student engagement and performance.`,
    imgSrc: '/static/images/EdVantage.png',
    href: 'https://github.com/Monash-FIT3170/EdVantage',
  },
  {
    title: 'Connect Four',
    date: '2022-08-08',
    description: `Web-based Connect Four game with turn indicators and draw detection, built using vanilla JavaScript, HTML, and CSS.`,
    imgSrc: '/static/images/connect-four.png',
    href: 'https://github.com/ligsnf/connect-four',
  },
]

export default projectsData
