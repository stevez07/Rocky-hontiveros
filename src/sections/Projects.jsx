import ProjectCard from '../../src/common/ProjectCard';
import styles from '../../src/sections/ProjectsStyles.module.css';

import viberr from '../../src/assets/viberr.png';
import freshBurger from'../../src/assets/fresh-burger.png';
import hipsster from'../../src/assets/hipsster.png';
import fitLift from'../../src/assets/fitlift.png';
// import bootstrap from'../assets/Skills-img/skills-bootstrap.svg';
import automob from './../src/automobility.PNG';

function Projects() {
  return (
    <>
      <section id="projects" className={styles.container}>

          <h1 className='sectionTitle'>Projects</h1>
          <div className={styles.projectsContainer}>
              <ProjectCard src={automob} 
              link='https://rockystevzhontiveros.com' 
              h3='Viberr' 
              p="Streaming App"/>

              <ProjectCard src={freshBurger} 
              link='https://rockystevzhontiveros.com' 
              h3='Fresh Burger' 
              p="Hamburger Restaurant"/> 

              <ProjectCard src={hipsster} 
              link='https://rockystevzhontiveros.com' 
              h3='Hipsster' 
              p="Glasses Shop"/> 

              <ProjectCard src={fitLift} 
              link='https://rockystevzhontiveros.com' 
              h3='FitLift' 
              p="Fitness App"/>  
          </div>
      </section>
    </>
  )
}

export default Projects