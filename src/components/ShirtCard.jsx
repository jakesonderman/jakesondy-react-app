import './ShirtCard.css'

function ShirtCard(props) {
    return(
        <div className="shirt-card">
            <img className="shirt-img" src={props.img}/>
        </div>
    ); 
}
export default ShirtCard; 