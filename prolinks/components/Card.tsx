import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography"
import Link from "next/link";



const urlsToContact = [
    {linkTitle: "Github", link: "https://github.com/Aoumjahde"},
    {linkTitle: "LinkedIn", link: "https://LinkedIn.com/azizoumjahde"},
    {linkTitle: "Twitter", link: "https://x.com/Aoumjahde"},
    {linkTitle: "Blog", link: "https://meduim.com/azizoumjahde"},
    {linkTitle: "Instagram", link: "https://instagram.com/lpabdo"},
    {linkTitle: "Email", link: "oumj.aziz@gmail.com"},
]

const Card = () => {
    return ( 
    <Box 
        className = "cardBackround"
        sx={{padding : "2rem", borderRadius : "0.75rem" , display: "flex", flexDirection : "column", alignItems:"center"}}
    > 
        <Image 
        src="/assets/pic2.PNG" 
        alt="profilImage" 
        height={88} 
        width={88} 
        style={{
            borderRadius: "50%",
            marginBottom: "1.5rem",
        }}
        />

        <Typography variant = "h1" sx={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom:"0.5rem"}}>Abdelaziz OUMJAHDE</Typography>
        <Typography  className = "neon" variant = "h4" sx={{ fontSize: "1.3125rem", fontWeight : "bold", marginBottom:"1rem"}}>Agadir, Morocco</Typography>
        <Typography  className = "headline" variant = "h1" sx={{ fontSize: "1.5rem", fontWeight : "large", marginBottom:"0.5rem"}}>Full-Stack Developer.</Typography>

        {/* {urlsToContact.map((url) => (
            <a href={url.link} key={url.link} target="_black">
                {url.linkTitle}
            </a> */}
            {urlsToContact.map((url) => (
            <Link href={url.link} key={url.link}>  // ❌ Duplicate key if `url.link` is the same
                {url.linkTitle}
            </Link>
            ))            

        }
        
     </Box>
);
}

export default Card;