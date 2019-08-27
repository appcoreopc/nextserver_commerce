
import SearchComponent from "../SearchBar/SearchComponent"

const ItemComponent =  (props) => (
    <div> 
    <ul>
    <li>{props.title}</li>
    <li><img src={props.src} width='200px'></img></li>                 
    </ul>
    </div>        
    );
    
    export default ItemComponent;