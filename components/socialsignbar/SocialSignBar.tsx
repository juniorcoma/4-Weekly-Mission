import Image from "next/image";
import style from "./SocialSignBar.module.css";
export default function SocialSignBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style["social-box"]}>
      <p className={style["social-message"]}>{children}</p>
      <div className={style["social-wrap"]}>
        <a
          href="https://www.google.com"
          target="_blank"
          className={`${style["social-link"]} ${style.google}`}
        >
          <Image
            src="/img/googleicon.png"
            width={22}
            height={22}
            alt="구글 아이콘"
          />
        </a>
        <a
          href="https://www.kakaocorp.com/page"
          target="_blank"
          className={`${style["social-link"]} ${style.kakao}`}
        >
          <Image
            src="/img/kakaoicon.svg"
            width={26}
            height={24}
            alt="카카오 아이콘"
          />
        </a>
      </div>
    </div>
  );
}
