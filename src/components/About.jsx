import React from 'react'
import aboutImg from "../assets/AiImagei1.png";
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
       <h1 id='about' className='my-20 pb-12 text-center text-4xl'>About <span className='text-gray-600'>Me</span></h1>

       <div className="flex flex-wrap lg:p-8">
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1}}
          className="w-full lg:w-1/2 lg:p-8 lg:pt-0">
              <div className="flex items-center justify-center">
                  <img className="rounded-2xl pt-0 md:pb-10 lg:pr-10" src={aboutImg} alt="aboutimg" />
              </div>
          </motion.div>
          <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center lg:justify-start">
                  <p className='text-justify my-2 maxw-xl py-6  font-light tracking-tighter'>{ABOUT_TEXT}</p>
              </div>
          </motion.div>
       </div>
    </div>
  )
}

export default About
