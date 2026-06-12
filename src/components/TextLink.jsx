import "./TextLink.css"

function TextLink(props){
    return(
        
           <a href={props.link} target="_blank" className="text-link">
            {props.name}
           </a>
        
    );    
}


export default TextLink