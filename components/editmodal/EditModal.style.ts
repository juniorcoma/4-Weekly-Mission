import styled from "styled-components";
interface StyleProps {
  $linear: boolean;
}
export const Modal = styled.div`
  width: 36rem;
  padding: 3.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 1.5rem;
  border: 1px solid var(--clr-gray20);
  position: relative;
  background: var(--clr-white);
`;

export const ModalName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const Wrap = styled.div``;

export const UserInput = styled.input`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--clr-primary);
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

export const SelectBtn = styled.button<StyleProps>`
  width: 100%;
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
  border-radius: 8px;
  background: ${({ $linear }) =>
    $linear
      ? "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"
      : "var(--clr-red)"};
  color: #f5f5f5;
  font-weight: 600;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckName = styled.p`
  font-size: 1.4rem;
  color: var(--clr-gray60);
  text-align: center;
`;
