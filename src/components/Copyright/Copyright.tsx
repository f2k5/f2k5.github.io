import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const CopyrightStyle = styled.div`
    margin: 5rem 0 0 0;
`;

const Copyright = () => {
    var year = new Date().getFullYear();
    return (
        <CopyrightStyle>
            <Typography style={{color:"whitesmoke"}} variant = "subtitle2">made by Fardin Khan, ©️ {year}</Typography>
        </CopyrightStyle>
    )
}

export default Copyright;