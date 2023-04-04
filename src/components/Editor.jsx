import React from "react";
import { Box, styled } from "@mui/material";

export default function Editor() {

const Heading = styled(Box)`
background: #1d1e22;
display:flex;
color:white;
padding: 10px 13px;

`

  return (
    <>
      <Box>
        {/* upper box */}
        <Box>
          <Heading>
            <Box 
            component="span"
            style={{
              backgroundColor :"red",
              height:25,
              width: 25,
              display:"flex",
              placeContent:"center",
              borderRadius: 5,
              marginRight:5,
              paddingBottom:3
            }}
            >/</Box>
            HTML
          </Heading>
        </Box>

        {/* lower box */}
        <Box></Box>
      </Box>
    </>
  );
}
