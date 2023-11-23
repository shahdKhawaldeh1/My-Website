import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles.js'
import { services } from '../../constants/index.js'
import { fadeIn, textVariant } from '../../utils/motion.js'
import SectionWrapper from '../../hoc/SectionWrapper.jsx'
import './About.css'
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='service-card xs:w-[250px]'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='card-box'
      >
        <div

          className='bg-tertiary card'>
          <img loading="lazy"src={icon} alt={title}
          //icone props contains the images in the index.js
            className='card-image' />
          <h3 className='card-text'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  console.log(services); 
  return (
    <>
      <motion.div variants={textVariant()} id='about'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='overview-text'>
        {/*
          Display the  about paragraph  
        */}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/*
          Create a container for displaying service cards.
          The cards are dynamically generated based on the 'services' array.
        */}
        {
          services.map((service, index) =>
            <ServiceCard key={index} index={index} {...service} />
          )
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")