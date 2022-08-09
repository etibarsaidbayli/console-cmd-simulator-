import styled from "styled-components"

const StyledTitle=styled.h1`
color:${props => props.color}
`

function Title (props) {
    return (
        <StyledTitle {...props}/>
        
    )
}

export default Title