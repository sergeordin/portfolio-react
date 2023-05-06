import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import styles from './NavBar.module.css';

const NavBar = () => {
    const activeLink = styles.logo;

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navRow}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeLink : styles.logo
                        }
                    >
                        <strong>Freelancer</strong> Portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className={styles.navList}>
                        <li>
                            <NavLink to="/" className={styles.navListLink}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={styles.navListLink}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                className={styles.navListLink}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
