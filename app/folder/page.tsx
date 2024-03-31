import style from "./folder.module.css";
import LinkAddInput from "@/components/linkaddinput/LinkAddInput";

import FolderContainer from "@/components/foldercontainer/FolderContainer";
import EditModal from "@/components/editmodal/EditModal";
import Link from "next/link";

export default function FolderPage() {
  return (
    <>
      <section className={style["section-addlink"]}>
        <LinkAddInput />
      </section>
      <section className={style["section-link"]}>
        <div className={style["section-link_inner"]}>
          <FolderContainer />
        </div>
      </section>
    </>
  );
}
