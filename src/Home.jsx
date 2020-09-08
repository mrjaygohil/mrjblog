
import React from 'react';
import img from '../src/c.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home=()=> {
  return (
      <>
    <Common title="Grow your bussiness with" visit="/service" btn="Get Started" img={img}/>
 </>);
}

export default Home;
