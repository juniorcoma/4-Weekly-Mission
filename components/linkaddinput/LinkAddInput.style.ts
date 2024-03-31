import styled from "styled-components";

export const InputBox = styled.div`
  width: 80rem;
  border-radius: 1.5rem;
  border: 1px solid var(--clr-primary);
  padding: 1.6rem 2rem;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const UserInput = styled.input`
  flex: 1;
  font-size: 1.6rem;
`;

export const AddLinkButton = styled.button`
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #f5f5f5;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;
