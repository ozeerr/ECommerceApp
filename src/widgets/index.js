import BestSeller from "./bestSeller";
import Introduction from "./introduction";
import NewArrival from "./newArrival";

const widgets =[
    {
        id:1,
        name:"introduction",
        component:<Introduction/>,
        isShow:true,
        title:""
    },
    {
        id:2,
        name:"newarrival",
        component:<NewArrival/>,
        isShow:true,
        title:"New Arrival"
    },
    {
        id:3,
        name:"bestseller",
        component:<BestSeller/>,
        isShow:true,
        title:"Best Seller"
    }
]

export default widgets;