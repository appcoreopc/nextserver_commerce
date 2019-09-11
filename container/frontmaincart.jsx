
import { ItemComponent } from '../components/ItemComponent/ItemComponent'
import { connect } from 'react-redux'
import AddToCart from '../components/Cart/AddCart'
import { addCartItem, removeCartItem } from '../actions/cartItemActions';

export const FrontMainCart = () => (
  
    <div className="container" id="container">  
      <div className="row">             
        
        <div className="col-12 col-sm-6 col-md-6"> 
            <ItemComponent title="Nike X" sku="/product" src="../static/images/1.jpg"></ItemComponent>
        </div>      
        
        <div className="col-12 col-sm-6 col-md-6">         
            <ItemComponent title="Nike Air" sku="123" src="../static/images/2.jpg"></ItemComponent>
        </div>    
        
        <div className="col-12 col-sm-6 col-md-6"> 
           <ItemComponent title="Nike White" sku="123" src="../static/images/3.jpg"></ItemComponent>
        </div>       
     </div>    
  </div>  
)
    
 
//export default connect(mapStateToProps,mapDispatchToProps)(ItemComponent)
//export default connect(mapStateToProps,mapDispatchToProps)(AddToCart)
//export FrontMainCart

