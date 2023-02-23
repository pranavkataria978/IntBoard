import PostCard from "./PostCard";
import classes from "./multiplePosts.module.css";

export default function MultiplePosts(props) {

    const posts = props.posts;
    return (
        <div className={classes.grid}>
            {posts.map((post) => <PostCard key = {post.slug} post={post}></PostCard>)}
        </div>
    )
}