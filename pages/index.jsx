

import ScriptContent from '../components/StaticAssets/ScriptContent'
import TopNav from '../components/TopNavigation/TopNav'
import BottomNav from '../components/BottomNavigation/BottomNav'
import ProgressiveWebComponent from '../components/PWA/serviceworker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { FrontMainCart } from '../container/frontmaincart'
import cartReducer from '../reducers/cartReducer'

const reduxstore = createStore(cartReducer)

const Home = () => (
  
  <Provider store={reduxstore}>
   
    <ScriptContent/>    
    
    <ProgressiveWebComponent/>
    
    <TopNav/>
  
      <FrontMainCart/>
        
    <BottomNav ></BottomNav>  
        
  
  </Provider>
  );
  
  export default Home 