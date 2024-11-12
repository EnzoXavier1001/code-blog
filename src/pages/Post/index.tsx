import { Container } from "@/assets/css/GlobalStyles";
import { Header } from "@/components/Header"
import { PostContainer, PostContent, TagsContainer, TagStyles } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "@/api";
import { IPost } from "@/types/Post";
import { InfoUser } from "@/components/InfoUser";
import { generateRandomColor } from "@/utils/generateColor";

export const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        async function getPost() {
            try {
                const { data } = await request<IPost>('GET', `/posts/${id}`)

                setPost(data)
            } catch (error) {
               console.error(error)
            }
        }

        getPost()
    }, [])

    return(
        <>
            <Header />
            <Container>
                {post && (
                    <PostContainer>
                        <header>
                            <InfoUser 
                                publishedAt={post.publishedAt} 
                                profileAvatar="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid" 
                                username="Enzo"
                            />
                            <h1>{post.title}</h1>
                            <TagsContainer>
                                {post.tags.map((tag, index) => (
                                    <TagStyles $backgroundColor={generateRandomColor()} key={index}>{tag}</TagStyles>
                                ))}
                            </TagsContainer>
                        </header>
                        <PostContent>
                            <img src={post.cover} alt={post.title} />
                            <p>{post.description}</p>
                        </PostContent>
                    </PostContainer>
                )}
                
            </Container>
        </>
    );
}
