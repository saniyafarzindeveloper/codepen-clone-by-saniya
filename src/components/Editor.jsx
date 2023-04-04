import React from "react";
import { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";


export default function Editor({ heading, icon, color, value, onChange }) {

  const[open, setOpen] = useState(true)

  const handleChange = (editor, data, value) => {
    console.log(value)
    onChange(value);

  }

  const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    color: white;
    padding: 10px 13px;
  `;

  const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: gray;
    justify-content: space-between;
    font-weight: 500;
  `;

  const Wrapper = styled(Box)`
  flex-grow:1;
  display:flex;
  flex-direction:column;
  padding: 0 5px;
  `

  

  return (
    <>
      <Wrapper style={open ? null: {flexGrow:0}} >
        {/* upper box */}
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                backgroundColor: color,
                height: 25,
                width: 25,
                display: "flex",
                placeContent: "center",
                borderRadius: 5,
                marginRight: 5,
                paddingBottom: 3,
                fontSize: 20,
                color: "black"
              }}
            >
              {icon}
            </Box>
            {heading}
          </Heading>
          <CloseFullscreenIcon
          fontSize="small"
          style={{
            alignItems:"center",
            padding: 14
          }}
          onClick = {() => setOpen(prevState => !prevState)}
           />
        </Header>

        {/* lower box */}
        <ControlledEditor
          className="controlled-editor"
          value={value}
          onBeforeChange={handleChange}
          options={{
            theme: "material",
            lineNumbers: true,
          }}
        />
      </Wrapper>
    </>
  );
}


