
import TopNav from '../../components/TopNavigation/TopNav'
import BottomNav from '../../components/BottomNavigation/BottomNav'
import ScriptContent from '../../components/StaticAssets/ScriptContent'
import { useRouter } from 'next/router'

export function ProductInfo(props) {
    
    const router = useRouter();
    const {category} = router.query;

    return (
        <div>
        <ScriptContent/>    
        
        <TopNav/>
        <div> Category : {category}  </div>
        <div className="container">  
        <div className="row">             
        <div className="col-12 col-sm-6 col-md-6"> 
            {props.description}
            {props.name}
        </div>    
        </div>  
        </div>  
        
        <BottomNav ></BottomNav>  
        
        </div>
        )
    }
    
    
    ProductInfo.getInitialProps = async function(context) {
        
        //const { id } = context.query;
        //const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        //const show = await res.json();  
        //console.log(`Fetched show: ${show.name}`);
        
        return { 'name' : 'NikeX', 
        'description' : 'The latest desgin from' };
    };
    
    
    
    export default ProductInfo;