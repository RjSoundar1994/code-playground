function CommonInfo() {
    let menuList = [
        {
            'title': "Electronics",
            'subMenu': {
                'subMenuTitle': "Mobiles & Accessories",
                'subMenuList': [
                    "Mobile Accessories",
                    "Mobile Broadband Devices",
                    "Smartphones & Basic Mobiles",
                ]
            }
        }
    ]
    let brandList = [
        {
            name: "Samsung",
            status: false
        },
        {
            name: "Apple",
            status: false
        },
        {
            name: "OnePlus",
            status: false
        },
        {
            name: "Redmi",
            status: false
        },
        {
            name: "Realme",
            status: false
        }
    ]
    let dealsMenuList = [
        'All',
        "Fresh",
        "MX Player",
        "Sell",
        "Bestsellers",
        "Today's Deals",
        "Mobiles",
        "Prime",
        "New Releases",
        "Customer Service",
        "Electronics",
        "Amazon Pay",
        "Fashion",
        "Home & Kitchen",
        "Computers",
        "Toys & Games",
        "Car & Motorbike"
    ]
    let itemLists = [
        {
            name: "Apple iPhone 14 Pro Max (128GB) - Space Black",
            price: 109900,
            rating: 4.8,
            reviews: 5000,
            image: "src/assets/SpaceBlackAppleiPhone14ProMax(128GB).webp",
            id: '1'
        },
        {
            name: "Apple iPhone 14 Pro Max (256GB) - Space Black",
            price: 119900,
            rating: 4.8,
            reviews: 5000,
            image: "src/assets/SpaceBlackAppleiPhone14ProMax(256GB).webp",
            id: '2'
        },
        {
            name: "Apple iPhone 14 Pro Max (512GB) - Space Black",
            price: 139900,
            rating: 4.8,
            reviews: 5000,
            image: "src/assets/SpaceBlackAppleiPhone14ProMax(128GB).webp",
            id: '3'
        },
        {
            name: "Apple iPhone 14 Pro Max (1TB) - Space Black",
            price: 159900,
            rating: 4.8,
            reviews: 5000,
            image: "src/assets/appleiPhone14ProMax512GBSpaceBlack.jpg",
            id: '4'
        },
        {
            name: "Samsung Galaxy S23 5G (Phantom Black, 12GB RAM, 256GB Storage)",
            price: 124999,
            rating: 4.7,
            reviews: 3000,
            image: "src/assets/samsungGalaxyS235G(PhantomBlack12GBRAM256GBStorage).webp",
            id: '5'
        },
        {
            name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB RAM, 512GB Storage)",
            price: 134999,
            rating: 4.7,
            reviews: 3000,
            image: "src/assets/samsungGalaxyS23Ultra5G(PhantomBlack12GBRAM512GBStorage).jpg",
            id: '6'
        },
        {
            name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB RAM, 1TB Storage)",
            price: 154999,
            rating: 4.7,
            reviews: 3000,
            image: "src/assets/samsungGalaxyS23Ultra5G(PhantomBlack12GBRAM1TBStorage).jpg",
            id: '7'
        },
        {
            name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)",
            price: 124999,
            rating: 4.7,
            reviews: 3000,
            image: "src/assets/samsungGalaxyS23Ultra5G(PhantomBlack12GBRAM256GBStorage).jpg",
            id: '8'
        },
        {
            name: "OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)",
            price: 69999,
            rating: 4.6,
            reviews: 2000,
            image: "src/assets/OnePlus115G(TitanBlack16GBRAM256GBStorage).jpg",
            id: '9'
        },
        {
            name: "OnePlus 11 5G (Titan Black, 16GB RAM, 512GB Storage)",
            price: 79999,
            rating: 4.6,
            reviews: 2000,
            image: "src/assets/OnePlus115G(TitanBlack16GBRAM256GBStorage)S.jpg",
            id: '10'
        },
        {
            name: "OnePlus 11 5G (Titan Black, 16GB RAM, 1TB Storage)",
            price: 89999,
            rating: 4.6,
            reviews: 2000,
            image: "src/assets/OnePlus115G(TitanBlack16GBRAM1TBStorage)ss.jpg",
            id: '11'
        },
        {
            name: "OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)",
            price: 69999,
            rating: 4.6,
            reviews: 2000,
            image: "src/assets/OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage).webp",
            id: '12'
        },
        {
            name: "Redmi Note 12 Pro 5G (Onyx Gray, 6GB RAM, 128GB Storage)",
            price: 17999,
            rating: 4.4,
            reviews: 500,
            image: "src/assets/Redmi Note 12 Pro 5G (Onyx Gray, 6GB RAM, 128GB Storage).jpg",
            id: '14'
        },
        {
            name: "Redmi Note 12 Pro 5G (Onyx Gray, 6GB RAM, 256GB Storage)",
            price: 19999,
            rating: 4.4,
            reviews: 500,
            image: "src/assets/Redmi Note 12 Pro 5G (Onyx Gray, 6GB RAM, 128GB Storage)ss.jpg",
            id: '15'
        },
        {
            name: "Redmi Note 12 Pro 5G (Onyx Gray, 6GB RAM, 512GB Storage)",
            price: 21999,
            rating: 4.4,
            reviews: 500,
            image: "src/assets/Redmi Note 12 Pro 5G (Onyx Gray, 6GB RAM, 128GB Storage)sss.jpg",
            id: '16'
        }
    ]
    let ipaddress = "http://localhost:5173/"
    return { menuList, brandList, dealsMenuList, itemLists, ipaddress };
}
export default CommonInfo;