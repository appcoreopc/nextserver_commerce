
import { connect } from 'react-redux'
import { addCartItem, removeCartItem } from '../../actions/cartItemActions';

const mapStateToProps = state => ({
    // items : getVisibleTodos(state.todos, state.visibilityFilter)
 })
   
 const mapDispatchToProps = dispatch => ({
     addCartItem: id => { console.log('addcatitem');  dispatch(addCartItem(id))},
     removeCartItem : id => dispatch(removeCartItem(id))
 })
 
const AddToCart = (a, b, c) => (

    <div>
        <button className="btn btn-primary" type="button" onClick={
            () =>
            {
            console.log(2)
            console.log(c)
            console.log(b)
            console.log(a)
            //addCartItem('1');
            }        
        }      
        >Buy me</button>
    </div>
)


export default connect(mapStateToProps,mapDispatchToProps)(AddToCart)


//export default AddToCart;