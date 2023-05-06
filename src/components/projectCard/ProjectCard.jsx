import { NavLink } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, img, id }) => {
    return (
        <li className={styles.project}>
            <NavLink to={`/project/${id}`}>
                <img src={img} alt={title} className={styles.project__img} />
                <h3 className={styles.project__title}>{title}</h3>
            </NavLink>
        </li>
    );
};

export default ProjectCard;
