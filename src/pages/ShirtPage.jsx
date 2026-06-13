import './ShirtPage.css';
import DeskLink from '../components/DeskLink.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import JakeSondyFrontPng from '../assets/merch/jakeSondyFront.png'
import JakeSondyBackPng from '../assets/merch/jakeSondyBack.png'
import NavBar from '../components/NavBar.jsx'
import ShirtCard from '../components/ShirtCard.jsx'
import TextLink from '../components/TextLink.jsx';

export default function ShirtPage() {
    const shirtSize = "s"; 
    const shirtArray = {
        s: "https://buy.stripe.com/14A28r3dg8HS8DU9tDdnW05",
        m: "https://buy.stripe.com/8x25kDbJM1fq3jA5dndnW06",
        l: "https://buy.stripe.com/eVq00j158cY85rI0X7dnW07",
        xl: "https://buy.stripe.com/28EdR95lo4rC4nEaxHdnW08",
        xxl: "https://buy.stripe.com/aFa8wPeVY5vG7zQ49jdnW09"
    }
    const [shirtLink, setShirtLink] = useState(shirtArray["s"]);
    const updateShirtLink = (e) => setShirtLink(shirtArray[e.target.value]);
    return (
        <body className="shirtpage-body">
        <main>
            <h1 className="shirtpage-Title">Shirtsss</h1> 
            <div className="main-shirt-box">
                <div className="shirt-card">
                    <h1>Main and Only Shirt</h1>
                    <div className="shirt-picture-card">
                        <ShirtCard img={JakeSondyFrontPng} name="shirt"/>
                        <ShirtCard img={JakeSondyBackPng} name="shirt"/>  
                    </div>
                    <div className="shirt-dropdown">
                        <label htmlFor="options">S:</label>
                            <select id="options" name="options" onChange={updateShirtLink} className="shirt-select">
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                        <TextLink name="$BUY$" link={shirtLink}/>
                    </div>
                    <p>Basic shirt:0 They r super soft. 
                       Contact me if u want multiple.</p>
                </div>
                <NavBar className="btmNavBar"></NavBar>
            </div>
        </main>
      </body>
    );
}

