import { Link } from "react-router-dom";
import progressBar from '../image/Progress container (1).png';
import progressBar2 from '../image/Progress container (2).png'

const Main = () => {
    return ( 
        <main>
            <div className="container">
                <div className="ticketSelection">
                    <div className="selectionDetails">
                        <h1>Ticket Selection</h1>
                        <p>Step 1/3</p>
                    </div>
                       
                    <div className="Lines">
                        <img src={progressBar} alt='progressLine' className="progressBar"/>
                    </div>
                </div>
                
               <div className="ticketContainer">
                    <div className="eventDetails">
                        <h1>Techember Fest "25</h1>
                        <p className="event">Join us for an unforgetable at Tech niche Secure your spot now!!</p>
                        <p className="location">📍Lagos State. || March 15, 2025| 7.00pm</p>
                    </div>
                    <img src={progressBar2} alt="progressBar2" className="progressBar2"/>
                    <span className="ticketTypes">Select Ticket Type:</span>
                    <div className="ticketTypeContainer">
                        <div className="regAccess"> 
                            <div>
                                <h2>REGULAR ACCESS</h2>
                                <span className="free">Free</span>
                            </div>
                            <p>20 left!</p>
                        </div>

                        <div className="VIPAccess">
                            <div>
                                <h2>VIP ACCESS</h2>
                                <span className="VPrice">$50</span>
                            </div>
                            <p>20 left!</p>
                        </div>

                        
                        <div className="VVIPAccess">
                            <div>
                                <h2>VVIP ACCESS</h2>
                                <span className="VPrice">$150</span>
                            </div>
                            <p>20 left!</p>
                        </div>
                    </div>

                    <label>Number of Tickets</label>
                    <input type="number" className="ticketInput"/>

                    <div className="buttons">
                        <button className="cancel">Cancel</button>
                        <Link to="/ticketForm"><button className="next">Next</button></Link>      
                    </div>
               </div>
            </div>
        </main>
        
     );
}
 
export default Main;