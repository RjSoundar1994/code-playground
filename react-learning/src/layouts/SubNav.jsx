import CommonInfo from "../features/shared/CommonInfo";
import { Link } from "react-router-dom";
export default function SubNav() {
    let { dealsMenuList } = CommonInfo();
    return (
        <>
            <div className="dealsNavbar d-flex">
                {dealsMenuList.map(item =>
                    <Link to="/home"><div key={item} className="p-2 no-wrap ">{item}</div>
                    </Link>)}
            </div>
        </>
    )
}