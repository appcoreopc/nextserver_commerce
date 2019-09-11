import { connect } from 'react-redux'
//import { addCartItem, removeCartItem } from '../../actions/cartItemActions';

const mapStateToProps = state => ({
 items : state
 })
   
   
 const mapDispatchToProps = dispatch => ({
     //addCartItem: id => { dispatch(addCartItem(id))},
     //removeCartItem : id => dispatch(removeCartItem(id))
 })

const CartSummary = ({items}) => {
    console.log('cart', items);
    return (
            <div>
                <div> Item {items ? items.length : "no item"} </div>
            </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)

