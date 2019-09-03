
import Link from 'next/link'

export default class BottomNav extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ShoeShop</a>
           
          <div>
          <Link href="/">
            <a className="footerItem">Home <span class="sr-only">(current)</span></a>
           </Link>
           <Link href="/investor">
            <a className="footerItem">Investor</a>
            </Link>
            <Link href="/legal">
            <a className="footerItem">Legal</a>
            </Link>
            <Link href="/contactus">
            <a className="footerItem" tabIndex="-1">Contact</a>
            </Link>
            
          </div>
        
      </nav>
      );
    }
  };
