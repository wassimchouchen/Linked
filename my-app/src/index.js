import { Card } from '../components/JobCard'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
      <div className="p-4 md:p-10 col-span-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        {data.map((d, idx) => (
          <Card key={idx} {...d} />
        ))}
      </div>
      <div className="hidden xl:block p-10">
        <div className="text-white bg-dark-2 p-4 rounded-md ">
          I honstly don&#39;t know what to put here
        </div>
      </div>
    </div>
  )
}

interface Props {
  title: string
  company: string
  location: string
  date: string
  tasks: string[]
  about: string
  requirements: string[]
  applied: number
  type: string
  aboutCompany: string
}

const data = [
  {
    title: 'Backend Software Engineer',
    company: 'Yassir',
    location: 'Tunis, Tunisia',
    date: '6 months ago',
    tasks: [
      'Design and create (micro)services and system architecture for projects, and contribute and provide feedback to other team members',
      'Help improve existing code quality through writing unit tests, automation and performing code reviews',
      'Participate in brainstorming sessions and contribute ideas to our technology, algorithms and products',
    ],
    about:
      'you will be part of our engineering team, working with a high-quality code base and the latest tools, where you will promote your skills to be an expert in complex backend development, including microservices architecture, using Node.js, Python or Go. You will own and build large scale backend systems and micro-services. You will design, develop, and deliver powerful server-side applications in a highly dynamic environment, where root cause analysis and rapid problem-solving are required.',
    requirements: [
      'A BS degree in computer or any equivalent experience',
      'MS degree and above preferred',
      'Solid OOP and software design knowledge',
      'you should know how to create software that is extensible, reusable and meets desired architectural objectives',
    ],
    applied: 162,
    type: 'Full-time',
    aboutCompany:
      'Yassir is the leading super App for on demand and payment services in the Maghreb region set to changing the way daily services are provided. It currently operates in 26 cities across Algeria, Morocco and Tunisia with recent expansions into France, Canada and Sub-Saharan Africa. It is backed (+$43M in funding) by VCs from Silicon Valley, Europe and other parts of the world including Y Combinator, which is the precursor of the likes of Airbnb, Stripe, Dropbox, Doordash, among others. We offer on-demand services such as ride-hailing and last-mile delivery. Building on this infrastructure, we are now introducing financial services to help our users pay, save and borrow digitally. Helping usher the continent into a digital economy era. We&#39;re not just about serving people - we&#39;re about creating a marketplace to bring people what they need while infusing social values.',
  },
  {
    title: 'Backend Software Engineer',
    company: 'Yassir',
    location: 'Tunis, Tunisia',
    date: '6 months ago',
    tasks: [
      'Design and create (micro)services and system architecture for projects, and contribute and provide feedback to other team members',
      'Help improve existing code quality through writing unit tests, automation and performing code reviews',
      'Participate in brainstorming sessions and contribute ideas to our technology, algorithms and products',
    ],
    about:
      'you will be part of our engineering team, working with a high-quality code base and the latest tools, where you will promote your skills to be an expert in complex backend development, including microservices architecture, using Node.js, Python or Go. You will own and build large scale backend systems and micro-services. You will design, develop, and deliver powerful server-side applications in a highly dynamic environment, where root cause analysis and rapid problem-solving are required.',
    requirements: [
      'A BS degree in computer or any equivalent experience',
      'MS degree and above preferred',
      'Solid OOP and software design knowledge',
      'you should know how to create software that is extensible, reusable and meets desired architectural objectives',
    ],
    applied: 162,
    type: 'Full-time',
    aboutCompany:
      'Yassir is the leading super App for on demand and payment services in the Maghreb region set to changing the way daily services are provided. It currently operates in 26 cities across Algeria, Morocco and Tunisia with recent expansions into France, Canada and Sub-Saharan Africa. It is backed (+$43M in funding) by VCs from Silicon Valley, Europe and other parts of the world including Y Combinator, which is the precursor of the likes of Airbnb, Stripe, Dropbox, Doordash, among others. We offer on-demand services such as ride-hailing and last-mile delivery. Building on this infrastructure, we are now introducing financial services to help our users pay, save and borrow digitally. Helping usher the continent into a digital economy era. We&#39;re not just about serving people - we&#39;re about creating a marketplace to bring people what they need while infusing social values.',
  },
]
