export default function Location(){
    let location = "Coimbatore";
    let pincode = "641652";
    return (
        <div className="d-flex ">
            <div className="location-icon"><img src="./src/assets/location-icon.webp" alt="Location Icon" /></div>
            <div className="pl-2">
                <div className="location-text">
                    Delivery to {location} {pincode}
                </div>
                <div>
                    <strong>Update Location</strong>
                </div>
            </div>
        </div>
    )
}