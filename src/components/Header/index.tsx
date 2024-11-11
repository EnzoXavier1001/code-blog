import { BracketsSquare } from "@phosphor-icons/react";
import { Container } from "../../assets/css/GlobalStyles";
import { Button } from "../Button";
import { HeaderStyles, HeaderWrapper } from "./styles";
import { MenuBar } from "../MenuBar";
import { Input } from "@/components/ui/input"

export const Header = () => {
 return(
    <HeaderStyles>
        <Container>
            <HeaderWrapper>
                <div className="header-wrapper__left">
                    <BracketsSquare  size={42}/>
                    <Input className="!text-2xl py-6 !w-100" type="text" placeholder="Busque aqui"/>
                </div>
                <div className="header-wrapper__right">
                    <Button 
                        backgroundColor="#007BFF" 
                        color="#FFF" 
                        text="Criar Post"
                    />
                    <MenuBar />
                </div>
            </HeaderWrapper>
        </Container>
    </HeaderStyles>
 );
}
