import "./Header.module.css";
import style from ".//Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { SERVER_URL } from "@/constant";

const Header: React.FC = async () => {
  const request: any = await fetch(`${SERVER_URL}/sample/user`);
  const profileData = await request.json();

  return (
    <header className={style.header}>
      <div className={style["header-inner"]}>
        <Link href="/">
          <Image
            src="/img/logo.png"
            width={133}
            height={24}
            alt="linkbrary 로고 이미지"
          />
        </Link>
        <div className={style["profile-box"]}>
          <Image
            src={profileData.profileImageSource}
            width={28}
            height={28}
            alt="프로필 사진"
            className={style["profile-img"]}
          />
          <p className={style["profile-email"]}>{profileData.email}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
