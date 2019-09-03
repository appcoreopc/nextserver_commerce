import Link from 'next/link'

const TopNav = () => (              
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ShoeShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link href="/">
             <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
         </Link>

         <Link href="/product?category=Men" as="/men" prefetch={true}>
           <a className="nav-item nav-link">Men</a>
          </Link>
          <Link href="/product?category=Women" as="/women" prefetch={true}>
            <a className="nav-item nav-link">Women</a>
          </Link>
          <Link href="/product?category=Children" as="/children" prefetch={true}>
            <a className="nav-item nav-link" tabIndex="-1">Children</a>
          </Link>
          </div>
        </div>
      </nav>
)

export default TopNav;