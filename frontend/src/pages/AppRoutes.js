import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Cart from './cart';
import ProductDetail from '../components/productDetails';

function AppRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Cart />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
