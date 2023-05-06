import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/btnGitHub';

import { projectsList } from '../helpers/projectsList';

const Project = () => {
    const { id } = useParams();
    const project = projectsList.find((p) => p.id == id);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img
                        src={project.imgBig}
                        alt={project.title}
                        className="project-details__cover"
                    />
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Project;
