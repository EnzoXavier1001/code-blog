import { useEffect, useState } from "react";
import { Container } from "../../assets/css/GlobalStyles";
import { Header } from "../../components/Header";
import { HomeSection, HomeContainer } from "./styles";
import { Post } from "@/types/Post";
import { request } from "@/api";
import { Card } from "@/components/Card";

export const Home = () => {
   const [posts, setPosts] = useState<Post[]>([])

   useEffect(() => {
     async function getPosts() {
         try {
            const response = await request('GET', '/posts')
            const data = response.data as Post[];
            setPosts(data)
         } catch (error) {
            console.error(error)
         }
     } 
     getPosts()
   }, [])

   return(
      <>
         <Header />
         <HomeSection>
            <Container>
               <HomeContainer>
                  {posts.map((post, index) => (
                     <Card post={post} key={index} />
                  ))}
               </HomeContainer>
            </Container>
         </HomeSection>
      </>
   );
}