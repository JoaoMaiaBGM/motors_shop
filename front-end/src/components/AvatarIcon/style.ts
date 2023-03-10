import styled, { css } from "styled-components";
import { IAvatarProps } from ".";
import { customTheme } from "../../theme";

interface IDivProps{
  colorClass?: "avatarName-grey" | "avatarName-white";
  size : "big" | "small" | "medium"
  width? : string;
}

export const AvatarStyled = styled.div<IDivProps>`

  width : ${props=> props.width};
  display: flex;
  flex-direction: ${props=>props.size != "small" ? "column" : "row"};
  align-items:  center;
  justify-content: center;
  gap: 5px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;

  .edit{
    :hover{
      cursor : pointer;
      opacity: 0.5;
    }
  }

  .delete{
    :hover{
      cursor: pointer;
      opacity: 0.5;
    }
  }

  .avatarLetter {
    ${props=> props.size == "big" &&
    css`
      width:104px;
      height:104px;
      font-size: 3rem;
    `}
    ${props=> props.size == "medium" &&
    css`
      width:104px;
      height:104px;
      font-size: 2.6rem;
    `}
    ${props=> props.size == "small" &&
    css`
      width:32px;
      height:32px;
    `}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${customTheme.colors.brand.brand2};
    border-radius: 150px;
    color: ${customTheme.colors.greyScale.whiteFixed};
  }
  ${props=> props.size == "big" &&
  css`
    span{
      margin-top: 1rem;
      font-family: ${customTheme.fonts.lexend};
      color : ${customTheme.colors.greyScale.grey1};
      font-size: ${customTheme.fontSizes["Heading-6-600"].size};
      font-weight: ${customTheme.fontWeights["Heading-6-600"].weight};
    }
  `}
  ${props=> props.size != "big" && 
  css`
    .avatarName-grey {
    text-align: center;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${customTheme.colors.greyScale.grey2};
  }

  .avatarName-white {
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${customTheme.colors.greyScale.whiteFixed};
  }
  `}
`
