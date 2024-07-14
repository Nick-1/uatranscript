import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="content container">
                <Outlet/>
            </main>
            <Footer />
        </>
    );
};

export default Layout;