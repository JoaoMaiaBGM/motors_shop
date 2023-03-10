import styled, { css } from "styled-components";
import { ICardImageProps } from ".";

export const StyledDiv = styled.div<ICardImageProps>`
    position: relative;
    display: flex;
    align-items : center;
    justify-content : center;
    width: 100%;
    height: 100%;
    ${props=> props.background ?
    `background-color : ${props.galleryImage ? props.theme.colors.greyScale.grey7  : props.theme.colors.greyScale.grey10};`

    :css`
    ::before{
        border-radius : 5px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
    `
    }

`