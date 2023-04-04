import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export default function Code() {
 
  const BoxStyle = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 46vh;
  `;
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  return (
    <BoxStyle>
      <Editor heading="HTML" icon="/" color="#FF3C41" value={html} onChange={setHtml}  />
      <Editor heading="CSS" icon="*" color="#0EBEFF" value={css} onChange={setCss}/>
      <Editor heading="JS" icon="{ }" color="orange" value={js} onChange={setJs} />
    </BoxStyle>
  );
}
