
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'

import ScriptContent from '../components/StaticAssets/ScriptContent'
import SubContent from '../components/Layout/SubContent'
import ItemComponent from '../components/ItemComponent/ItemComponent'


import TopNav from '../components/TopNavigation/TopNav'


const Home = () => (
  
  <div>
  
  <ScriptContent></ScriptContent>    
  
  <ItemComponent />


  <TopNav/>
  
  <div className="container">  
    <div row>       
        <Main>  
          <h1 >Hello world! here we come   </h1>
        </Main>
      
          <div className='alert alert-primary' role='alert'>
              A simple primary alert—check it out!
          </div>   
      </div> 
      
    <div className="row">
      <SubContent/>  
    </div>

    </div>
       
  </div>  
  );
    
  export default Home;