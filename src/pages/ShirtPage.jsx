import './ShirtPage.css';
import DeskLink from '../components/DeskLink.jsx'
import { Link } from 'react-router-dom'
import JakeSondyFrontPng from '../assets/merch/jakeSondyFront.png'
import JakeSondyBackPng from '../assets/merch/jakeSondyBack.png'
import NavBar from '../components/NavBar.jsx'
import ShirtCard from '../components/ShirtCard.jsx'


export default function ShirtPage() {
    return (
        <body className="body">
        <main>
            <h1 className="Title">Shirtsss</h1> 
            <div className="main-shirt-box">
                <div className="shirt-card">
                    <h1>Main and Only Shirt</h1>
                    <div className="shirt-picture-card">
                        <ShirtCard img={JakeSondyFrontPng} name="shirt"/>
                        <ShirtCard img={JakeSondyBackPng} name="shirt"/>
                    </div>
                </div>
                <NavBar></NavBar>
            </div>
        </main>
        <script src="index.js"></script>
      </body>
    );
}

