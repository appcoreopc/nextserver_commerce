import Header from '../../components/Header/Header'
import ItemComponent from '../../components/ItemComponent/ItemComponent'
import Footer from '../../components/Footer/Footer'
import TopNav from '../../components/TopNavigation/TopNav'
import ScriptContent from '../../components/StaticAssets/ScriptContent'
import BottomNav from '../../components/BottomNavigation/BottomNav'
import { useRouter } from 'next/router'

const router = useRouter()


const ContactUs = (router) => (

  <div>  
 

  <ScriptContent/>    
  
  <TopNav/>

      <div> {router.pathname}  </div>
      <div> {router.route}  </div>

      <ItemComponent title="Nike X" src="../static/images/1.jpg"></ItemComponent>
     
    <BottomNav />

  </div>
);

export default ContactUs;