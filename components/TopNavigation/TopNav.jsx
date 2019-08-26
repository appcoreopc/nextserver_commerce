
export default class TopNav extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ShoeShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Men</a>
            <a className="nav-item nav-link" href="#">Women</a>
            <a className="nav-item nav-link disabled" href="#" tabindex="-1">Children</a>
          </div>
        </div>
      </nav>
      );
    }
  };
