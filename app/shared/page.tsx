import OwnerCard from "@/components/ownercard/OwnerCard";
import style from "./page.module.css";
import LinkSearchInput from "@/components/linksearchinput/LinkSearchInput";
import LinkCardContainer from "@/components/linkcardcontainer/LinkCardContainer";
import FolderListBar from "@/components/folderlistbar/FolderListBar";
export default function SharedPage() {
  return (
    <>
      <section className={style["section-owner"]}>
        <OwnerCard></OwnerCard>
      </section>
      <section className={style["section-linkcard"]}>
        <div className={style.wrapper}>
          <LinkSearchInput />
          <LinkCardContainer />
          {/* <FolderListBar /> */}
        </div>
      </section>
    </>
  );
}
