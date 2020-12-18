import React, { Component } from "react";
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from "../Context";
//Import products form data
import {storeProducts} from '../data';

export default class ProductList extends Component {
  state ={
    products : storeProducts
  }
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Tesla" title="Beasts"/>
            <div className="row">
              <ProductConsumer>
                {
                  (value)=>{
                    return this.state.products.map( product =>{
                      return <Product key={product.id} product={product}/>
                    })
                  }
                }
              </ProductConsumer>
            </div>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}
