import { Card, Intent, Tag } from "@blueprintjs/core";
import { useState } from "react";
import { Drawer, Button } from "@blueprintjs/core";
import Link from "next/link";
import classes from './issue.module.css';

export default function Issue(props) {

    const [isOpen, setIsOpen] = useState(false);

    function handleChange(){
        setIsOpen(!isOpen);
    }

    

    return (

        <Card className={classes.card} interactive={true}>
            <div className={classes.heading}>
                <h2>{props.issue.title}</h2>
                <Link href={`workDashboard/${props.issue.slug}`}>
                    <Button  className={classes.buttonDesign}>Learn More</Button>
                </Link>
                
            </div>
        
            <p>{props.issue.description}</p>
            <div className={classes.tag
            }>
                <Tag minimal = {true} large={true} intent={Intent.WARNING} className={classes.buttonDesign} icon='data-connection'>{props.issue.status}</Tag>
                <Tag minimal = {true} large={true} intent={Intent.PRIMARY} className={classes.buttonDesign} icon='high-priority'>{props.issue.priority}</Tag>
                <Tag minimal = {true} large={true} intent={Intent.SUCCESS} className={classes.buttonDesign} icon='issue'>{props.issue.type}</Tag>

            </div>
          

{/*            
                <Drawer
                    icon="info-sign"
                    isOpen={isOpen}
                    canOutsideClickClose={true}
                    canEscapeKeyClose={true}
                    onClose={() => handleChange()}
                >
                </Drawer> */}
        </Card>
    )
}