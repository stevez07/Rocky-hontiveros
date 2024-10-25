


function ProjectCard({ src, link, h3, p }) {
  return (
    <>
      <article class="projects__card">
          <a href="https://automob.ca/" target="_blank" class="projects__image">
              <img src={src} alt="image" class="projects__img"/>
          </a>

          <div class="projects__data">
              <h3 class="projects__name">Automobility</h3>
                  <p class="projects__description">
                      Automobility is a business partners e-commerce site
                  </p>

                  <div class="projects__skills">
                      <img src="assets/img/skills-bootstrap.svg" alt="image" class="projects__skill"/>
                      <img src="assets/img/skills-css.svg" alt="image" class="projects__skill"/>
                      <img src="assets/img/skills-html.svg" alt="image" class="projects__skill"/>
                  </div>

                  <a href="" target="_blank" class="projects__button">
                      <i class="ri-link"></i>
                      <span>Visit Project</span>
                  </a>         
          </div>    
      </article>

      <a href="#" target="_blank">
          <img className='hover' src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <p>{p}</p>
      </a>
    </>
  )
}

export default ProjectCard