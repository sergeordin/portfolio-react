import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import github from './../../img/icons/github.svg';
import linkedin from './../../img/icons/linkedin.svg';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <ul className={styles.social}>
                        <li className={styles.social__item}>
                            <a href="#">
                                <img src={vk} alt="Link" />
                            </a>
                        </li>
                        <li className={styles.social__item}>
                            <a href="#">
                                <img src={instagram} alt="Link" />
                            </a>
                        </li>
                        <li className={styles.social__item}>
                            <a href="#">
                                <img src={twitter} alt="Link" />
                            </a>
                        </li>
                        <li className={styles.social__item}>
                            <a href="#">
                                <img src={github} alt="Link" />
                            </a>
                        </li>
                        <li className={styles.social__item}>
                            <a href="#">
                                <img src={linkedin} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className={styles.copyright}>
                        <p>© 2023 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
