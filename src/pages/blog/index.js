import MultiplePosts from "@/components/Posts/MultiplePosts";
import { getAllPosts } from "@/utils/posts";

export default function Posts(props){

    return <div>
        <MultiplePosts posts = {props.posts}/>
    </div>
}


export function getStaticProps() {

    const allPosts = getAllPosts();

    return {
        props: {
           posts: allPosts
        },
    }
}