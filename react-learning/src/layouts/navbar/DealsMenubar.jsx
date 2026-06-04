import CommonList from "../../components/shared/CommonList"
export default function DealsMenubar() {
    let {dealsMenuList} = CommonList();
    return (
        <div>
            <div className="dealsNavbar d-flex">
               {dealsMenuList.map(item => <div key={item} className="p-2 no-wrap ">{item}</div>)}
            </div>
        </div>
    )
}