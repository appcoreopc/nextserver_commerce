
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'

import ScriptContent from '../components/StaticAssets/ScriptContent'
import SubContent from '../components/Layout/SubContent'
import ItemComponent from '../components/ItemComponent/ItemComponent'


const Home = () => (
  
  <div style={MainPageStyle}>

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
 

  <ScriptContent></ScriptContent>    

  <ItemComponent />

 
  <Main>  
  <h1 >Hello world! here we come   </h1>
  </Main>
  
      <div className='alert alert-primary' role='alert'>
      A simple primary alert—check it out!
      </div>      

      <SubContent/>  
  </div>
  
  );
  
  
  export default Home;