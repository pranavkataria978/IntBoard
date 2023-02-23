import Issue from "./Issue";
import classes from './multipleIssues.module.css';

export default function MultipleIssues(props) {
    return (
        <div className={classes.grid}>
            {props.issues.map((issue) => <Issue issue = {issue}></Issue>)}
        </div>
    )
}