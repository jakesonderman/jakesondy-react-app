import './ShirtPage.css';
import DeskLink from '../components/DeskLink.jsx'
import { Link } from 'react-router-dom'
import JakeSondyFrontPng from '../assets/merch/jakeSondyFront.png'
import JakeSondyBackPng from '../assets/merch/jakeSondyBack.png'
import NavBar from '../components/NavBar.jsx'
import ShirtCard from '../components/ShirtCard.jsx'


export default function ShirtPage() {
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
                        <label for="options">Size:</label>
                            <select id="options" name="options"  className="shirt-select">
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                    </div>
                </div>
                <NavBar className="btmNavBar"></NavBar>
            </div>
        </main>
        <script src="index.js"></script>
      </body>
    );
}

