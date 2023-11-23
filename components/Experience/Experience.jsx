import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles.js';
import { experiences } from "../../constants/index.js";
import { SectionWrapper } from '../../hoc/index.js';
import { textVariant } from "../../utils/motion.js";
import './Experience.css';


//  experience cards in the vertical timeline
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    // Background and text color for the timeline element's content
      contentStyle={{ background: "#1d1836", color: "#fff" }} 
      // Display the date associated with the work experience
      date={experience.date} 
      // Background color for the timeline element's icon
      iconStyle={{ background: experience.iconBg }} 
      icon={
        // Create a container for the icon with centered content
        <div className="flex justify-center items-center w-full h-full">
          <img
            loading="lazy"
            src={experience.icon} // Display the icon associated with the work experience
            alt={experience.company_name} // Provide alt text for accessibility
            className="my-icon" 
          />
        </div>
      }
      
    >
      <div>

        
        <h3 className="experince-title">{experience.title}</h3>
        <p className="experience-subtitle">{experience.company_name}</p> 
      </div>
      {/* list contains the detaile of each experince */}
      <ul className="list-item">
        {experience.points.map((point, index) => (
          //a unique to identify each list item.
          <li key={index} className="experience-describe">
            {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <>
      

      <motion.div variants={textVariant()} id='about'>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2> 
      </motion.div>
      <div className="mt-12 flex flex-col">
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} /> // Display each work experience using ExperienceCard
            ))
          }
        </VerticalTimeline>
        {/* 
  Loop through the 'experiences' array and create
   a work experience card for each entry using the 'ExperienceCard' component. 
  The 'key' prop ensures each card has a unique identifier.
*/}

      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");
