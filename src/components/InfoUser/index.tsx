import { formatDate } from "@/utils/formatDate";
import { CardHeader } from "./styles";

type InfoUserProps = {
    username: string;
    profileAvatar: string;
    publishedAt: string;
}

export const InfoUser = ({ username, profileAvatar, publishedAt}: InfoUserProps) => {
 return(
    <CardHeader>
        <img src={profileAvatar} alt="" />
        <div className="header-content">
            <h3>{username}</h3>
            <span>{formatDate(publishedAt)}</span>
        </div>
    </CardHeader>
 );
}
