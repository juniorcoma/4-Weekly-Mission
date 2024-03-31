"use client";
import Image from "next/image";
import * as S from "./LinkSearchInput.style";
import { useState } from "react";
const LinkSearchInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <S.SearchBox>
      <Image
        src="/img/searchIcon.png"
        width={16}
        height={16}
        alt="링크 검색 아이콘"
      />
      <S.UserInput
        type="text"
        value={value}
        onChange={handleOnChange}
        placeholder="링크를 검색해 보세요."
      />
    </S.SearchBox>
  );
};

export default LinkSearchInput;
