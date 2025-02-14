import { Route, Routes } from "react-router-dom";
import TicketForm from "../pages/form";
import Main from "../pages/main";
// import Ticket from "../pages/ticket";
import Ticket2 from "../pages/ticket2";

const AllRoutes = () => {
    return ( 
        <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/ticketForm"  element={<TicketForm/>}/>
                <Route path="/ticket" element={<Ticket2/>}/>
        </Routes>
     );
}
 
export default AllRoutes;