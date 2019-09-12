import ScriptContent from '../components/StaticAssets/ScriptContent'
import TopNav from '../components/TopNavigation/TopNav'
import BottomNav from '../components/BottomNavigation/BottomNav'
import ProgressiveWebComponent from '../components/PWA/serviceworker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { FrontMainCart } from '../container/frontmaincart/frontmaincart'
import appreducers from '../reducers'

const reduxstore = createStore(appreducers)

const Home = () => (
  
  <Provider store={reduxstore}>
   
    <ScriptContent/>    
    
    <ProgressiveWebComponent/>
    
    <TopNav/>
  
      <FrontMainCart/>
        
    <BottomNav/> 
        
  
  </Provider>
  );
  
  export default Home 