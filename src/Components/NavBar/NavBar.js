import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

function NavBar() {
   return (
      <>
              <center>
    <nav class="menu-container">
   {/* burger menu  */}
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

   {/* logo  */}
  <Link to="/" className="menu-logo"> 
    <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="My Awesome Website"/>
</Link>

   {/* menu items  */}
  <div className="menu">
<ul>
<Link to="/"><li>Home</li></Link> 
<Link to="/About"><li>About</li></Link>
<Link to="/AddHome"><li>Add Home</li></Link>
{/* <Link to="/Login"><li>Log in</li></Link>
<Link to="/Register"><li>Register</li></Link> */}
</ul>
   </div>
</nav>
   </center>
 </>) 
   }
   export default NavBar;




  