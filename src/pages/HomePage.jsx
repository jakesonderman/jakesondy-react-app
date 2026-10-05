import './HomePage.css'
import NavBar from '../components/NavBar.jsx'
import DeskLink from '../components/DeskLink.jsx'
import { Link } from 'react-router-dom'
import JakeSondyFrontPng from '../assets/merch/jakeSondyFront.png'
import lipsPng from '../assets/img/SINGLECOVERBGLESS.png'
import butterflyPng from '../assets/img/EPCOVERBGLESS.png'
import linkPng from '../assets/icons/link.png'
import phonePng from '../assets/img/phone.png'

export default function HomePage() {
    return(
        <body className="body">
            <main>
                <h1 className="Title">Jake Sondy Land</h1> 
                <div className="main-box">
                    <h1 className="main-box-title">
                    WELCOME
                    </h1>
                    <div className="desktop">
                        <Link to="https://too.fm/pbd37gd"
                        className="page-link page-link-1">
                            <DeskLink img={lipsPng} name="<~> what u wanna hear <~>"/>
                        </Link>
                        <Link to="https://too.fm/xq8wx2p"
                        className="page-link page-link-4">
                            <DeskLink img={butterflyPng} name="/~/rootAccess/~/"/>
                        </Link>
                        <Link to="/shirt" className="page-link page-link-2">
                            <DeskLink img={JakeSondyFrontPng} name="shirt"/>
                        </Link>
                        <Link to="mailto:contact@jakesondy.com" 
                        className="page-link page-link-3">
                            <DeskLink img={phonePng} name="contact mee"/>
                        </Link>
                    </div>
                    <NavBar className="navbar"></NavBar>
                </div>
            </main>
        </body>
    ); 
}