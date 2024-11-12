import { Container } from "../../assets/css/GlobalStyles";
import { Header } from "../../components/Header";
import { HomeSection, HomeContainer } from "./styles";
import { Card } from "@/components/Card";
import { usePosts } from "@/hooks/usePosts";

export const Home = () => {
  const { posts } = usePosts()

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