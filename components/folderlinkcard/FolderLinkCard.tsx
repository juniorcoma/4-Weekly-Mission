"use client";

import Image from "next/image";
import * as S from "./FolderLinkCard.style";
import { useState } from "react";
import { getTime } from "@/utils";
import { useRouter } from "next/navigation";

interface LinkCardProps {
  information: {
    id: number;
    created_at: string;
    updated_at: null;
    url: string;
    folder_id: number;
    title: string;
    description: string;
    image_source: string;
  };
}
const FolderLinkCard: React.FC<LinkCardProps> = ({ information }) => {
  const router = useRouter();
  const [isKebab, setIsKebab] = useState(true);
  const createDate = new Date(information.created_at);
  const today = new Date();
  const millisecondsGap = today.getTime() - createDate.getTime();
  return (
    <S.Card>
      <S.StarImg src="/img/star.png" width={34} height={34} alt="별 이미지" />
      <a href={information.url} target="_blank">
        <S.CardContentImgWrap>
          <S.CardImg src={information.image_source} fill alt="링크 이미지" />
        </S.CardContentImgWrap>
      </a>
      <S.ContentText>
        <S.Wrap>
          <S.Time>{getTime(millisecondsGap)}</S.Time>
          <S.KebabBtnWrap>
            <S.kebabBtn onClick={() => setIsKebab((prev) => !prev)}>
              <Image
                src="/img/kebab.png"
                width={21}
                height={17}
                alt="케밥 이미지"
              />
            </S.kebabBtn>
            <S.OptionWrap $isHidden={isKebab}>
              <S.OptionBtn
                onClick={() =>
                  router.push("/folder/deletelink", { scroll: false })
                }
              >
                삭제하기
              </S.OptionBtn>
              <S.OptionBtn>폴더에 추가</S.OptionBtn>
            </S.OptionWrap>
          </S.KebabBtnWrap>
        </S.Wrap>
        <S.Description>{information.description}</S.Description>
        <S.CreateDate>
          {`${createDate.getFullYear()}. ${
            createDate.getMonth() + 1
          }. ${createDate.getDate()}`}
        </S.CreateDate>
      </S.ContentText>
    </S.Card>
  );
};

export default FolderLinkCard;
