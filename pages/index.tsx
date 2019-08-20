import Link from 'next/link'
import MainPageStyle from '../styles/style'
import Main from '../components/Layout/Main'


const Home = () => (
  
  <div style={MainPageStyle}>

  
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Hello, AMPs</title>
    
  <Link href="http://www.google.com"> Hello</Link>

  <link rel="stylesheet" type="text/css" href="/static/theme.css"/>
  <link rel="stylesheet" type="text/css"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  
  <Main>
  
  <h1 >Hello world! here we come   </h1>
  
  </Main>
  
  
  
  
  </div>
  
  );
  
  
  export default Home;