import { SERVER_URL } from "@/constant";
import style from "./LinkCardContainer.module.css";
import SharedLinkCard from "../sharedlinkcard/SharedLinkCard";

const LinkCardContainer: React.FC = async () => {
  const request = await fetch(`${SERVER_URL}/sample/folder`);
  const linkData = await request.json();
  console.log(linkData.folder.links);
  return (
    <ul className={style["linkcard-list"]}>
      {linkData.folder.links.map((link: any) => (
        <li key={link.id}>
          <SharedLinkCard linkData={link} />
        </li>
      ))}
    </ul>
  );
};

export default LinkCardContainer;
