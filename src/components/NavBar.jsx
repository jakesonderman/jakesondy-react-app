import "./NavBar.css"
import IconLink from './IconLink.jsx'
import ytIconJpg from '../assets/icons/ogyt.jpg'
import scIconPng from '../assets/icons/ogsc.png'
import spIconPng from '../assets/icons/spotify.png'
import bcIconPng from '../assets/icons/ogbc.png'
import discWebp from '../assets/icons/disc.webp'
import itunesWebp from '../assets/icons/itunes.webp'
import mailJpg from   '../assets/icons/mail.jpeg'
import homeWebp from '../assets/icons/home.webp'
import gitPng from '../assets/icons/git.png'


function NavBar() {
    return(
        <div className="btmNavBar">
            <IconLink img={homeWebp} id="home-button" link="/" name="email List"/>
            <IconLink img={ytIconJpg} link="https://www.youtube.com/@jakesondy" name="Youtube"/>
            <IconLink img={scIconPng} link="https://soundcloud.com/jake-sondy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" name="Soundcloud"/>
            <IconLink img={spIconPng} link="https://open.spotify.com/artist/4zXJ9PwydnIEW6dPrzId6t?si=WwxZyArpR-uD_IustBZEmQ" name="Soundcloud"/>
            <IconLink img={bcIconPng} link="https://jakesondy.bandcamp.com/" name="Bandcamp"/>
            <IconLink img={discWebp} link="https://discord.gg/n6QF9M38GV" name="Discord"/>
            <IconLink img={itunesWebp} link="https://music.apple.com/us/artist/jake-sondy/1775649087" name="Apple Music"/>
            <IconLink img={mailJpg} link="https://mailchi.mp/8b6fb6410d47/sign-up-landing-page" name="email List"/>
            <IconLink img={gitPng} link="https://github.com/jakesonderman" name="code"/>
        </div>
    );
}
export default NavBar