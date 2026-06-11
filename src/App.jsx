import './App.css'
import NavBar from './NavBar.jsx'
import DeskLink from './DeskLink.jsx'
import JakeSondyFrontPng from './assets/merch/jakeSondyFront.png'


function App() {
  return(
    <>  
      <body className="body">
        <main>
            <h1 className="Title">Jake Sondy Land</h1> 
            <div className="main-box">
                <p className="main-box-title">
                   WELCOME
                </p>
                <div>
                  <DeskLink img={JakeSondyFrontPng} name="shirt"/>
                </div>
                <NavBar></NavBar>
            </div>
        </main>
        <script src="index.js"></script>
      </body>
    </>
  );
}

export default App
