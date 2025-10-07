import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Container from '../Components/Container';

const mainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar />
            </header>
            <main className='flex-1 bg-slate-50'>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default mainLayouts;