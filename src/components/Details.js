import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value) =>{
            const {id, company, img, info, price, title, inCart} = value.detailProduct;
            return (
              <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto text-capitalize col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto text-capitalize col-md-6 my-3">
                    <h3>Model : {title}</h3>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Made by : <span>{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        Price : <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-">
                      Some info about Car :
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/cars">
                        <ButtonContainer>Back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        onClick={()=>{
                          console.log(value.addToCart(id));
                        }}
                        disabled={inCart?true:false}
                      >
                        {inCart ? "Ordered" : "Place Order"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
                
              </div>
            )
          }
        }
      </ProductConsumer>
    );
  }
}
