import PostDetail from "@/components/Posts/PostDetail"
import { decodePosts, getPostFiles } from "@/utils/posts";

export default function PostContent(props){

    return (
        <PostDetail post = {props.post}></PostDetail>
    )
}

export function getStaticProps(context) {

    const { slug } = context.params;
    const post = decodePosts(slug);

    return {
        props: {
            post: post,
        },
    }
}

export function getStaticPaths() {

    const postFileNames = getPostFiles();
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false,
    }

}