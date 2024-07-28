import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  margin: auto;
  @media (min-width: 700px) {
    border-spacing: 40px;
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  transition: 0.5s;
  &: hover {
    transform: scale(1.1);
  }
`;

