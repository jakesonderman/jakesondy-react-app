import './ShirtCard.css'

function ShirtCard(props) {
    return(
        <div>
            <img className="shirt-img" src={props.img}/>
        </div>
    ); 
}
export default ShirtCard; 