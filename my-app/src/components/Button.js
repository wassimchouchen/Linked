import React from 'react' ;
import { Link as ReactRouterLink } from "react-router-dom";

// type ButtonProps = DetailedHTMLProps<
//   ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >

export function Button({ className, ...props }) {
  return (
    <button
      className={`
      bg-dark-2 px-4 py-2 rounded-lg text-white
      hover:bg-dark-1 
      duration-200
      focus:ring focus:ring-dark-2 focus:ring-opacity-30
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className ? className : ''}
      `}
      {...props}
    />
  )
}

export function ContainedLink({ className, ...props }) {
  return (
    <ReactRouterLink
    
        className={`
       bg-dark-2 px-4 py-2 rounded-lg text-white
       hover:bg-dark-1 
       duration-200
       focus:ring focus:ring-dark-2 focus:ring-opacity-30
       disabled:opacity-50 disabled:cursor-not-allowed
       ${className ? className : ''}
       `}
        {...props}
      />
  )
}

export function Link({ className, ...props } ) {
  return (
    <ReactRouterLink {...props}
      
        className={`
        text-black hover:text-dark-1 duration-200
        mr-4
      ${className ? className : ''}

      `}
        {...props}
      />
  )
}
// export function Link({ className, ...props }: LinkProps) {

//     return (<NextLink />)
// }
