import styled from "styled-components"
import Flex from "./Flex"

import Line from "./Line"
import { useState } from "react"

const StyledConsole=styled.textarea`
width:100%;
height:70vh;
background:black;
border:none;
font-size:24px;
resize:none;
color:${props=>props.color || 'green'};
&: focus {
    outline:none
}

`




function Console ({color,...props}) {
    const [lines,setLines] = useState(['C/users/etibarsaidbayli>'])

    const onKeyPress=(event) => {
        if(event.charCode==13) {
            setLines([...lines,"C/users/etibarsaidbayli>"])
        }
    }


    return (
   
        <Flex>
            <Flex direction={"column"} margin="0 5px">
                {lines.map((line)=>(
                    <Line color={color}>{line}</Line>
                ))}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress}  {...props}/>
        </Flex>
    )
}

export default Console