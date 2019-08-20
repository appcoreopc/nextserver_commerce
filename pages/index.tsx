import Link from 'next/link'
import MainPageStyle from '../styles/style'

const Home = () => (
  
  <div style={MainPageStyle}>
  
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="utf-8" />    
  
  <script type="text/javascript" src="/static/test.js"></script>
  
  <Link href="http://www.google.com"> Hello</Link>
  
  <h1 >Hello world!  </h1>
  
  
  </div>
  
  );
  
  
  export default Home;