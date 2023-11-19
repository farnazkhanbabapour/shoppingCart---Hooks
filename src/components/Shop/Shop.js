import React, { useState } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default function Shop() {

    const[products,setProducts]= useState([
        { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
        { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
        { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
        { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
        { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
        { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
    ])
    const[shoppingCart, setShoppingCart]= useState([])
    const[socials, setSocials]= useState([
        { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
        { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
        { id: 3, href: 'https://www.facebook.com', img: 'Images/FaceBook Logo.png' },
    ])

    const addToCartHandler= (idNum)=>{
      
        let item = products.find((product)=>{
            return (product.id === idNum) 

        })
        setShoppingCart(prevstate => {
             return [...prevstate, item]
        })



    }

    const removeProductFromCart= (idNum)=>{
        // let item = shoppingCart.findIndex((product)=>{
        //    return(product.id === idNum) 
       
            
        // })

        // this.setState(({ shoppingCart }) => {
        //     const newShoppingCart = [ ...shoppingCart ]
        //     newShoppingCart.splice(item, 1)
        //     return { shoppingCart:newShoppingCart }
        //   })

        let newShoppingCart = shoppingCart.filter((product)=>{
            return (product.id !== idNum)

        })
        setShoppingCart(newShoppingCart)
       
    }

    const removeAllProduct= ()=>{
      
        setShoppingCart([])

    }

    return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">
                        {products.map((product)=>{
                            return(<Product {...product} clicked={()=>addToCartHandler(product.id)}/>)

                        })}
                        

                        
                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">
                        {shoppingCart.map((shoppingProduct)=>{
                            return(<CartProduct {...shoppingProduct} clicked={()=>{removeProductFromCart(shoppingProduct.id)}} />)


                        })}

                        


                    </div>
                    <button class="btn btn-primary btn-purchase" type="button" onClick={()=>removeAllProduct()}>
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                            {socials.map((social)=>{
                                return (<Social {...social} />)

                            })}

                           
                        </ul>
                    </div>
                </footer>


            </>
        )
}
