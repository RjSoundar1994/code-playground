import { Link } from "react-router-dom";
import SubNav from "./SubNav";
import Cart from "./Cart";

export default function TopNav(){
    return(
        <>
          <div className="navbar d-flex ">
                        <div className="p-2 flex-fill logo child-div">
                           <Link to="/"><img src="./src/assets/white-amazon-logo.png" alt="Amazon Logo" className="amazonLogo" /></Link>
                        </div>
                        <div className="p-2 flex-fill child-div location">
                            {/* <Location /> */}
                        </div>
                        <div className="p-2 flex-fill child-div search">
                            {/* <Search /> */}
                        </div>
                        <div className="p-2 flex-fill child-div">
                            {/* <Account /> */}
                        </div>
                        <div className="p-2 flex-fill child-div">
                            {/* <OrdersReturn /> */}
                        </div>
                        <div className="p-2 flex-fill child-div">
                            <Cart />
                        </div>
                    </div>
                    <div>
                        <SubNav />
                    </div>
        </>
    )
}