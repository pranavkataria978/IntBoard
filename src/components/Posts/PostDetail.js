import ReactMarkdown from "react-markdown";

export default function PostDetail(props) {

    const post = props.post;

    return (
        <div>
           <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    )

}