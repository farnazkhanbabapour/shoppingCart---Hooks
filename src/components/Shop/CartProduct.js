import React from 'react'

export default function CartProduct(props) {
  
    return (
        <div key={props.id} class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src={props.img} width="100" height="100" />
                <span class="cart-item-title">{props.title}</span>
            </div>
            <span class="cart-price cart-column">${props.price}</span>
            <div class="cart-quantity cart-column"> 
                <button class="btn btn-danger" type="button" onClick={props.clicked}>REMOVE</button>
            </div>
        </div>
    )
    
}
