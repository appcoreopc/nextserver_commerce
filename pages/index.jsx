
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'
import ScriptContent from '../components/StaticAssets/ScriptContent'
import SubContent from '../components/Layout/SubContent'
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
      
      <div className="col-12 col-sm-6 col-md-4"> 

       <ItemComponent title="Nike X" src="../static/images/1.jpg"></ItemComponent>
     
      </div>      

      <div className="col-12 col-sm-6 col-md-4"> 

      <ItemComponent title="Nike Alien" src="../static/images/2.jpg"></ItemComponent>
      </div>    
      
      <div className="col-12 col-sm-6 col-md-4"> 

      <ItemComponent title="Nike White" src="../static/images/3.jpg"></ItemComponent>
      </div>    
   
   </div>  
  
  </div>  


   <BottomNav ></BottomNav>
  

  </div>
  );
  
  export default Home;