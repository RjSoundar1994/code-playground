
import DealsMenubar from "./DealsMenubar";
import Location from "./Location";
import Search from "./Search";
import Account from "./Account";
import OrdersReturn from "./OrdersReturn";
import Cart from "./Cart";

export default function Navbar() {
    return (
        <div >
            <div className="amazonNavbar d-flex ">
                <div className="p-2 flex-fill logo child-div">
                    <img src="./src/assets/white-amazon-logo.png" alt="Amazon Logo" className="amazonLogo" />
                </div>
                <div className="p-2 flex-fill child-div location">
                    <Location />
                </div>
                <div className="p-2 flex-fill child-div search">
                    <Search />
                </div>
                <div className="p-2 flex-fill child-div">
                    <Account />
                </div>
                <div className="p-2 flex-fill child-div">
                    <OrdersReturn />
                </div>
                <div className="p-2 flex-fill child-div">
                    <Cart />
                </div>
            </div>
            <div>
                <DealsMenubar />
            </div>

        </div>
    )
}