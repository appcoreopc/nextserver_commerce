
import { connect } from 'react-redux'
import { addCartItem, removeCartItem } from '../../actions/cartItemActions';

const mapStateToProps = state => ({
    // items : getVisibleTodos(state.todos, state.visibilityFilter)
 })
   
 const mapDispatchToProps = dispatch => ({
     addCartItem: id => { dispatch(addCartItem(id))},
     removeCartItem : id => dispatch(removeCartItem(id))
 })
 
const AddToCart = ({ addCartItem, removeCartItem }) => (
    <div>
        <button className="btn btn-primary" type="button" onClick={
            () =>
            {
                addCartItem('1')
                //addCartItem('1');
            }        
        }      
        >Buy me</button>
    </div>
)

export default connect(mapStateToProps,mapDispatchToProps)(AddToCart)
//export default AddToCart;