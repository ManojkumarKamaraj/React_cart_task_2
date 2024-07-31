import React, { useState } from 'react';
import Card from './Card';

const Product = ({detail,setDetail,cart,setCart}) => {
    
    return (
        <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    detail.map((element,i)=>{
                    return <Card detail={element} key={i} cart={cart} setCart={setCart}/>
                    })
                }
                </div>
            </div>
        </section>
        </>
    );
};

export default Product;