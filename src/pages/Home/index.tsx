import { Container } from "../../assets/css/GlobalStyles";
import { Header } from "../../components/Header";
import { HomeSection } from "./styles";

export const Home = () => {
 return(
   <>
      <Header />
      <HomeSection>
         <Container>
            <h1>Home</h1>
         </Container>
      </HomeSection>
   </>
 );
}