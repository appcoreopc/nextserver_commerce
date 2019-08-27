
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'

import ScriptContent from '../components/StaticAssets/ScriptContent'
import SubContent from '../components/Layout/SubContent'
import ItemComponent from '../components/ItemComponent/ItemComponent'

import TopNav from '../components/TopNavigation/TopNav'


const Home = () => (
  
  <div>
  
  <ScriptContent/>    
  
  <TopNav/>
    
  <div className="container">  
  
    <div className="row">             
      
      <div className="col-12 col-sm-6 col-md-4"> 

       <ItemComponent title="123" src="../static/images/1.jpg"></ItemComponent>


     
      </div>      

      <div className="col-12 col-sm-6 col-md-4"> 

      <ItemComponent title="123" src="../static/images/2.jpg"></ItemComponent>
      </div>    
      
      <div className="col-12 col-sm-6 col-md-4"> 

      <ItemComponent title="123" src="../static/images/3.jpg"></ItemComponent>
      </div>    
   
   </div>  
  
  </div>  

  </div>
  );
  
  export default Home;