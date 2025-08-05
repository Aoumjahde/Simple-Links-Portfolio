import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography"

const Card = () => {
    return ( 
    <Box 
        className = "cardBackround"
        sx={{padding : "2rem", borderRadius : "0.75rem" }}
    > 
        <Image 
        src="/assets/pic2.PNG" 
        alt="profilImage" 
        height={88} 
        width={88} 
        style={{borderRadius: "50%"}}
        />

        <Typography variant = "h1" sx={{ fontSize: "2.25rem"}}>Abdelaziz OUMJAHDE </Typography>

     </Box>
);
}

export default Card;