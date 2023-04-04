import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";




const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

export default function Header() {
  return (
    <Container position="static" >
      <Toolbar>
      <DataObjectIcon style={{ width: 60, height: 60 }} />
      </Toolbar>
    </Container>
  );
}
