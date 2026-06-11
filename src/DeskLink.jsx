import './DeskLink.css'

function DeskLink(props) {
    return(
        <div className="desk-link">
            <img className="desk-img" src={props.img}/>
            <p> {props.name} </p>
        </div>
    ); 
}
export default DeskLink; 