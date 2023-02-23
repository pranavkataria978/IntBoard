export default function ProjectDetail(props) {

    const project = props.project;

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    )

}