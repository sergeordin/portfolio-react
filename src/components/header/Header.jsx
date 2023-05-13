import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1 className={styles.header__title}>
                    <strong>
                        Hi, my name is <em>Sergey</em>
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className={styles.header__text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <a
                    className={styles.btn}
                    href="https://kirov.hh.ru/resume/59a17321ff0b334a490039ed1f4e68586c4861"
                >
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Header;
