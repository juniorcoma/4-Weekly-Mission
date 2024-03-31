import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 2rem;
  min-height: 50rem;
`;
