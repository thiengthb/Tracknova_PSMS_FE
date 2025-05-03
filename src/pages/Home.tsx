import Logo from "../components/header/Logo"
import Tabbar from "../components/header/Tabbar"
import Navbar from "../components/footer/Navbar"
import Card from "../components/body/Card"
import COrderItem from "../components/body/COrderItem"
import { cardImgs } from '../helpers/HCard-img'
import axios from "axios"
import { OrderProps } from '../components/body/COrderItem'
import { useEffect, useState } from "react"

export function getOrders() {
    const [orders, setOrders] = useState<OrderProps[]>([])
    useEffect(() => {
        axios.get("https://6816308932debfe95dbdb31f.mockapi.io/tracknova/api/Order")
            .then((response) => {
                setOrders(response.data)
            })
            .catch((error) => {
                console.error("fail to fetch order " + error)
            })
    }, [])
    return orders
}


function Home() {
    // const orderItem = <COrderItem title="Don hang" customer="Nguyen van a" customerAddress="Nha so x" quantity={5}></COrderItem>
    const orders = getOrders()
    return (
        <div className="bg-[#EBEFEE] relative">
            <div className="">
                <Logo></Logo>
            </div>
            <div className="main-container flex flex-col justify-center items-center gap-[18px] m-[18px] pb-[90px]">
                <div className="header w-[375px] flex flex-col justify-center items-center gap-[18px]">
                    <Tabbar contents={[{ path: "/", text: "Hôm nay" }, { path: "/", text: "Lịch sử" }]}></Tabbar>
                    <input type="text" className="w-full rounded-[15px] border-2 border-[#858390] px-[20px] py-[10px]" placeholder="Tìm" />
                    <div className="flex w-full justify-between">
                        <p className="font-bold font-[monsterat] text-[20px]">Tổng: <span className="text-[#F9B294]">{orders.length}</span></p>

                        <svg className="hover:cursor-pointer" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1131 0.5H2.88634C1.11587 0.5 -0.359789 1.88876 0.0776205 3.52171C0.543479 5.25208 1.40135 6.86434 2.59101 8.24531C3.78067 9.62627 5.27327 10.7425 6.96402 11.5155C8.28266 12.1168 9.29527 13.298 9.29527 14.6898V23.9747C9.29542 24.2347 9.36532 24.4904 9.49835 24.7175C9.63137 24.9446 9.82311 25.1355 10.0554 25.2722C10.2876 25.4089 10.5527 25.4868 10.8254 25.4985C11.0981 25.5102 11.3695 25.4553 11.6137 25.339L14.8182 23.8129C15.0843 23.6863 15.3081 23.4916 15.4646 23.2506C15.6211 23.0096 15.704 22.7319 15.7042 22.4486V14.6898C15.7042 13.298 16.7168 12.1168 18.0339 11.5155C19.7252 10.7428 21.2184 9.62678 22.4087 8.24579C23.5989 6.86481 24.4573 5.25236 24.9235 3.52171C25.3577 1.88876 23.8804 0.5 22.1131 0.5Z" fill="#0093CB" />
                        </svg>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[18px] justify-center items-center">
                    {
                        orders != null && orders.map((order, index) => {
                            const orderItem = <COrderItem title={order.title} customer={order.customer} customerAddress={order.customerAddress} quantity={order.quantity}></COrderItem>
                            return (
                                <Card
                                    key={index}
                                    children={orderItem}
                                    img={{ src: cardImgs.order.src, alt: cardImgs.order.alt }}
                                    className="bg-white">
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
            <button type="button" className="bg-[#D9D9D9] hover:cursor-pointer fixed bottom-[100px] right-[24px] flex items-center justify-center gap-4 rounded-[32.5px] w-[200px] h-[65px] text-black font-bold font-[opensans] text-[16px]">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.5L10 18.5M18 10.5L2 10.5" stroke="black" strokeWidth="4" strokeLinecap="round" />
                </svg>
                Thêm đơn hàng
            </button>
            <div className="fixed bottom-0 w-full">
                <Navbar></Navbar>
            </div>
        </div>
    )
}

export default Home
