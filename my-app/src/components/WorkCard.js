// import "./WorkCardStyles.css";
// import { NavLink } from "react-router-dom";
import React from 'react'
import { Place, Date, People, WorkBag } from './Icons'

const WorkCard = (props) => {
    return (
        <div className="bg-white rounded-md shadow w-full min-h-80 p-4">
        <div className="flex items-center space-x-2 ">
          <h1 className="font-black text-xl">{props.title}</h1>
          
        </div>
        <div className="grid gap-2 xl:flex xl:space-x-2 py-4 text-xs flex-wrap">
          <div className="flex items-center space-x-1 border border-light-2 rounded-md px-2 py-1">
            <Place />
            <h4 className="font-bold">Place: </h4>
            <p>{props.location}</p>
          </div>
          <div className="flex items-center space-x-2 border border-light-2 rounded-md px-2 py-1">
            <Date />
            <h4 className="font-bold">Publish Date: </h4>
            <p>{props.date}</p>
          </div>
          
  
          <div className="flex items-center space-x-2 border border-light-2 rounded-md px-2 py-1">
            <WorkBag />
            <h4 className="font-bold">Job Type: </h4>
            <p>{props.type}</p>
          </div>
        </div>
        <div className="text-sm py-2"></div>
        <div className="text-sm py-2">
          <span className="font-black">About this project: </span> <br />
          {props.about}
        </div>

        {props.requirements.length > 0 && (
          <div className="text-sm py-2">
            <span className="font-black">Requirements: </span> <br />
            <ul className="grid px-5">
              {props.requirements.map((task, idx) => (
                <li key={idx} className="list-disc">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
        
        // <div className="project-card">
        //     <img src={props.imgsrc} alt="XXX" />
        //     <h2 className="project-title">{props.title}</h2>
        //     <div className="pro-details">
        //         <p>{props.text}</p>
        //         <div className="pro-btns">
        //             <NavLink to={props.view} className="btn">
        //                 View project
        //             </NavLink>
        //             <NavLink to={props.source} className="btn">
        //                 Contact owner
        //             </NavLink>

        //         </div>
        //     </div>
        // </div>

    );
}

export default WorkCard