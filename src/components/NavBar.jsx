import "./NavBar.css"
import IconLink from './IconLink.jsx'
import ytIconJpg from '../assets/icons/ogyt.jpg'
import scIconPng from '../assets/icons/ogsc.png'
import spIconPng from '../assets/icons/spotify.png'
import bcIconPng from '../assets/icons/ogbc.png'



function NavBar() {
    return(
        <div className="btmNavBar">
            <IconLink img={ytIconJpg} link="https://www.youtube.com/@jakesondy" name="Youtube"/>
            <IconLink img={scIconPng} link="https://soundcloud.com/jake-sondy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" name="Soundcloud"/>
            <IconLink img={spIconPng} link="https://open.spotify.com/artist/4zXJ9PwydnIEW6dPrzId6t?si=WwxZyArpR-uD_IustBZEmQ" name="Soundcloud"/>
            <IconLink img={bcIconPng} link="https://jakesondy.bandcamp.com/" name="Bandcamp"/>
        </div>
    );
}
export default NavBar