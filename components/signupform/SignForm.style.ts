import styled from "styled-components";

export const Input = styled.input`
  width: 40rem;
  padding: 1.8rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--clr-gray20);
  font-size: 1.6rem;
  background: var(--clr-white);
  margin-bottom: 1.2rem;
  &:focus {
    border: 1px solid var(--clr-primary);
  }
`;
export const Wrap = styled.div`
  position: relative;
  width: 40rem;
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2.8rem;
  transform: translateY(-50%);
`;

export const ErrorMessage = styled.p`
  position: relative;
  top: -10px;
  color: var(--clr-red);
  font-size: 1.4rem;
  min-height: 15px;
`;
