import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="bg-white text-gray-900 dark:bg-primary dark:text-gray-100 min-h-screen font-sans flex flex-col transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-[80px]"> {/* Add padding-top to account for fixed navbar */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
