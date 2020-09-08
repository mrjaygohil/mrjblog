
import React from 'react';
import Sdata from './Sdata';

import Cart from './Cart';
const Service=()=> {
  return (
      <>
    <div className="my-5">
        <h1 className="text-center">Our Service</h1>

    </div>
    
    <div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-5">

                {
                    Sdata.map((v,i)=>{
                        return <Cart key={i} title={v.title} text={v.text} img={v.img}/>;
                    })

                }

                

            </div>
        </div>
    </div>

</div>

 </>);
}

export default Service;
