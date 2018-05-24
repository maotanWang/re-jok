import styled, {css, keyframes} from 'styled-components';

import {Transition, hexa, shadeColor} from '../globals'

export const baseButton = css `
    display: flex;
    flex: none;
    align-self: center;
    align-items: center;
    justify-content: center;
    word-break: keep-all;
    cursor: pointer;
    position: relative;
    outline: none;
    border: none;
    text-decoration: none;
    text-align: center;
    margin-right: 0.8rem;
    margin-bottom: 1.2rem;
    font-size: ${props => props.theme.size[props.size].fontSize};


      div + span,
      span + span {
        margin: 0 .8rem;
      }




// =======================Button=====================


`
const classicAnimated = css `
&:hover {
    transform: translateY(-.3rem);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);

    &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
}


&:active {
    outline: none;
    transform: translateY(-.1rem);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
}
`
const hoverAnimated = css `
${classicAnimated}
&::after {
    background-color: ${props => props.backgroundColor
  ? props.backgroundColor
  : props.primary
    ? props.theme.primary.color
    : props.secondary
      ? props.theme.secondary.color
      : "#fff"};
}
&::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    ${props => props.shape === "rounded"
        ? css `
        border-radius: 10rem;
      `
        : css `
      border-radius: ${props => props.theme.size[props.size].borderRadius};

      `}

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}


`

const basicAnimated = css `
&:hover{
  background: ${props => props.backgroundColor
  ? hexa(props.backgroundColor, 0.9)
  : props.primary
    ? hexa(props.theme.primary.color, 0.9)
    : props.secondary
      ? hexa(props.theme.secondary.color, 0.9)
      : "#fff"};
  border-color:${props => props.backgroundColor
        ? hexa(props.backgroundColor, 0.9)
        : props.primary
          ? hexa(props.theme.primary.color, 0.9)
          : props.secondary
            ? hexa(props.theme.secondary.color, 0.9)
            : "#fff"};
  box-shadow: ${props => props.backgroundColor
              ? (`0 14px 26px -12px ${hexa(props.backgroundColor, 0.42)}, 0 4px 23px 0 rgba(0,0,0,0.12), 0 8px 10px -5px ${hexa(props.backgroundColor, 0.2)}`)

              : props.primary
                ? (`0 14px 26px -12px ${hexa(props.theme.primary.color, 0.42)}, 0 4px 23px 0 rgba(0,0,0,0.12), 0 8px 10px -5px ${hexa(props.theme.primary.color, 0.2)}`)

                : props.secondary
                  ? (`0 14px 26px -12px ${hexa(props.theme.secondary.color, 0.42)}, 0 4px 23px 0 rgba(0,0,0,0.12), 0 8px 10px -5px ${hexa(props.theme.secondary.color, 0.2)}`)

                  : (`0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0 rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)`)};

}

&:active{
  box-shadow: -.1rem .1rem .4rem rgba(0, 0, 0, 0.4);
}
`

export const Btn = styled.button.attrs({
  href: props => props.hrefString
    ? props.hrefString
    : null,
  type: props => props.tag === "button"
    ? props.rule
    : null,
  disabled: props => props.disabled || props.loading
})`
  ${baseButton}


  background-color: ${props => props.backgroundColor
  ? props.backgroundColor
  : props.primary
    ? props.theme.primary.color
    : props.secondary
      ? props.theme.secondary.color
      : "#fff"};
  color: ${props => (props.backgroundColor || props.primary || props.secondary)
        ? "#fff"
        : "#000000a6"};

    width: ${props => props.fullWidth && props.shape !== "circle"
          ? "100%"
          : "unset"};


  border: .1rem solid rgba(0,0,0,.15);
  border-color: ${props => props.backgroundColor
            ? props.backgroundColor
            : props.primary
              ? props.theme.primary.color
              : props.secondary
                ? props.theme.secondary.color
                : "#d9d9d9"};


  ${
props => !props.shape
  ? css `
    padding: ${props => props.theme.size[props.size].padding};
    border-radius: ${props => props.theme.size[props.size].borderRadius};
    line-height: ${props => props.theme.size[props.size].lineHeight};

      `
  : props.shape === "circle" && props.variant !== 'icon'
    ? css `
      width: ${props => props.theme.size[props.size].width};
      height: ${props => props.theme.size[props.size].height};
      border-radius: 50%;
      padding: 0;
    `
    : css `
        border-radius: 10rem;
        padding: ${props => props.theme.size[props.size].padding};
        line-height: ${props => props.theme.size[props.size].lineHeight};
    `}
     transition: ${Transition.base.on};

&::before {
position: absolute;
top: -1px;
left: -1px;
bottom: -1px;
right: -1px;
background: #fff;
opacity: .35;
content: "";
border-radius: inherit;
z-index: 1;
-webkit-transition: opacity .2s;
transition: opacity .2s;
pointer-events: none;
display: ${props => props.disabled || props.loading
      ? "block"
      : 'none'};
}
${props => props.variant === "raised"
        ? (
          !props.animated
          ? basicAnimated
          : props.animated === "classic"
            ? classicAnimated
            : null)
        : null}

`

