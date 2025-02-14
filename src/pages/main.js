import { Link } from "react-router-dom";
import progressBar from '../image/Progress container (1).png';
import progressBar2 from '../image/Progress container (2).png'
import { useState } from "react";

const Main = () => {
    const [activeBar, setActiveBar] = useState(false)


    const active = {
        backgroundColor: '#197686',
        borderRadius:'10px',
        padding: '8px',
        border:' 1px solid #197686',
        cursor: 'pointer',
        width: '220px'
    }

    const inActive = {
        backgroundColor: 'transparent',
        borderRadius:'10px',
        padding: '8px',
        border:' 1px solid #197686',
        cursor: 'pointer',
        width: '220px',
    }

    /* className={({isActive}) => isActive ? active : inActive} */



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
                        <div className="regAccess" style={activeBar === 'free' ? active : inActive} onClick={() => setActiveBar('free')}> 
                            <div>
                                <h2>REGULAR ACCESS</h2>
                                <span className="free">Free</span>
                            </div>
                            <p>20 left!</p>
                        </div>

                        <div className="VIPAccess" style={activeBar === 'vip' ? active : inActive} onClick={() => setActiveBar('vip')}>
                            <div>
                                <h2>VIP ACCESS</h2>
                                <span className="VPrice">$50</span>
                            </div>
                            <p>20 left!</p>
                        </div>

                        
                        <div className="VVIPAccess" style={activeBar === 'vvip' ? active : inActive} onClick={() => setActiveBar('vvip')}>
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