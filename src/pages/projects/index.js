import MultipleProjects from "@/components/Projects/MultipleProjects";
import { getAllProjects } from "@/utils/projects";

export default function Projects(props) {

    const projects = props.projects;

    return (
       
        <MultipleProjects projects = {projects}></MultipleProjects>
    )

}

export function getStaticProps() {

    const projects = getAllProjects();

    return {
        props: {
            projects: projects,
        },
    }
}