//==================== Outline Button ====================
export const OutlineBtn = Btn.extend `
  background-color: rgba(0,0,0,0);
  border-color: ${props => props.backgroundColor
  ? props.backgroundColor
  : props.primary
    ? props.theme.primary.color
    : props.secondary
      ? props.theme.secondary.color
      : "rgba(0,0,0,.16)"};
  color: ${props => props.backgroundColor
        ? props.backgroundColor
        : props.primary
          ? props.theme.primary.color
          : props.secondary
            ? props.theme.secondary.color
            : "#0000008a"};

  ${
props => props.variant === "outline"
  ? css `
       &:hover{
            border-color: ${props => props.backgroundColor
    ? shadeColor(props.backgroundColor, -15)
    : props.primary
      ? shadeColor(props.theme.primary.color, -15)
      : props.secondary
        ? shadeColor(props.theme.secondary.color, -15)
        : "rgba(0,0,0,.54)"};

            color: ${props => props.backgroundColor
          ? shadeColor(props.backgroundColor, -15)
          : props.primary
            ? shadeColor(props.theme.primary.color, -15)
            : props.secondary
              ? shadeColor(props.theme.secondary.color, -15)
              : "rgba(0,0,0,.68)"};
       }
     `
  : props.variant === "inverted"
    ? (
      css `
         &:hover{
           background-color: ${props => props.backgroundColor
      ? props.backgroundColor
      : props.primary
        ? props.theme.primary.color
        : props.secondary
          ? props.theme.secondary.color
          : "rgba(0,0,0,.54)"};
            color: #fff;
         }
         `)
    : null}
    ${basicAnimated}

  }

`

//=================== Icon Button =======================
export const IconBtn = Btn.extend `
   border: none;
   color: ${props => props.backgroundColor
  ? props.backgroundColor
  : props.primary
    ? props.theme.primary.color
    : props.secondary
      ? props.theme.secondary.color
      : "#0000008a"};
   width: ${props => props.theme.size[props.size].width};
   height: ${props => props.theme.size[props.size].height};
   border-radius: 50%;
   padding: 0;
   background-color: #fff;
   &:hover{
        border-color: ${props => props.backgroundColor
        ? shadeColor(props.backgroundColor, -15)
        : props.primary
          ? shadeColor(props.theme.primary.color, -15)
          : props.secondary
            ? shadeColor(props.theme.secondary.color, -15)
            : "rgba(0,0,0,.54)"};

        color: ${props => props.backgroundColor
              ? shadeColor(props.backgroundColor, -15)
              : props.primary
                ? shadeColor(props.theme.primary.color, -15)
                : props.secondary
                  ? shadeColor(props.theme.secondary.color, -15)
                  : "rgba(0,0,0,.68)"};
   }

`

//==================== Text Button =======================
const classicTextButton = css `


  &:hover:before{
    left: 0%;
    right: 0%;
  }
  &::before{
    border-top: 0.48rem solid;
    border-bottom: 0.48rem solid;
    border-color:${props => props.color
  ? props.color
  : props.primary
    ? props.theme.primary.color
    : props.secondary
      ? props.theme.secondary.color
      : "#000000a6"};

    display: block;
    position: absolute;
    background: transparent;
    content: "";
    top: 0;
    bottom: 0;
    left: 100%;
    right: 100%;
    transition: 0.28s all ease-in-out;
  }

`

export const TextBtn = styled.button.attrs({
  href: props => props.hrefString
    ? props.hrefString
    : null,
  type: props => props.tag === "button"
    ? props.rule
    : null,
  disabled: props => props.disabled || props.loading
})`
 ${baseButton}
 letter-spacing: 0.08rem;
 background: transparent;
 background-image: none;
 font-weight: 600;
 transition: ${props => props.animated
  ? "0.3s all ease-in-out"
  : null};
 color: ${props => props.color
    ? props.color
    : props.primary
      ? props.theme.primary.color
      : props.secondary
        ? props.theme.secondary.color
        : "#000000a6"};

 padding: ${props => props.theme.size[props.size].padding};
 &:hover{
   color: ${props => props.color
          ? hexa(props.color, 0.8)
          : props.primary
            ? hexa(props.theme.primary.color, 0.8)
            : props.secondary
              ? hexa(props.theme.secondary.color, 0.8)
              : hexa("#000000a6", 0.8)};
   // background-color: #f9f9f9;
    border-color: transparent;
    letter-spacing: ${props => !props.animated
                ? ""
                : "0.32rem"};
 }
 &:active{
   // background-color: #f2f2f2;
   color: ${props => props.color
                  ? hexa(props.color, 0.8)
                  : props.primary
                    ? hexa(props.theme.primary.color, 0.8)
                    : props.secondary
                      ? hexa(props.theme.secondary.color, 0.8)
                      : hexa("#000000a6", 0.8)};
border-color: transparent;
 }
${
props => !props.animated
  ? null
  : classicTextButton}


`

// =================== Sub Component for Button ========================

export const Label = styled.span `
  display: block;
  flex: 0 0 auto;
  line-height: inherit;
  color: inherit;
  align-self: center;
  margin: auto;
`;

const spin = keyframes `
  to {transform: rotate(360deg);}
`;

export const SpinnerButton = styled.div `
display: inline-block;
width: ${props => props.theme.size[props.size].fontSize};
height: ${props => props.theme.size[props.size].fontSize};
min-width: ${props => props.theme.size[props.size].fontSize};
min-height: ${props => props.theme.size[props.size].fontSize};
position: ${props => props.shape === "circle"
  ? ""
  : "relative"};
color: inherit;
flex: 0 0 ${props => props.theme.size[props.size].fontSize};
order: ${props => props.shape !== "circle"
    ? props.iconPosition === "left"
      ? 0
      : 1
    : 0};
  &::before{
    content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.theme.size[props.size].fontSize};
  height: ${props => props.theme.size[props.size].fontSize};
  margin-top: calc(${props => props.theme.size[props.size].fontSize} / -2);
  margin-left: calc(${props => props.theme.size[props.size].fontSize} / -2);
  border-radius: 50%;
  border-color: ${props => props.primary || props.secondary
      ? "#fff"
      : "#d9d9d9"};
  border-top: 2px solid;
  border-right: 2px solid transparent;
  animation: ${spin} .6s linear infinite;
  }
`