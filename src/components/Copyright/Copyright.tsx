import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const Mew = styled.div`
    margin: 5rem 0 0 0;
`;

const Copyright = () => {
    var year = new Date().getFullYear();
    return (
        <Mew>
            <Typography style={{color:"white"}} variant = "subtitle2">made by Fardin Khan, ©️ {year}</Typography>
        </Mew>
    )
}

export default Copyright;