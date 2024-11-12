import { IPost } from "@/types/Post";
import { CardContent, CardStyles, CategorySpan } from "./styles";
import { NavLink } from "react-router-dom";
import { InfoUser } from "../InfoUser";
import { generateRandomColor } from "@/utils/generateColor";

type CardProps = {
    post: IPost
}

export const Card = ({ post }: CardProps) => {
    return(
        <CardStyles>
            <img src={post.cover} alt={post.title} />
            <CardContent>
                <InfoUser 
                    profileAvatar="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid"
                    username="Enzo"
                    publishedAt={post.publishedAt}
                />
                <h2>{post.title}</h2>
                <p>{post.previewText}</p>
                <NavLink to={`/post/${post.id}`}>Leia mais</NavLink>
                <CategorySpan $backgroundColor={generateRandomColor()}>{post.category}</CategorySpan>
            </CardContent>
        </CardStyles>
    );
}
