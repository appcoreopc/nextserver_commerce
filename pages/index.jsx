
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'

import ScriptContent from '../components/StaticAssets/ScriptContent'
import SubContent from '../components/Layout/SubContent'

import TopNav from '../components/TopNavigation/TopNav'


const Home = () => (
  
  <div>
  
  <ScriptContent/>    
  
  <TopNav/>
  
  
  <div className="container">  
  
    <div className="row">             
      
      <div className="col-12 col-sm-6 col-md-4"> 
      Column 1
      </div>
      

      <div className="col-12 col-sm-6 col-md-4"> 
      Column 2
      </div>    
   
   </div>
  
  
  </div>  

  </div>
  );
  
  export default Home;