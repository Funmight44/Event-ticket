import logo from '../image/Frame 1618871078.png'



const Header = () => {
    return ( 
        <header>
                <div className="logoDiv"> 
                    <img src={logo} alt="logo" className="logo" />
                </div>

                <nav>
                    <h4>Event</h4>
                    <p>My Tickets</p>
                    <p>About project</p>
                </nav>

                <span className="headerButton">MY TICKETS <i class="bi bi-arrow-right"></i></span>
               
            </header>
     );
}
 
export default Header;