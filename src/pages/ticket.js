import { Link } from 'react-router-dom';

import code from '../image/image 108 (1).png';
import reginfo from '../image/Heading.png'
import  sec from '../image/sec.png'
import reg  from '../image/star.png'


const Ticket = () => {
    const ticketNostyle = {
        backgroundColor:'#2BA4B9', 
        width:446, 
        color:"#000",
    }




    return ( 
        <main>
            <div className="TicketContainer">
                <div className='ticketIntro'>
                       <div className="ticketReady">
                            <h1 className='ready'>Ready</h1>
                            <p>Step 3/3</p>
                        </div>
                        
                        <div className="Lines">
                            <hr className="L1"/>
                            <hr className="L2"/>
                        </div>
                </div>

                    <h2>Your ticket is booked!!</h2>
                    <p>you can download or check your email for a copy</p>

                    <div className="ticketDetails">
                        <div className='ticketdetailTop'>
                            <div className='ticketdetail'>
                                <img src={code} alt="pics" className='code'/>
                                <div className="ticketInfo">
                                    {/* <h2>Techemeber Fest '25</h2> */}
                                    <img src={reginfo} alt='pic' className='regnfo'/>
                                    <p>04 Rumen road, Ikoyi, Lagos</p>
                                    <p>March 15, 2025 | 7.00pm</p>
                                </div>

                                <div className="ticketStar">
                                    <img src={reg} alt="pics"/>
                                </div>
                            </div>

                            <div>
                                <img src={sec} alt='reg' className='reg'/>
                            </div> 
                        </div>

                        <h5 className="ticketNo" style={ticketNostyle}>Ticket for one entry only </h5>
                    </div>
                   

                    <div className="ticketbuttons">
                        <button className="DownT">Book another Ticket</button>
                        <Link to="/ticketForm"><button className="DT">Download Ticket</button></Link>      
                    </div>
            </div>
        </main>
     );
}
 
export default Ticket;