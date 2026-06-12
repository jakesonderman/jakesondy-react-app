import './HomePage.css'
import NavBar from '../components/NavBar.jsx'
import DeskLink from '../components/DeskLink.jsx'
import { Link } from 'react-router-dom'
import JakeSondyFrontPng from '../assets/merch/jakeSondyFront.png'



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
                    <Link to="/shirt" className="page-link-1">
                        <DeskLink img={JakeSondyFrontPng} name="shirt"/>
                    </Link>
                </div>
                <NavBar className="navbar"></NavBar>
            </div>
        </main>
        <script src="index.js"></script>
      </body>
    ); 
}