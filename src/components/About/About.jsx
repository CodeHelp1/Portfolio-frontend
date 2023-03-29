import { Typography } from '@mui/material';
import React from 'react';
import './About.css'

const About = ({about}) => {
  return (
    <div className='about'>
      <div className="aboutContainer">
        <Typography fontFamily='Gamela'>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
            <img className='aboutAvatar' src={about.avatar.url} alt="Abhi" />
            
            <Typography fontFamily='Gamela' variant='h4'
            style={{margin: '1vmax 0', color: 'block'}}
            >{about.name}</Typography>

            <Typography fontFamily='Gamela'
            >{about.title}</Typography>

            <Typography fontFamily='Gamela'
            style={{margin: '1vmax 0', color: 'block' , textAlign : "center"}}
            > {about.subtitle}</Typography>

        </div>
        <div>
            <Typography fontFamily='Gamela' 
            style={{
                letterSpacing: "1px",
                wordSpacing: "1px",
                lineHeight: "40px",
                textAlign: "right",
            }}>
            {about.description}            
            </Typography>
        </div>
      </div>
    </div>
  )
}

export default About;
