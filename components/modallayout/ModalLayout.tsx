import style from "./ModalLayout.module.css";

function ModalLayout({ children }: { children: React.ReactNode }) {
  return <div className={style["modal-layout"]}>{children}</div>;
}

export default ModalLayout;
