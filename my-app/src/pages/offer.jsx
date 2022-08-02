import { Card } from '../components/JobCard'
import Head from '../components/head'
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2";

export default function Offer() {
  return (
    <>
    <Head>
        <title>Linked</title>
    </Head>
   <HeroImg2 heading="OFFERS" text="ADD A JOB"/>

    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
      <div className="p-4 md:p-10 col-span-4 grid gap-4 grid-cols-1 md:grid-cols-3">
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
    <Footer/>
            </>
  )
}



const data = [
    {
      title: 'Backend Software Engineer',
      company: 'Yassir',
      location: 'Tunis, Tunisia',
      date: '6 months ago',
      tasks: [    ],
      about:"",
          requirements: [
        ],
      applied: 162,
      type: 'Full-time'
   
    },
    {
      title: 'Machine learning Engineer',
      company: 'InstaDeep Ltd',
      location: 'Paris, French',
      date: '6 months ago',
      tasks: [
      ],
      about:
          'Hey',
      requirements: [
        ],
      applied: 98,
      type: 'Full-time',
      
    },
    {
      title: 'Front-End Engineer',
      company: 'cognira',
      location: 'Ariana, Tunisia',
      date: '6 months ago',
      tasks: [
      ],
  
      requirements: [
       
      ],
      applied: 80,
      type: 'Full-time',
      
    },
    {
      title: 'MlOps Engineer',
      company: 'InstaDeep',
      location: 'Paris, French',
      date: '2 months ago',
      tasks: [    ],
      about:
      "heyy",
      requirements: [
     
      ],
      applied: 162,
      type: 'Full-time',
      
    },
    {
      title: 'Deep learning Engineer',
      company: 'Open NLP',
      location: 'Paris, French',
      date: '1 months ago',
      tasks: [
  
      ],
      about:"",
      requirements: []
      ,
      applied: 5,
      type: 'Full-time',
  
    },
    {
      title: 'Cloud Engineer',
      company: 'Google ',
      location: 'Paris, French',
      date: '6 months ago',
      tasks: [
  
      ],
      about: "",
      requirements: [],
      applied: 14,
      type: 'Full-time',
      
    },
    {
      title: 'Designer',
      company: 'Value',
      location: 'U.K ',
      date: '3 months ago',
      tasks: [],
      about:""
      ,
      requirements: [
         ],
      applied: 66,
      type: 'Full-time',
      
    },
    {
      title: 'Front-End Engineer',
      company: 'cognira',
      location: 'Ariana, Tunisia',
      date: '6 months ago',
      tasks: [
      ],
  
      requirements: [
       
      ],
      applied: 80,
      type: 'Full-time',
      
    },
    {
      title: 'MlOps Engineer',
      company: 'InstaDeep',
      location: 'Paris, French',
      date: '2 months ago',
      tasks: [    ],
      about:
      "heyy",
      requirements: [
     
      ],
      applied: 162,
      type: 'Full-time',
      
    },
    {
      title: 'Deep learning Engineer',
      company: 'Open NLP',
      location: 'Paris, French',
      date: '1 months ago',
      tasks: [
  
      ],
      about:"",
      requirements: []
      ,
      applied: 5,
      type: 'Full-time',
  
    },
    {
      title: 'Cloud Engineer',
      company: 'Google ',
      location: 'Paris, French',
      date: '6 months ago',
      tasks: [
  
      ],
      about: "",
      requirements: [],
      applied: 14,
      type: 'Full-time',
      
    },
    {
      title: 'Designer',
      company: 'Value',
      location: 'U.K ',
      date: '3 months ago',
      tasks: [],
      about:""
      ,
      requirements: [
         ],
      applied: 66,
      type: 'Full-time',
      
    },
  ]