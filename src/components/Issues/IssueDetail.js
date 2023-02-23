export default function IssueDetail(props){

    const issue = props.issue;
    console.log(issue)

    return (
        <div>
            <h1>{issue.title}</h1>
            <p>{issue.description}</p>
        </div>
    )

}