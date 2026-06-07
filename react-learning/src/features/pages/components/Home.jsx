import TopNav from "../../../layouts/TopNav";
import Sidebar from "../../../layouts/Sidebar";
import ProductGrid from "./products/ProductGrid"

export default function Home() {
    return (
        <>
            <div>
                <TopNav />
                <div className="d-flex">
                    <div className="min-width-20 p-2">
                        <Sidebar />
                    </div>
                    <div className="p-2 min-width-80 main-container border-left-1">
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </>
    )
}