import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "../features/MainBody";
import SingleProduct from "../features/products/SingleProduct";
import CartGrid from "../features/cart/CartGrid";
import NotFound from "../components/shared/NotFound";
import UserRegister from "../features/userProfile/SignIn";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainBody />} />
                <Route exact path="/cart" element={<CartGrid />} />
                <Route exact path="/register" element={<UserRegister />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}