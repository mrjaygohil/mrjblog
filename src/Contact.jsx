
import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Sdata from './Sdata';
import { Wave,Random } from 'react-animated-text';
import { set } from 'animejs';

import emailjs from 'emailjs-com'; 
import swal from 'sweetalert';


const Contact=()=> {
 



  const [data,setdata]=useState({
    email:"",text:""
  });

  const inputEvent=(e)=>{
    const {value,name}=e.target;

    setdata((preval)=>{
      return {...preval,[name]:value}
    });
    
    
}
const onsubmit=(e)=>{

  //console.log(data.text +"==="+data.email);
  e.preventDefault();

  emailjs.sendForm('service_gctp9ud', 'template_rbbngxb', e.target, 'user_qdhRU4FMcgDhlH6vg9bvu')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    emailjs.sendForm('service_gctp9ud', 'template_zmegmtw', e.target, 'user_qdhRU4FMcgDhlH6vg9bvu')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


    swal({
      title: "Thank You!",
      text: "We will contact you soon...check your inbox in mail.",
      icon: "success",
      button: "ok!",
    });

}

  
  return (
      <>
     
 <div className="my-5">
   <h1 className="text-center m13" id="anim"> 
 
     <strong className="brand-name" style={{ color: "rgb(44, 178, 255)", textShadow:" 1px 2px black" ,fontFamily:" cursive"}}> 
    
            <Wave text="Contact Us"
          effect="fadeOut"
          effectChange={3.0}
          speed={4}  
            
          />
  
   </strong>
  </h1>
       
    </div>


    <div className="container-fluid ">
    <div className="row">
        <div className="col-5 mx-auto">
            <div className="row gy-5">

                <form onSubmit={onsubmit}>
                  <div className="form-group">
              
                    <input type="email" name="email" value={data.email} onChange={inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Email address.."/>
                  </div>
                
                 <label></label>
                  <div className="form-group">
                   
                    <textarea name="text" value={data.text} onChange={inputEvent}  className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write Something..."></textarea>
                  </div>
                  <div className="form-group mx-auto">
                  <label></label>
                   
                    <input   type="submit" value="submit" className="form-control btn-primary"/>
                
                  </div>
                </form>
       </div>
        </div>
    </div>

</div>
 </>);
}

export default Contact;
