import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar.component';

const Home = () =>
{  
    return (
        <div className="Home">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Home;