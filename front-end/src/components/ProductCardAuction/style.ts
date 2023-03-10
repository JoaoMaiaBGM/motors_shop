import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  width: max-content;

  .box__content {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .content {
      padding: 1rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;

      :hover{
        cursor: pointer;
      }
      .content_title {
        font-family: ${(props) => props.theme.fonts.lexend};
        font-size: ${(props) => props.theme.fonts["Heading-6-600"].size};
        font-weight: ${(props) => props.theme.fonts["Heading-6-600"].weight};
        color: ${(props) => props.theme.colors.greyScale.grey10};
      }
      .content_description {
        font-family: ${(props) => props.theme.fonts.inter};
        font-size: ${(props) => props.theme.fonts["body-1-400"].size};
        font-weight: ${(props) => props.theme.fonts["body-1-400"].weight};
        color: ${(props) => props.theme.colors.greyScale.grey5};
      }
    }
    .navigation {
      width: 100%;
      padding: 1rem;
      background-color: ${(props) => props.theme.colors.brand.brand1};
      font-family: ${(props) => props.theme.fonts.inter};
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navigation_title {
        color: ${(props) => props.theme.colors.greyScale.whiteFixed};
        font-weight: ${(props) => props.theme.fonts["body-1-600"].weight};
      }
      .navigation_icon {
        color: ${(props) => props.theme.colors.greyScale.whiteFixed};
      }
    }
  }
`;
