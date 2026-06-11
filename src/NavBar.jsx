import "./NavBar.css"
import IconLink from './IconLink.jsx'

function NavBar() {
    return(
        <div className="btmNavBar">
            <IconLink img="src/assets/icons/ogyt.jpg" link="https://www.youtube.com/@jakesondy" name="Youtube"/>
            <IconLink img="src/assets/icons/ogsc.png" link="https://soundcloud.com/jake-sondy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" name="Soundcloud"/>
            <IconLink img="src/assets/icons/spotify.png" link="https://open.spotify.com/artist/4zXJ9PwydnIEW6dPrzId6t?si=WwxZyArpR-uD_IustBZEmQ" name="Soundcloud"/>
            <IconLink img="src/assets/icons/ogbc.png" link="https://jakesondy.bandcamp.com/" name="Bandcamp"/>
        </div>
    );
}
export default NavBar