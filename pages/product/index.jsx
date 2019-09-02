
import ScriptContent from '../components/StaticAssets/ScriptContent'
import ItemComponent from '../components/ItemComponent/ItemComponent'
import TopNav from '../components/TopNavigation/TopNav'
import BottomNav from '../components/BottomNavigation/BottomNav'
import ProgressiveWebComponent from '../components/PWA/serviceworker'

const Home = () => (
  
  <div>
  
  <ScriptContent/>    
  
  <ProgressiveWebComponent/>
  
  <TopNav/>
    
  <div className="container">  
    <div className="row">             
     <div className="col-12 col-sm-6 col-md-6"> 
    </div>    
    </div>  
  </div>  

   <BottomNav ></BottomNav>  

  </div>
  );
  
  export default Home;