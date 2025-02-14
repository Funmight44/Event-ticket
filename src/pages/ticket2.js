import eventT from '../image/Event.Title.png'
import barCode from '../image/Bar Code.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import progressBar3 from '../image/Progress container.png';


const Ticket2 = () => {
    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        avatar: '',
        textarea:''
    });


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'))
        setUserData(storedData);
        console.log('retrive data', storedData)
    }, [])



    return ( 
        <main>
            <div className='TicketContainer'>
                <div className='ticketIntro'>
                       <div className="ticketReady">
                            <h1 className='ready'>Ready</h1>
                            <p>Step 3/3</p>
                        </div>
                        
                        <div className="Lines">
                            <img src={progressBar3} alt='progress' className='progressBar3'/>
                        </div>
                </div>

                    <h2>Your ticket is booked!</h2>
                    <p>you can download or check your email for a copy</p>

                    <div className="ticketbuttons">
                        <Link to="/ticketForm"><button className="DownT">Book another Ticket</button></Link>
                        <button className="DT">Download Ticket</button>      
                    </div>

                    <div className="ticketbuttonsdown">
                        <button className="DT">Download Ticket</button>    
                        <Link to="/ticketForm"><button className="DownT">Book another Ticket</button></Link>
                    </div>


                    <div className="TKContainer">
                        <div className="TKInnerContainer">  
                            <div className="ticketDetailInfo">
                                {/* <h2>Techemeber Fest '25</h2> */}
                                <img src={eventT} alt='pic' className='eventT'/>
                                <p>📍04 Rumen road, Ikoyi, Lagos</p>
                                <p>📅March 15, 2025 | 7.00pm</p>
                            </div>

                            <div className='avatardiv'><img src={userData.avatar} alt='avatar' className='avatar'/></div>

                            <div className='ticketDetail'>
                                <div className='div1'>
                                    <div className='name'>
                                        <span className='userInfo'>Enter your name:</span>
                                        <h6>{userData.fullname}</h6>
                                    </div>
                                    <div className='email'>
                                        <span className='userInfo'>Enter your email: </span>
                                        <h6>{userData.email}</h6>
                                    </div>
                                </div>
                                
                                <div className='div2'>
                                    <div className='ticketType'>
                                        <span className='userInfo'>Ticket type:</span>
                                        <h5>free</h5>
                                    </div>

                                    <div className='ticketNo'>
                                        <span className='userInfo'>Ticket No</span>
                                        <h5>1</h5>
                                    </div>
                                </div>

                                
                            <div className='specialRequest'>
                                <p>Special request?</p>
                                <span>{userData.textarea}</span>
                            </div>
                                </div>

                        </div>
                        <img src={barCode} alt='barCode' className='barCode'/>
                    </div>

                    {/* <div className="ticketbuttonsdown">
                        <button className="DT">Download Ticket</button>    
                        <Link to="/ticketForm"><button className="DownT">Book another Ticket</button></Link>
                    </div> */}
            </div>
            
        </main>
     );
}
 
export default Ticket2;