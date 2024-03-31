"use client";

import Image from "next/image";
import * as S from "./LinkAddInput.style";

const LinkAddInput: React.FC = () => {
  return (
    <S.InputBox>
      <Image src="/img/link.png" width={20} height={20} alt="링크 아이콘" />
      <S.UserInput placeholder="링크를 추가해 보세요"></S.UserInput>
      <S.AddLinkButton>추가하기</S.AddLinkButton>
    </S.InputBox>
  );
};

export default LinkAddInput;
