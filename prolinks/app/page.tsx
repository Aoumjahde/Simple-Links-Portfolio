import React from "react";
import Box from "@mui/material/Box";

import Card from "@/components/Card";


export default function Home() {
  return (
    <Box className="container"
      sx={{ 
          backgroundColor : "#141414",
          display: "flex",
          justifyContent : "center",
          alignItems : "center",

          }}>
      <Card />
    </Box>
  

  );
}
