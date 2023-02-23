import IssueDetail from "@/components/Issues/IssueDetail";
import {decodeIssues,  getIssuesFiles} from "@/utils/issues";
export default function WorkDashboard(props) {
    // console.log(props.issue)

    if(!props.issues){
        return <div>Loading</div>
    }

    return(
        <div>
             <IssueDetail issue = {props.issues}></IssueDetail>
            
         </div>
    )

}

export function getStaticProps(context){
    
        const { slug } = context.params;
        const slugs = ['DemoIssue','DemoIssue2','DemoIssue1']
        if(!slugs.includes(slug)){
            return {
                notFound: true
            }
        }
        const issue = decodeIssues(slug);

     
        

        return {
            props: {
                issues: issue
            }
        }
}

export function getStaticPaths(context){

    const issueFileNames = getIssuesFiles();
    // const slugs = issueFileNames.map(fileName => fileName.replace(/\.md$/, ''));
    const slugs = ['DemoIssue','DemoIssue2']
 
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: true,
    }

}