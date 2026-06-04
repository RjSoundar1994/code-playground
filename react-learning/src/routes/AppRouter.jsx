import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "../features/MainBody";
import SingleProduct from "../features/products/SingleProduct";
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainBody />} />
                {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
            </Routes>
        </BrowserRouter>
    )
}