import { Container } from "@/assets/css/GlobalStyles"
import { Header } from "@/components/Header"
import { ProfileBg, ProfileCard, ProfileContent } from "./styles"

export const Profile = () => {
    return (
        <>
            <Header />
            <ProfileBg $backgroundColor="#000" />
            <Container>
                <ProfileCard>
                    <img src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid" alt="" />
                    <ProfileContent>
                        <h2>Enzo Costa</h2>
                        <h3>Software Developer | Java, Spring Boot, Hibernate, Junit | Fullstack 🌐| Git, GitHub | RestAPI, Micro Services </h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quibusdam aliquid quaerat voluptatibus beatae quis accusantium atque labore nihil. Eius, quia quaerat. Adipisci dolore ipsa inventore eligendi dignissimos reprehenderit id laudantium rerum iusto temporibus. Minus, quas eaque laudantium quis doloribus commodi incidunt modi facere velit consectetur ea asperiores illum culpa ab nemo nobis ipsum officiis deleniti laborum nulla voluptates voluptate.</p>
                    </ProfileContent>
                </ProfileCard>
            </Container>
        </>
    )
}