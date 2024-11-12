import { Post } from "@/types/Post";
import { CardContent, CardHeader, CardStyles } from "./styles";
import { formatDate } from "@/utils/formatDate";

type CardProps = {
    post: Post
}

export const Card = ({ post }: CardProps) => {
    return(
        <CardStyles>
            <img src={post.cover} alt="" />
            <CardContent>
                <CardHeader>
                    <img src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid" alt="" />
                    <div className="header-content">
                        <h3>Enzo</h3>
                        <span>{formatDate(post.publishedAt)}</span>
                    </div>
                </CardHeader>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="category">{post.category}</span>
            </CardContent>
        </CardStyles>
    );
}
