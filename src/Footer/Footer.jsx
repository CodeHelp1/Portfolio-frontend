import React from 'react';
import './Footer.css'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography fontFamily='Gamela' variant="h5">About Me</Typography>
        <Typography fontFamily='Gamela' >
          Hey, my name is Rahul Kumar. I am a Full-Stack Developer and a
          Full Time freelancer <b> Code With Rahul</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography fontFamily='Gamela' >Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography fontFamily='Gamela' variant="h6">Social Media</Typography>
        <a href="https://github.com/CodeHelp1" target="black">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCivxM6HUA-5S_VyesdcHzxg" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/Ha__4r_/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/mernstack/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
