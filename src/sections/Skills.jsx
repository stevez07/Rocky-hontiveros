
import styles from '../../src/sections/SkillsStyles.module.css';
import checkMarkIcon from '../../src/assets/checkmark-dark.svg';
import SkillList from '../../src/common/SkillsList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="PHP"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Tailwind"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
        <hr />
    </section>
  )
}

export default Skills