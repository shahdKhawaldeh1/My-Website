import React from 'react'
import { styles } from '../../styles.js'
import { motion } from 'framer-motion';
// import images 
import { shahdPic } from '../../assets/index.js';
import { github } from '../../assets/index.js';
import { linkedin } from '../../assets/index.js';
import './hero.css'
const Hero = () => {
  return (
    <section className='hero-container'>
    <div className={`${styles.paddingX} flex md:flex-row flex-col-reverse items-center`}>
      <div className="hero-line">
        <div className="line-circle-style">
          <div className="circle-style " />
          <div className='line-style' />
        </div>
          <div>
            <h1 className= {`${styles.heroHeadText} hero-text`}>Hello, I am
              <span className='hero-text-span'> Shahd !</span></h1>
            <p className={`${styles.heroSubText}`}>I'm a dedicated computer engineering with a strong belief in the transformative power of design.  
              <br/>I specialize in creating visually engaging and user-friendly solutions that leave a lasting impression.
              </p>
              {/* start the github , linkedin,resume div */}
            <div className="contact-info ">
              <div className='flex gap-3 '>
              <a href=""><div className="conatct-link"
                onClick={() => window.open('https://github.com/shahdKhawaldeh1', "_blank")}>
                <img loading="lazy" src={github} alt="github" className="w-2/3 h-2/3 object-contain" />
              </div></a>
              <a href=""><div className="conatct-link"
                onClick={() => window.open('www.linkedin.com/in/shahd-k-3b85a2217', "_blank")}>
                <img loading="lazy" src={linkedin} alt="linked in" className="w-2/3 h-2/3 object-contain" />
              </div></a>
              </div>

            <a
              onClick={() => window.open('https://drive.google.com/file/d/13q1ZOc42c1zy7RynhMixsw5KDtgbsupF/view?usp=sharing', "_blank")}
              href="" className='contact-resume'>My resume</a>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={shahdPic} className='hero-image' alt="" />
        </div>
      </div>
      <div className='absolute bottom-0 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='hero-motion-point'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='point'
            >

            </motion.div>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero