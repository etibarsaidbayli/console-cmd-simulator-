import styled, {css} from "styled-components"

const StyledButton =styled.button`
border:none;
padding:18px 15px;
font-size:18px;
cursor:pointer;
&: focus {
    outline:none
};
align-self:${props=>props.align || 'strech'};

${props=>props.primary && css`
    background:${props=>props.background || 'white'};
    color:${props=>props.color || 'white'}
`};

${props=>props.outline && css`
    background:transparent;
    border:1px solid ${props=>props.color || 'white'};
    color:${props=>props.color || 'white'};
`}

`



function Button (props) {
    return (
        <StyledButton {...props}/>
    )
}

export default Button 