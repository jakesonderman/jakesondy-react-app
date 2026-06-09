import './App.css'

function App() {
  return(
    <>  
      <body className="body">
        <main>
            <h1 className="Title">Jake Sondy React Land</h1> 
            <div className="mainBox">
                <p>
                   WELCOME
                </p>
            </div>
            <div className="linkBox">
               <a href= "https://www.youtube.com/@jakesondy"  target="_blank" className="btn btn-primary bg-primary">Youtube</a>
                <a href= "https://soundcloud.com/jake-sondy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"  target="_blank" className="btn btn-primary bg-primary">
                    Soundcloud</a>
                <a href="https://open.spotify.com/artist/4zXJ9PwydnIEW6dPrzId6t?si=WwxZyArpR-uD_IustBZEmQ"  target="_blank" className="btn btn-primary bg-primary">Spotify</a>
                <a href="https://jakesondy.bandcamp.com/"  target="_blank" className="btn btn-primary bg-primary">Bandcamp</a>
            </div>
        </main>
        <script src="index.js"></script>
      </body>
    </>
  );
}

export default App
