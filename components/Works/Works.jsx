import { github } from "../../assets/index.js"
import { behance } from "../../assets/index.js"
import SectionWrapper from "../../hoc/SectionWrapper.jsx"
import { projects } from "../../constants/index.js"
import { textVariant } from "../../utils/motion.js"
import { motion } from "framer-motion"
import { styles } from "../../styles.js"
import { Tilt } from "react-tilt"
import { useEffect, useState } from "react"
import './Works.css'
const ProjectCard = ({ name, description, tags, image, source_code_link, projectType }) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary project-card"
      >
        <div className="project-card-image">
          <img loading="lazy" src={image} alt={name}></img>
          <div className="project-card-github" onClick={() => window.open(source_code_link, "_blank")}>
            {projectType === 4 ? (
              <img loading="lazy" src={behance} alt="Behance" /> // Display Behance icon for UX/UI cards
            ) : (
              <img loading="lazy" src={github} alt="GitHub" /> // Display GitHub icon for other cards
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="project-card-heading">{name}</h3>
          <p className="project-card-description">{description}</p>
        </div>
        <div className="project-card-tags">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [projectsType, setProjectsType] = useState(1)
  const [updatedProjects, setUpdatedProjects] = useState(projects)
  useEffect(() => {
    setUpdatedProjects(projects.filter((project) => project.projectType === projectsType))
  }, [projectsType])

  return (
    <>
      <motion.div variants={textVariant()} id='about'>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="works-description">
The projects featured below serve as a testament to my skills and expertise, offering real-world demonstrations of my work. 
Each project comes with a concise description and provides access to both code repositories. These examples reflect my capability to tackle intricate challenges, adapt to diverse technologies, and effectively manage projects.
      </div>
      <div className="works-tabs">
        <button onClick={() => setProjectsType(1)}
          href=""
          className='works-button'>
          HTML & CSS
        </button>
        <button onClick={() => setProjectsType(2)}
          href=""
          className='works-button'>
          HTML, CSS & JS
        </button>
        <button onClick={() => setProjectsType(3)}
          href=""
          className='works-button'>
          React JS
        </button>
        <button onClick={() => setProjectsType(4)}
          href=""
          className='works-button'>
          UX / UI 
        </button>
      </div>
      <div className="mt-20 flex flex-wrap gap-7" >
        {
          updatedProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              index={index}
              projectType={projectsType} // Pass the project type
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")