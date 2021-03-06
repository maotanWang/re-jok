import styled from 'styled-components';


export const StyledSelect = styled.select`
  max-width: 100%;
  width: 100%;
  border: 0 none;
  padding: 0 1rem;
  background: ${({theme}) => theme.background.default};
  color: ${({validateStatus, theme}) => validateStatus ? `${theme[validateStatus].main}` :  theme.text.regular} ;
  border: ${({validateStatus, theme}) => validateStatus ? `1px solid ${theme[validateStatus].main}` :  `1px solid ${theme.border.primary}`};
  transition: .2s ease-in-out;
  transition-property: color,background-color,border;
  height: 3.2rem;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  border-radius: .2rem;

  cursor: ${props => props.disabled && "not-allowed"};

  &:hover{
    border-color: ${({validateStatus, theme}) => validateStatus ? `${theme[validateStatus].main}` :  "#c0c4cc"} ;


  }

  &:focus{
    outline: none;

  }
`

export const StyledOption = styled.option`

`
