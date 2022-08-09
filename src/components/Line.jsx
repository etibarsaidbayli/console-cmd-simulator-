import styled from "styled-components"

const StyledLine=styled.div`
font-size:24px;
color:${props=>props.color || 'white'};
width:350px;


`


function Line (props) {
    return (
        <StyledLine {...props}/>
    )
}

export default Line 