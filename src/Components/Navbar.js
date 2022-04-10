import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div style = {{display: "flex",justifyContent: "space-between"}} className = "nav">
            <div style = {{display: "flex"}}>
               <img src="https://img.icons8.com/color/48/000000/mastercard-credit-card.png"/>
            </div>
            <div style = {{display: "flex"}} className = "text">
               <p>Credit Card</p>
               <p>Checking and Saving</p>
               <p>Customer</p>
               <p>Pricing</p>
            </div>
            <div style = {{display: "flex"}}>
               <button className = "light btn">Login</button>
               <button className = "dark btn">Signup</button>
            </div>
        </div>
    )
}

export default Navbar
