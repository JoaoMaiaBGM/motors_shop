import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 1rem;
  z-index: 1;
  top: 10px;
  border-radius: 50px;
  position: absolute;
  padding: 0.1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  background-color: ${(props) => props.theme.colors.greyScale.grey10};

  svg {
    fill: ${(props) => props.theme.colors.brand.brand1};
  }
`;
export const StyledP = styled.p`
  font-family: ${(props) => props.theme.fonts.lexend};
  font-size: ${(props) => props.theme.fonts["body-2-400"].size};
  font-weight: ${(props) => props.theme.fonts["body-2-400"].weight};
  color: ${(props) => props.theme.colors.greyScale.grey1};
`;
