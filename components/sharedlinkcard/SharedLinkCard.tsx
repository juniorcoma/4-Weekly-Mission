import Image from "next/image";
import style from "./SharedLinkCard.module.css";
import { getTime } from "@/utils";

interface LinkCardProps {
  id: number;
  createAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

const SharedLinkCard: React.FC<LinkCardProps> = ({ linkData }) => {
  const { createdAt } = linkData;
  const createDate = new Date(createdAt);
  const today = new Date();
  const millisecondsGap = today.getTime() - createDate.getTime();

  return (
    <div className={style.card}>
      <a href={linkData.url} target="_blank">
        <div className={style["card-content_img"]}>
          <Image
            className={style.img}
            src={
              linkData.imageSource
                ? linkData.imageSource
                : "/img/defaultImg.png"
            }
            fill
            alt="링크 카드 이미지"
          />
        </div>
      </a>
      <div className={style["card-content_text"]}>
        <span className={style["content_time"]}>
          {getTime(millisecondsGap)}
        </span>
        <p className={style["content_description"]}>{linkData.description}</p>
        <span className={style["content_date"]}>
          {`${createDate.getFullYear()}. ${
            createDate.getMonth() + 1
          }. ${createDate.getDate()}`}
        </span>
      </div>
    </div>
  );
};

export default SharedLinkCard;
