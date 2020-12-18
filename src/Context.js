import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider

//Consumer

export default class ProductProvider extends Component{
    state={
        products: [],
        detailProduct : detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    getItem = (id) =>{
        const arr = storeProducts;
        console.log(arr);
        const product = arr.find(item => item.id === id);
        return product;
    }
    
    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(() =>{
            return { detailProduct : product };
        });
    }

    
    addToCart = (id) => {        
        console.log("The item will be added to cart");
    }
    setProducts = () =>{
         let tempProducts = [];
         storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = {...tempProducts, singleItem};
         });
         this.setState(() =>{
            return { products : tempProducts};
         });
    };

   
    render(){
        
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail : this.handleDetail,
                addToCart : this.addToCart
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};