import { connect } from 'react-redux'
import {  clearCartItem } from '../../actions/cartItemActions';

const mapStateToProps = state => ({
    items : state.items
 })
   
 const mapDispatchToProps = dispatch => ({     
     clearCart: () => { dispatch(clearCartItem())}    
 })

const CartSummary = ({items, clearCart}) => {

    return (
            <div>
                <div> Item { (items && items.length > 0) ? items.length : "(no item)"} </div>
                <div><button onClick={() => clearCart()}>clear</button> </div>
            </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)

