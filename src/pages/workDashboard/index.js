import MultipleIssues from "@/components/Issues/MultipleIssues";
import {getAllIssues} from "@/utils/issues";
export default function WorkDashboard(props) {
    return (
        <div>

            <div>
                <div className="issues-heading"><h2>Current Issues</h2></div>
                <MultipleIssues issues = {props.issues}></MultipleIssues>
            </div>
            <div>
                <></>
            </div>

        </div>
       
    )
}


export function getStaticProps(){

    const issues = getAllIssues();

    return {
        props: {
            issues: issues
        }
    }


}