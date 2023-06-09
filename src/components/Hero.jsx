import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]'/>
          <div className='sm:h-80 h-40 w-1 violet-gradient'/>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi I'm <span className='text-[#915eff]'>Pugal</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a web-designer, developer <br className='sm:block hidden'/> who create stunning modern layouts.</p>
      </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] border-secondary rounded-3xl border-4 flex justify-center items-center p-2'>
            <motion.div 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero