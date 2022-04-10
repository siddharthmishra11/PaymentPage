import React from 'react'
import Img from '../Assets/card.jpeg'
import Img1 from '../Assets/sparkle.png'
import "./Body.css"
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function Body() {
    return (
        <div style = {{display: "flex"}}>
            <div className = "data">
                <div style = {{display: "flex"}}>
                  <img src = {Img1} style = {{marginTop: "15px",height: "20px"}}></img>
                  <p className = "first">5% CASHBACK FOR NEWCOMER</p>
                </div>
                <div className = "headline">
                    <p>Take Control Your</p>
                    <p>finance Payment</p>
                    <p>with one Card</p>
                </div>
                <p className = "some-data">Available exclusively for Customers,this card offers a generous rewards programmer with discounts on top brands</p>
                <button className = "btn dark">Get my card right now</button>
                <button className = "btn light blackBorder">Learn More</button>

            </div>
            <div className = "image">
                <img src = {Img} style = {{height: "500px",width: "500px"}}></img>
            </div>
        </div>
    )
}

export default Body

