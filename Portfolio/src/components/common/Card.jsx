import React from 'react'
import { FaGithub } from "react-icons/fa";

const Card = (props) => {
    return (
        <div className='group'>
            <div className='h-96 w-80 rounded-lg bg-gradient-to-b border-2 border-red-300 from-gray-900  to-gray-950 shadow-lg shadow-red-400 group-hover:scale-105 duration-300'>
                <img className='w-80 h-36' src={props.imageLink}></img>
                <div className=' h-48'>      
                <h2 className='mx-2 my-6 text-2xl font-semibold'>{props.projectName}</h2>
          
                <p className='mx-2 '> {props.desc}</p>
                </div>

                <div className='  h-11 -mt-6 grid place-items-center'>
                    <a href={props.codeUrl} className="flex items-center hover:text-pink-500">
                        Code <FaGithub className="ml-2" />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Card;