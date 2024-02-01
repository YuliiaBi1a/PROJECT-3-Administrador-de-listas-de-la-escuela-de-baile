import './navbar.css'
function NavBar() {

  return (
    <>
      <nav className="navBar">
        <img className="link" id="logo" src="images/logo.svg" alt="logo" />
        
        <div className="iconHolder">

          <div className="homeIcon">
            <img className="icon" src="images/home-mobile-ui-svgrepo-com.svg" alt="icon-home" />
            <h3> <a className="link" href="#">Home</a> </h3>
          </div>

          <div className="helpIcon">
            <img className="icon" src="images/help-circle-svgrepo-com.svg" alt="icon-help" />
            <h3> <a className="link" href="#">Help</a> </h3>
          </div>

        </div>
      </nav>
    </>
  )
}

export default NavBar