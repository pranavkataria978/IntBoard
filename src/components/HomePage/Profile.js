import Image from "next/image"
import classes from './profile.module.css'
import { Card, Elevation } from "@blueprintjs/core"
export default function Profile(){

    return <Card className={classes.content} elevation={Elevation.TWO}>
        
        <h1>Pranav Kataria</h1>
        <div className={classes.data}>

            <div className={classes.text}>
                <p>Hi, I am Pranav. I have joined Compute-UI team at Nutanix as an Intern.
            
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                </p>
            
                    
            </div>
            <div>
                <Image src='/images/profile.png' height={200} width={200}/> 
                <p className={classes.caption}>Banglore,India</p>
            </div>
            
            
        </div>
        
        
    </Card>
}