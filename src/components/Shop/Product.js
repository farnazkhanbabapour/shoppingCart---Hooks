import React from 'react'
import CartProduct from './CartProduct';

export default function Product(props)  {

    return (
        <div key={props.id} class="shop-item">
            <span class="shop-item-title">{props.title}</span>
            <img class="shop-item-image" src={props.img} />
            <div class="shop-item-details">
                <span class="shop-item-price">{props.price}$</span>
                <button
                    class="btn btn-primary shop-item-button"
                    type="button" onClick={props.clicked}>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
  
}
