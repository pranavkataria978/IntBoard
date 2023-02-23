import classes from './multipleProjects.module.css';
import ProjectCard from './ProjectCard';

export default function MultipleProjects(props) {

    const projects = props.projects;

    return (
        <div className={classes.grid}>
            {projects.map((project) => <ProjectCard key = {project.slug} project={project}></ProjectCard>)}
            
        </div>
    )
}