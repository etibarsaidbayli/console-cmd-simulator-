import styled from "styled-components"

const StyledFlex=styled.div`
display:flex;
flex-direction:${props=>props.direction || 'row'};
align-item:${props => props.align || 'stretch'};
justify-content:${props =>props.justify || 'strech'} ;
margin:${props=>props.margin || '0'} ;

`


function Flex (props) {
    return (
        <StyledFlex {...props}/>
    )
}

export default Flex