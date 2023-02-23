import Link from "next/link";
import { Card, Elevation, Button,Tag } from "@blueprintjs/core";
import Image from "next/image";
import classes from './postCard.module.css';
export default function PostCard(props){

    const post = props.post;

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {

        day: 'numeric', 
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/${post.slug}/${post.image}`;
    const linkPath = `/blog/${post.slug}`;


    return (
        
         <Card  elevation={Elevation.TWO} className={classes.card} interactive={true}>
            <div className={classes.img}>

                <Image src={imagePath} width={250} height={140}></Image>
                <div className={classes.tag}>
                    {post.tags.map((tag)=> <Tag minimal={true} round={true} large={true}>{tag}</Tag>)}
                </div>
                

            </div>
            <div className={classes.content}>
                <h2>{post.title}</h2>
                <p>{post.summmary}</p>
                <div className={classes.lower}>
                    <div className={classes.date}>
                        {formattedDate}
                    </div>
                    <Link href={linkPath}><Button text='Read More' icon = 'log-in' className={classes.buttonDesign}/></Link>
                </div>
                

            </div>
           
           
            </Card>
        
       
       
    )
}