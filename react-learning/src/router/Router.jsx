import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import ForgotPassword from "../features/auth/components/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../features/pages/components/Home";
import CartItem from "../features/pages/components/CartItem";
import NotFound from "../features/shared/NotFound";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="/register" element={<RegisterForm />}></Route>
                <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/cart" element={<CartItem />}></Route>
                </Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}