import { SERVER_URL } from "@/constant";
import style from "./OwnerCard.module.css";
import Image from "next/image";
const OwnerCard: React.FC = async () => {
  const request = await fetch(`${SERVER_URL}/sample/folder`);
  const ownerData = await request.json();
  console.log(ownerData);
  return (
    <div className={style["owner-box"]}>
      <div className={style["owner-profile"]}>
        <Image
          src={ownerData.folder.owner.profileImageSource}
          width={60}
          height={60}
          alt="폴더 소유자 프로필 이미지"
        />
        <p className={style["owner-profile_name"]}>
          @{ownerData.folder.owner.name}
        </p>
      </div>
      <p className={style["owner-folder_name"]}>{ownerData.folder.name}</p>
    </div>
  );
};

export default OwnerCard;
