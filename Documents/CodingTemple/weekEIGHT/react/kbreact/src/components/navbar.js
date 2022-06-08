import {Link} from 'react-router-dom';

let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Kristen Learns React!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link" to='/shop'>Shop</Link>
      <Link className="nav-link">More Stuff!</Link>
    </div>
  </div>
</nav>
    
    );
}

export default Navbar;