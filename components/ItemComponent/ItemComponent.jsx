
import AddToCart from '../../components/Cart/AddCart'


export const ItemComponent =  (props) => (
    
    //  <Link href={props.sku}>
    <div className="itemComponent"> 
    <ul>
    <li>{props.title}</li>
    <li><img src={props.src} width='200px'></img></li> 
    <li>&nbsp;</li>
    <li><AddToCart/></li>                
    </ul>
    </div>
    //    </Link>         
 );
