import Link from 'next/link'
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'


const Home = () => (
  
  <div style={MainPageStyle}>

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <title>Hello, AMPs</title>
    
  <Link href="http://www.google.com"> Hello</Link>

  <link rel="stylesheet" type="text/css" href="/static/theme.css"/>
  <link rel="stylesheet" type="text/css"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>


  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>
    
  <Main>
  
  <h1 >Hello world! here we come   </h1>


  </Main>
  
      <div className='alert alert-primary' role='alert'>
      A simple primary alert—check it out!
      </div>      
  
  </div>
  
  );
  
  
  export default Home;