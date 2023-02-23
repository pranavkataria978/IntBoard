import { Button,Card,Tag,Elevation } from "@blueprintjs/core";
import Link from "next/link";
import classes from './projectCard.module.css';
import Image from 'next/image';
export default function ProjectCard(props) {

    const post = props.project;

    const formattedDate = new Date(post.deadline).toLocaleDateString('en-US', {

        day: 'numeric', 
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/projects/${post.slug}/${post.image}`;
    const linkPath = `/projects/${post.slug}`;
   
    return (
        
        <Card  elevation={Elevation.TWO} className={classes.card} interactive={true}>
           <div className={classes.img}>

               <Image src={imagePath} width={250} height={140}/>
               {/* <div className={classes.tag}>
                   {post.tags.map((tag)=> <Tag minimal={true} round={true} large={true}>{tag}</Tag>)}
               </div> */}
               

           </div>
           <div className={classes.content}>
               <h2>{post.title}</h2>
               <p>{post.description}</p>
               <div className={classes.lower}>
                   <div className={classes.date}>
                       {formattedDate}
                   </div>
                   <Link href={linkPath}><Button text='Read More' icon = 'log-in' className={classes.buttonDesign}/></Link>
               </div>
               

           </div>
          
          
           </Card>);

}