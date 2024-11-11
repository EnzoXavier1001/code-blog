import { BracketsSquare } from "@phosphor-icons/react";
import { Container } from "../../assets/css/GlobalStyles";
import { Button } from "../Button";
import { HeaderStyles, HeaderWrapper } from "./styles";
import { MenuBar } from "../MenuBar";

export const Header = () => {
 return(
    <HeaderStyles>
        <Container>
            <HeaderWrapper>
                <BracketsSquare  size={32}/>
                <input type="text" placeholder="Input"/>
                <Button 
                    backgroundColor="#007BFF" 
                    color="#FFF" 
                    text="Criar Post"
                />
                <MenuBar />
            </HeaderWrapper>
        </Container>
    </HeaderStyles>
 );
}
