import styled from "styled-components";
import { customTheme } from "../../theme";

export const Footer1 = styled.div`
  position: relative;
  margin-top: 1rem;
  position: relative;
  background-color: ${() => customTheme.colors.greyScale.grey0};
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: ${() => customTheme.fonts["body-2-400"].size};
  font-weight: ${() => customTheme.fonts["body-2-400"].weight};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 45px 59px;
  gap: 10px;

  @media (min-width : 800) {
    justify-content: space-between;
  }

  button {
    background-color: ${() => customTheme.colors.greyScale.grey1};
    color: #ffffff;

    width: 53px;
    height: 50px;
    border-radius: 4px;
  }
`;
