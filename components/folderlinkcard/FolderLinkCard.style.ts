import Image from "next/image";
import styled from "styled-components";

interface StyleProps {
  $isHidden: boolean;
}

export const Card = styled.div`
  position: relative;
  width: 34rem;
  height: 33.4rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    transform: translate(-10px, -10px);
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const CardContentImgWrap = styled.div`
  width: 100%;
  height: 19.9rem;
  position: relative;
  overflow: hidden;
`;

export const CardImg = styled(Image)`
  object-fit: cover;
  transition: 0.5s;
`;

export const StarImg = styled(Image)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 500;
`;

export const ContentText = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Time = styled.span`
  color: #666;
  font-size: 1.3rem;
`;

export const KebabBtnWrap = styled.div`
  position: relative;
`;

export const kebabBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 3px 3px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const OptionWrap = styled.div<StyleProps>`
  width: 10rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  visibility: ${({ $isHidden }) => ($isHidden ? "hidden" : "visible")};
`;

export const OptionBtn = styled.button`
  background: var(--clr-white);
  padding: 0.7rem 1.2rem;
  font-size: 1.4rem;
  &:hover {
    background: var(--clr-gray10);
    color: var(--clr-primary);
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
`;

export const CreateDate = styled.span`
  color: #333;
  font-size: 1.4rem;
`;
