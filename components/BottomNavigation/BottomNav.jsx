export default class BottomNav extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ShoeShop</a>
           
          <div >
            <a className="footerItem" href="#">Home <span class="sr-only">(current)</span></a>
            <a className="footerItem" href="#">Investor</a>
            <a className="footerItem" href="#">Legal</a>
            <a className="footerItem" href="#" tabindex="-1">Contact</a>
          </div>
        
      </nav>
      );
    }
  };
