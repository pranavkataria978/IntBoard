import ProjectDetail from "@/components/Projects/ProjectDetail"
import { decodeProjects } from "@/utils/projects";

export default function Project(props){

    if(!props.project){
        return <div>Loading...</div>
    }

    return (
        <div>
           <ProjectDetail project = {props.project}/>
        </div>
    )
}

export async function getServerSideProps(context) {

    const { params } = context;
    const { slug } = params;

    const project =  decodeProjects(slug);

    return {
        props: {
            project: project
        }
    }

}