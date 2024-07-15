import {Outlet, useLocation} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {useState} from 'react';
import LoginForm from '../LoginForm';

const Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    const handleLogin = (auth: boolean) => {
        setIsAuthenticated(auth);
    };

    const manageLayout = () => {
        const mainPagePath = '/'

        return location.pathname !== mainPagePath && !isAuthenticated ? <LoginForm onLogin={handleLogin } /> : <Outlet/>
    }

    return (
        <>
            <Header />
            <main className="content container">
                { manageLayout() }
            </main>
            <Footer />
        </>
    );
};

export default Layout;
