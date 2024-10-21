import styles from '../../src/sections/FooterStyles.module.css';

function Footer() {

    const year = new Date().getFullYear();
    document.querySelectorAll(".js-year").forEach(el => el.innerText = year);

  return (
    <section id='footer' className={styles.container}>
        <p>
            &copy; 
            <span class="js-year">{year} </span>
            Rocky Stevez Hotiveros. <br/>
            All rights reserved.
        </p>
    </section>
  )
}

export default Footer