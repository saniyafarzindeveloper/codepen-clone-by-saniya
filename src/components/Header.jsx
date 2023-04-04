import React from "react";
import { AppBar, Toolbar, Box ,styled } from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Div = styled(Box)`
color:white;
fontSize: 30px;
padding:5px
`

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

export default function Header() {
  return (
    <Container position="static" >
      <Toolbar>
      <DataObjectIcon style={{ width: 60, height: 60 }} />
      <Div>{"CodePen Clone"}</Div>
      </Toolbar>
    </Container>
  );
}
