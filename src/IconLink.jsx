import "./IconLink.css"

function IconLink(props){
    return(
        
           <a href={props.link} target="_blank" className="icon-link">
            <img src={props.img} alt={props.name} className="icon-img"/>
           </a>
        
    );    
}


export default IconLink