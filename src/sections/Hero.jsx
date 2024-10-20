import styles from '../../src/sections/HeroStyles.module.css'
import heroImg from '../../src/assets/profilePic.jpg';

import CV from '../../src/assets/Rocky_stevez_Hontiveros_-_Web_Designer.pdf';
import {useTheme} from '../../src/common/ThemeContext';

import sun from '../../src/assets/sun.svg';
import moon from '../../src/assets/moon.svg';
import twitterLight from '../../src/assets/twitter-light.svg';
import twitterDark from '../../src/assets/twitter-dark.svg';
import githubLight from '../../src/assets/github-light.svg';
import githubDark from '../../src/assets/github-dark.svg';
import linkedinLight from '../../src/assets/linkedin-light.svg';
import linkedinDark from '../../src/assets/linkedin-dark.svg';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pictur of Rocky Hontiveros" />
        <img className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
            />
      </div>

      <div className={styles.info}>
        <h1>Rocky Stevez <br/> Hontiveros</h1>
        <h2>Web Designer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rocky-stevez-hontiveros-5701b4a1/" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <p className={styles.description}>
            With a passion for developing modern React apps for commercial businesses.
        </p>
        <a href={CV} download>
          <button className='hover'> Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero