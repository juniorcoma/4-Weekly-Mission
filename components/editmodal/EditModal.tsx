"use client";
import Image from "next/image";
import * as S from "./EditModal.style";
import { useRouter } from "next/navigation";

interface ModalProps {
  type: {
    id: number;
    type: string;
    title: string;
    placehold: string;
    btnTitle: string;
    btnBg: string;
  };
}

const EditModal: React.FC<ModalProps> = ({ type }) => {
  const router = useRouter();

  if (type.type === "입력") {
    return (
      <S.Modal>
        <S.CloseBtn onClick={() => router.back()}>
          <Image
            src="/img/close.png"
            width={24}
            height={24}
            alt="모달 닫기 버튼"
          />
        </S.CloseBtn>
        <S.ModalName>{type.title}</S.ModalName>
        <S.Wrap>
          <S.UserInput type="text" placeholder={type.placehold} />
          <S.SelectBtn $linear={true}>{type.btnTitle}</S.SelectBtn>
        </S.Wrap>
      </S.Modal>
    );
  } else {
    return (
      <S.Modal>
        <S.CloseBtn onClick={() => router.back()}>
          <Image
            src="/img/close.png"
            width={24}
            height={24}
            alt="모달 닫기 버튼"
          />
        </S.CloseBtn>
        <S.TextWrap>
          <S.ModalName>{type.title}</S.ModalName>
          <S.CheckName>폴더명</S.CheckName>
        </S.TextWrap>
        <S.SelectBtn $linear={false}>{type.btnTitle}</S.SelectBtn>
      </S.Modal>
    );
  }
};

export default EditModal;
