import Link from 'next/link'
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'

import ScriptContent from '../components/StaticAssets/ScriptContent'



const Home = () => (
  
  <div style={MainPageStyle}>

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <title>Hello, AMPs</title>

  <ScriptContent></ScriptContent>    

  <Link href="http://www.google.com"> Hello</Link>
 
  <Main>  
  <h1 >Hello world! here we come   </h1>
  </Main>
  
      <div className='alert alert-primary' role='alert'>
      A simple primary alert—check it out!
      </div>      
  
  </div>
  
  );
  
  
  export default Home;