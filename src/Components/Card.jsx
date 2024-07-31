import React, { useState } from "react";


const Card = ({ detail, key, cart, setCart }) => {
  const [status, setStatus] = useState(true);

  const handleIncrement = () => {
    // console.log(cart);
    // we need to change status to false to change button cause initially button is add
    setStatus(false);
    setCart(cart + 1);
    
  };

  const handleDecrement = () =>{
    if (cart > 0) {
      setStatus(true);
      setCart(cart - 1);
    }
  };

  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={detail.image} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{detail.item}</h5>
              <div>{ detail.rating ?(<>
                <div className="d-flex justify-content-center small text-warning mb-2">
                <div><i className="fa fa-star" aria-hidden="true"></i></div>
                <div><i className="fa fa-star" aria-hidden="true"></i></div>
                <div><i className="fa fa-star" aria-hidden="true"></i></div>
                <div><i className="fa fa-star" aria-hidden="true"></i></div>
                <div><i className="fa fa-star" aria-hidden="true"></i></div>
                </div>
                </>):("")}
              </div>
              <span className="text-muted text-decoration-line-through p-1">
                {detail.text}
              </span>
              {detail.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {status ? (
                <button
                  className="btn btn-outline-success mt-auto"
                  onClick={() => {
                    handleIncrement();
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-danger mt-auto"
                  onClick={() => {
                    handleDecrement();
                  }}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
