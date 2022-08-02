//import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";



const WorkCard = () => {
    return (
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
           <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4">
                 <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[1140px]">
                    <h2
                       className="
                       font-bold
                       text-3xl
                       sm:text-4xl
                       md:text-[40px]
                       text-slate-900
                       mb-4
                       "
                       >
                       ARTIFICIAL INTELLIGENCE & MACHINE LEARNING PROJECTS
                    </h2>
                    <p className="text-base text-body-color  font-bold text-gray-700">
                    In this current technology-driven world, machine learning is a prominent area that makes our machine or electronic device intelligent. The purpose of this field is to transform a simple machine into a machine with the mind. In this article, we explore machine learning and artificial intelligence projects to boost your interest. Because these AI and ML projects are so competitive, tricky, and interesting to develop. I firmly believe these projects are the best place to invest your time and skill. Let’s move on to explore interesting, innovative as well as easy machine learning projects.
                    </p>
                 </div>
              </div>
           </div>
           <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                 <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                       <img
                          src= {pro1}
                          alt="image"
                          className="w-full"
                          />
                    </div>
                    <div>
                       <span
                         className="
                         bg-slate-600
                          rounded
                          inline-block
                          text-center
                          py-1
                          px-4
                          text-xs
                          leading-loose
                          font-semibold
                          text-white
                          mb-5
                          "
                          >
                       Dec 22, 2023
                       </span>
                       <h3>
                          <a
                             href="javascript:void(0)"
                             className="
                             font-semibold
                             text-xl
                             sm:text-2xl
                             lg:text-xl
                             xl:text-2xl
                             mb-4
                             inline-block
                             text-stone-900
                             hover:text-primary
                             "
                             >
                             "Named entity recognition"
                          </a>
                       </h3>
                       <p className="text-base text-sky-900 text-body-color">
                        "Named entity recognition (NER) also called entity identification or entity extracting is a natural language processing (NLP) technique that automatically identifies named entities in a text and classifies them into predefined categories  Entities can be names of people, organizations, locations, times, quantities, monetary values,percentages, and more." 
                       </p>
                    </div> 
                      <div className="d-grid gap-2 d-md-block">
                    <a href='/contact' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">contact owner</a>
                    <a href='url' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">View project</a>  
                   </div>
                 </div> 
                   
              </div> 
            
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                 <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                       <img
                          src= {pro2}
                          alt="image"
                          class="w-full"
                          />
                    </div>
                    <div>
                       <span
                          className="
                          bg-slate-600
                          rounded
                          inline-block
                          text-center
                          py-1
                          px-4
                          text-xs
                          leading-loose
                          font-semibold
                          text-white
                          mb-5
                          "
                          >
                       Mar 15, 2023
                       </span>
                       <h3>
                          <a
                             href="javascript:void(0)"
                             className="
                             font-semibold
                             text-xl
                             sm:text-2xl
                             lg:text-xl
                             xl:text-2xl
                             mb-4
                             inline-block
                             text-stone-900
                             hover:text-primary
                             "
                             >
                             "Generating articles using gpt-2 "
                          </a>
                       </h3>
                       <p className="text-base text-sky-900 text-body-color">
                        "Given some text from an unknown author, could you determine whether it was written by a human, or generated by a machine?.Language generation is one of those natural language tasks that can really produce an incredible feeling of awe at how far the fields of machine learning and artificial intelligence have come."
                       </p> 
                    </div>
                   <div className="d-grid gap-2 d-md-block">
                    <a href='/contact' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">contact owner</a>
                    <a href='url' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">View project</a>    
                   </div>    
                 </div> 
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                 <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                       <img
                          src={pro3}
                          alt="image"
                          className="w-full"
                          />
                    </div>
                    <div>
                       <span
                          className="
                          bg-slate-600
                          rounded
                          inline-block
                          text-center
                          py-1
                          px-4
                          text-xs
                          leading-loose
                          font-semibold
                          text-white
                          mb-5
                          "
                          >
                       Jan 05, 2023
                       </span>
                       <h3>
                          <a
                             href="javascript:void(0)"
                             className="
                             font-semibold
                             text-xl
                             sm:text-2xl
                             lg:text-xl
                             xl:text-2xl
                             mb-4
                             inline-block
                             text-stone-900
                             hover:text-primary
                             "
                             >
                             " Generative Models and the Predictive Mind"
                          </a>
                       </h3>
                       <p className="text-base text-sky-900 text-body-color">
                        "Most abstractly, a generative model can be understood as a structure designed to generate a range of phenomena in a way that is intended to model the process by which those phenomena are actually generated. If the process is causal, it is a causal generative model. If it decomposes this generative process hierarchically, it is a deep (i.e. hierarchical multi-level) causal generative model. 
                       </p>
                    </div> 
                  <div className="d-grid gap-2 d-md-block">
                    <a href='/contact' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">contact owner</a>
                    <a href='url' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">View project</a>
                   </div>
                 </div>
                
              </div>
           </div>
        </div>
     </section>
    
    );
}

export default WorkCard