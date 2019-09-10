
import { ItemComponent } from '../components/ItemComponent/ItemComponent'
import { connect } from 'react-redux'

import { addCartItem, removeCartItem } from '../actions/cartItemActions';


const mapStateToProps = state => ({
    // items : getVisibleTodos(state.todos, state.visibilityFilter)
 })
   
 const mapDispatchToProps = dispatch => ({
     addCartItem: id => { console.log('addcatitem');  dispatch(addCartItem(id))},
     removeCartItem : id => dispatch(removeCartItem(id))
 })
 

export const FrontMainCart = ({a}) => (
  
    <div className="container" id="container">  
      <div className="row">             
        
        <div className="col-12 col-sm-6 col-md-6"> 
            <ItemComponent onClic={ 
                () => {
            
            console.log(a);
            console.log('data');
           }          }  
        
            title="Nike X" sku="/product" src="../static/images/1.jpg"></ItemComponent>
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
    
 
export default connect(  // mapStateToProps,
    null,
    mapDispatchToProps)(ItemComponent)

//export FrontMainCart

