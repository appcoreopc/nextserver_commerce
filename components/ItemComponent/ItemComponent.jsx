
import SearchComponent from "../SearchBar/SearchComponent"
import AddToCart from '../../components/Cart/AddCart'
import Link from 'next/link'

const ItemComponent =  (props) => (


    <Link href={props.sku}>
    <div className="itemComponent"> 
        <ul>
            <li>{props.title}</li>
            <li><img src={props.src} width='200px'></img></li> 
            <li>&nbsp;</li>
            <li><AddToCart/></li>                
        </ul>
    </div>
    </Link>         
    );
    
    export default ItemComponent;