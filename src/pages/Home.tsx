import Logo from "../components/header/Logo"
import Tabbar from "../components/header/Tabbar"
import Navbar from "../components/footer/Navbar"
import Card from "../components/body/Card"
import COrderItem from "../components/body/COrderItem"
import {cardImgs} from '../helpers/HCard-img'

function getOrders() {
    
}


function Home() {
    const orderItem = <COrderItem title="Don hang" customer="Nguyen van a" customerAddress="Nha so x" quantity={5}></COrderItem>
    const orders = getOrders()
    return (
        <div className="bg-[#EBEFEE]">
            <div className="">
                <Logo></Logo>
            </div>
            <div className="main-container flex flex-col items-center gap-[18px] m-[18px]">
                <div className="header w-[375px] flex flex-col items-center gap-[18px]">
                    <Tabbar contents={[{ path: "/", text: "Hôm nay" }, { path: "/", text: "Ngày mai" }]}></Tabbar>
                    <input type="text" className="w-full rounded-[15px] border-2 border-[#858390] px-[20px] py-[10px]" placeholder="Tìm" />
                </div>
                <div className="w-full flex justify-center">
                    <Card className="bg-white" img={{src: cardImgs.order.src, alt: cardImgs.order.alt}} children={orderItem}></Card>
                </div>
            </div>
            <div className="">
                <Navbar></Navbar>
            </div>

        </div>
    )
}

export default Home
