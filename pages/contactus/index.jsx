import Header from '../../components/Header/Header'
import ItemComponent from '../../components/ItemComponent/ItemComponent'
import Footer from '../../components/Footer/Footer'
import TopNav from '../../components/TopNavigation/TopNav'
import ScriptContent from '../../components/StaticAssets/ScriptContent'
import BottomNav from '../../components/BottomNavigation/BottomNav'

const ContactUs = () => (

  <div>  

  <ScriptContent/>    
  
  <TopNav/>

      <div> Contact Us  </div>

      <ItemComponent title="Nike X" src="../static/images/1.jpg"></ItemComponent>
     
    <BottomNav />

  </div>
);

export default ContactUs;