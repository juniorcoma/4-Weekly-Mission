import styled from "styled-components";
import css from "styled-jsx/css";

interface StyleProp {
  $current: any;
}

export const ListBox = styled.div`
  width: 100%;
  max-width: 106rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const CategoryBtn = styled.button<StyleProp>`
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid var(--clr-primary);
  background-color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  user-select: none;
  ${({ $current }) =>
    $current &&
    css`
      color: #fff;
      background-color: #6d6afe;
    `}
`;

export const AddFolderBtn = styled.button`
  color: var(--clr-primary);
  font-size: 1.6rem;
  cursor: pointer;
`;
