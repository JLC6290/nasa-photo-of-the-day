import React from "react";
import styled from "styled-components";

const Card = args => {
    // styled components
    const SubTitle = styled.h2`
        color: white;
        margin: 2%;
    `;
    const TextContent = styled.p`
        color: white;
        padding: 2%;
    `;

    const { cardTitle, cardDesc, ...rest } = args;
    console.log(args);
    return (
        <div>
            <SubTitle>{cardTitle}</SubTitle>
            <TextContent>{cardDesc}</TextContent>
        </div>
    )
}
export default Card;