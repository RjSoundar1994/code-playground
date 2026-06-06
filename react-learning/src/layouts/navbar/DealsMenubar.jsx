import CommonList from "../../components/shared/CommonList"
import { Link } from "react-router-dom";
export default function DealsMenubar() {
    let {dealsMenuList} = CommonList();
    return (
        <div>
            <div className="dealsNavbar d-flex">
               {dealsMenuList.map(item => 
                <Link to="/"><div key={item} className="p-2 no-wrap ">{item}</div>
                </Link>)}
            </div>
        </div>
    )
}