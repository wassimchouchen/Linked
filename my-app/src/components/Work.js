// import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
// import WorkCardData from "./WorkCardData";
import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
        {/* <h1 className="project-heading"> - Projects on ML & AI  : </h1> */}
          <div className= "project-container">
            {/* {WorkCardData.map((val , ind) => { */}
              
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
                        <div className="p-4 md:p-10 col-span-4 grid gap-4 grid-cols-2 md:grid-cols-3">
                          {data.map((d, idx) => (
                              <WorkCard key={idx} {...d} />
                              ))}
                        </div>
                        {/* <div className="hidden xl:block p-10">
                          <div className="text-white bg-dark-2 p-4 rounded-md ">
                            I honstly don&#39;t know what to put here
                          </div>
                        </div> */}
                      </div>
                    
                    {/* // key={ind}
                    // imgsrc={val.imgsrc}
                    // title={val.title}
                    // text={val.text}
                    // view={val.view}
                    // source={val.source}
                    / */}
             );
            
 </div>
  </div>

  )
}

export default Work;
const data = [
  {
    title: 'Backend APi',
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
    title: 'Machine learning Project',
    company: 'InstaDeep LtdstaDeep',
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
    title: 'Front-End Interface',
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
    title: 'MlOps Project',
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
    title: 'Deep learning Project',
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
    title: 'React App',
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
    title: 'Next-js',
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
    title: 'UI/UX design application',
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
    title: 'Cloud',
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
    title: 'Deep Neural Network',
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
    title: 'Azure ',
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
    title: 'architecture App',
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