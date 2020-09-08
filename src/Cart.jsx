
import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart=(props)=> {
  return (
      <>

<div className="col-md-4 mx-auto">
                    <div className="card">

                        <img className="card-img-top" height="300px" src={props.img} alt="Card image cap"/>

                        <div className="card-body">

                        
                            <h4 className="card-title font-weight-bold"><a>{props.title}</a></h4>
                        
                            <p className="card-text">{props.text}</p>
                        
                            <NavLink to className="btn btn-primary">Button</NavLink>

                        </div>

                        </div>
                
                </div>
 </>);
}

export default Cart;
