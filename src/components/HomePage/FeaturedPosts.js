import MultiplePosts from "../Posts/MultiplePosts";

export default function FeaturedPosts(props) {
    return (
       <div>
            <MultiplePosts posts = {props.posts}/>
       </div>
    )
}