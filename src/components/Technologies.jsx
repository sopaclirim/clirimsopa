import {RiReactjsLine } from "react-icons/ri";
import { FaAngular, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiPostgresql, SiMicrosoftsqlserver } from 'react-icons/si';
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y:-10 },
    animate: {
        y : [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
       <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration: 1.5}}
       id='technologies' className='my-20 text-center text-4xl'>Technologies</motion.h1>
       <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1}}

       className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <FaAngular className="text-7xl text-red-700"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-purple-700 text-white">
            <SiDotnet className="text-7xl" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <SiMongodb className="text-7xl text-green-700"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <SiExpress className="text-7xl text-black"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <FaNodeJs className="text-7xl text-green-600"/>
        </motion.div>

        {/* <div className="rounded-2xl border-2 border-neutral-800 p-4 bg-purple-800">
            <FaBootstrap className="text-7xl text-white"/>
        </div> */}
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <SiTailwindcss className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-blue-900">
            <SiPostgresql className="text-7xl text-white"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4 bg-white">
            <SiMicrosoftsqlserver className="text-7xl text-red-700"/>
        </motion.div>
        
        </motion.div>
    </div>
)
}

export default Technologies
