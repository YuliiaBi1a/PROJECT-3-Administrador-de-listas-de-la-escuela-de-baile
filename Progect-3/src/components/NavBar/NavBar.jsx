import './navbar.css'
function NavBar() {

  return (
    <>
       <nav class="navBar">
            <img class="link" id="logo" src="images/logo.svg" alt="logo"/> 
            <div class="iconHolder">
                    <div class="homeIcon">
                        <img class="icon" src="images/home-mobile-ui-svgrepo-com.svg" alt="icon-home"/>
                        <h3> <a class="link" href="#">Home</a> </h3>
            </div>
            <div class="helpIcon">
                <img class="icon" src="images/help-circle-svgrepo-com.svg" alt="icon-help"/>
                <h3> <a class="link" href="#">Help</a> </h3>
            </div>
    </div>
    </nav>
    </>
  )
}

export default  NavBar