import "./IconLink.css"

function IconLink(props){
    return(
        
           <a href={props.link} target="_blank" className="icon-link">
           <img src={props.img} alt={props.name} width="50" height="50" />
           </a>
        
    );    
}


export default IconLink