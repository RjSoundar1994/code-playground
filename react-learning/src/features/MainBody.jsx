import ProductGrid from "./products/ProductGrid";
import Sidebar from "../layouts/sidebar/Sidebar";
import Navbar from "../layouts/navbar/Navbar";
export default function MainBody() {
    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <div className="min-width-20 p-2">
                    <Sidebar />
                </div>
                <div className="p-2 min-width-80 main-container border-left-1">
                    <ProductGrid />
                </div>
            </div>
        </div>

    )
}