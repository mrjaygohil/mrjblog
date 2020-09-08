
import React from 'react';
import img from '../src/aa.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About=()=> {
  return (
      <>
     <Common title="About-Us Page"  visit="/contact" btn="Get In Touch" img={img}/>
 </>);
}

export default About;
