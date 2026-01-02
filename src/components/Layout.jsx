import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="bg-primary min-h-screen text-gray-100 font-sans flex flex-col">
            <Navbar />
            <main className="flex-grow pt-[80px]"> {/* Add padding-top to account for fixed navbar */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
