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
                <p className="main-box-title">
                   WELCOME
                </p>
                <Link to="/shirt" className="shirt-page-link">
                  <DeskLink img={JakeSondyFrontPng} name="shirt"/>
                </Link>
                <NavBar></NavBar>
            </div>
        </main>
        <script src="index.js"></script>
      </body>
    ); 
}