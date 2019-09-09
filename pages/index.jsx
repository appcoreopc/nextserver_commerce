

import ScriptContent from '../components/StaticAssets/ScriptContent'
import ItemComponent from '../components/ItemComponent/ItemComponent'
import TopNav from '../components/TopNavigation/TopNav'
import BottomNav from '../components/BottomNavigation/BottomNav'
import ProgressiveWebComponent from '../components/PWA/serviceworker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  cartReducer from '../reducers/cartReducer'

const store = createStore(cartReducer)

const Home = () => (
  
  <Provider store={store}>
 
  <div>
  
  <ScriptContent/>    
  
  <ProgressiveWebComponent/>
  
  <TopNav/>
  
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
  
  <BottomNav ></BottomNav>  
  
  </div>
  
  </Provider>
  );
  
  export default Home;