import './HomePage.css'
import NavBar from '../components/NavBar.jsx'
import DeskLink from '../components/DeskLink.jsx'
import { Link } from 'react-router-dom'
import JakeSondyFrontPng from '../assets/merch/jakeSondyFront.png'
import cdPng from '../assets/img/cd.png'
import linkPng from '../assets/icons/link.png'

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
                        <Link to="https://soundcloud.com/jake-sondy/that-nicotine-remix-12-mp3?si=0ff9c96a86464ab0bf8c95930e0e8170&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
                        className="page-link page-link-1">
                            <DeskLink img={cdPng} name="fav mix rn"/>
                        </Link>
                        <Link to="/shirt" className="page-link page-link-2">
                            <DeskLink img={JakeSondyFrontPng} name="shirt"/>
                        </Link>
                        <Link to="https://linktr.ee/jake.sondy" 
                        className="page-link page-link-3">
                            <DeskLink img={linkPng} name="more links"/>
                        </Link>
                    </div>
                    <NavBar className="navbar"></NavBar>
                </div>
            </main>
        </body>
    ); 
}