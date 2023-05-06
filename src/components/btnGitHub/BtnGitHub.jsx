import gitHubIcon from './gitHub-black.svg';
import styles from './BtnGitHub.module.css';

const BtnGitHub = ({ link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.btnOutline}
        >
            <img src={gitHubIcon} alt="" />
            gitHub repo
        </a>
    );
};

export default BtnGitHub;
