import  Box  from '@mui/material/Box'
import React from 'react'
import Link  from 'next/link';


interface LinkProps {
    urlToContact: {linkTitle: string;  link: string;};
}

const CustomLink = ({ urlToContact }: LinkProps) => {
  return <Box className = "linkBackround" 
  sx={{
    padding: "0.75rem  5.625rem",
    width: "15rem",
    display:"flex",
    justifyContent : "center",
    alignContent: "center",
    color: "#FFF",
    textDecoration: "none",
    }  }> 
    <Link href={urlToContact.link} target='_blank' 
    > {urlToContact.linkTitle} </Link>
  </Box>

};

export default CustomLink;
