import CommonList from "../../components/shared/CommonList"
export default function Sidebar() {
    let {menuList, brandList} = CommonList();
    return (
        <div className="p-2 sidebar-container">
            <div className="pl-5">
                {menuList.map((menu, index) => {
                    return <div key={index}>
                        <div className="menu-title p-1">{menu.title}</div>
                        <div className="sub-menu-title p-1">{menu.subMenu.subMenuTitle}</div>
                        {menu.subMenu.subMenuList.map((item, index) => {
                            return <div key={index} className="sub-menu-item p-1">{item}</div>
                        })}
                    </div>
                })}
                <div >
                    <div className="menu-title p-1">Brands</div>
                    {brandList.map((brand, index) => {
                        return <div key={index} className="sub-menu-item p-1 form-check">
                            <input key={index} className="form-check-input" type="checkbox" value="" />
                            <label key={index} className="form-check-label" >{brand.name}</label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}