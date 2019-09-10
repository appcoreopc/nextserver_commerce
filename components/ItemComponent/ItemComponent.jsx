
import AddToCart from '../../components/Cart/AddCart'
import { connect } from 'react-redux'
import { addCartItem, removeCartItem } from '../../actions/cartItemActions';

const mapStateToProps = state => ({
   // items : getVisibleTodos(state.todos, state.visibilityFilter)
})
  
const mapDispatchToProps = dispatch => ({
    addCartItem: id => { console.log('addcatitem');  dispatch(addCartItem(id))},
    removeCartItem : id => dispatch(removeCartItem(id))
})

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
    
 export default connect(
   // mapStateToProps,
   null,
    mapDispatchToProps
  )(ItemComponent);
  