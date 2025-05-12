import Logo from '../../components/ui/header/Logo'
import axios from 'axios'
import Tabbar from '../../components/ui/header/Tabbar'
import DateSeparator from '../../components/DateSeparator'
import CompletePaymentBoard from './CompleteForm'
import RemainForm from './RemainForm'
import { OrderItemCard } from '../../components/card/Card'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ordersByDate } from '../../utils/FakeDate'

interface OrderProps {
  customer: string,
  customerAddress: string,
  quantity: number
}


const currentOrderURL = "https://6816308932debfe95dbdb31f.mockapi.io/tracknova/api/Order"
const histroryOrderURL = "https://6816308932debfe95dbdb31f.mockapi.io/tracknova/api/Order-history"


export function getOrders(isCurrent: boolean) {
  const [orders, setOrders] = useState<OrderProps[]>([])
  const url = isCurrent ? currentOrderURL : histroryOrderURL
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setOrders(response.data)
      })
      .catch((error) => {
        console.error("fail to fetch order " + error)
      })
  }, [isCurrent])
  return orders
}

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab') || 'currently'

  const validTabs = ['currently', 'history']
  const activeTab = validTabs.includes(tab) ? tab : 'currently'

  const orders = getOrders(activeTab === "currently")
  const [isConfirmFormVisible, setConfirmFormVisible] = useState(false);
  const [isRemainFormVisible, setRemainFormVisible] = useState(false)
  const handleYes = () => {
    setConfirmFormVisible(false)
  }

  const handleNo = () => {
    setConfirmFormVisible(false)
    setRemainFormVisible(true)
  }

  const handlCancle = () => {
    setRemainFormVisible(false)
  }
  return (
    <div className="bg-[#EBEFEE] relative min-h-screen overflow-hidden">
      {/* confirm form */}
      <div className={isConfirmFormVisible || isRemainFormVisible ? `z-1 transition-all duration-700 ease-in-out w-full h-full bg-black/40 backdrop-blur-[1px] fixed inset-0` : "hidden"}></div>

      <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${isConfirmFormVisible ? "z-2 top-[30vh] opacity-100" : "z-1 -top-full opacity-0"}`}>
        <CompletePaymentBoard onYesClick={handleYes} onNoClick={handleNo}></CompletePaymentBoard>
      </div>

      <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${isRemainFormVisible ? "z-2 top-[30vh] opacity-100" : "z-1 -top-full opacity-0"}`}>
        <RemainForm onCancleClick={handlCancle} onYesClick={handleYes} tab={activeTab}></RemainForm>
      </div>
      {/* end confirm form */}

      {/* page content  */}
      <div>
        <Logo></Logo>
      </div>
      <div className="main-container flex flex-col justify-center items-center gap-[18px] mt-[18px] pb-[15px]">
        {/* content header */}
        <div className="header w-[375px] flex flex-col gap-[18px]">
          <Tabbar contents={[{ id: "currently", path: "/home?tab=currently", text: "Hôm nay" }, { id: "history", path: "/home?tab=history", text: "Lịch sử" }]}></Tabbar>

          <input type="text" className="w-full rounded-[15px] border-2 border-[#858390] px-[20px] py-[10px]" placeholder="Tìm" />

          <div className="flex w-full justify-between">
            <p className="font-bold font-monsterat text-[20px]">Tổng: <span className="text-[#F9B294]">{orders.length}</span></p>

            <svg className="hover:cursor-pointer" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1131 0.5H2.88634C1.11587 0.5 -0.359789 1.88876 0.0776205 3.52171C0.543479 5.25208 1.40135 6.86434 2.59101 8.24531C3.78067 9.62627 5.27327 10.7425 6.96402 11.5155C8.28266 12.1168 9.29527 13.298 9.29527 14.6898V23.9747C9.29542 24.2347 9.36532 24.4904 9.49835 24.7175C9.63137 24.9446 9.82311 25.1355 10.0554 25.2722C10.2876 25.4089 10.5527 25.4868 10.8254 25.4985C11.0981 25.5102 11.3695 25.4553 11.6137 25.339L14.8182 23.8129C15.0843 23.6863 15.3081 23.4916 15.4646 23.2506C15.6211 23.0096 15.704 22.7319 15.7042 22.4486V14.6898C15.7042 13.298 16.7168 12.1168 18.0339 11.5155C19.7252 10.7428 21.2184 9.62678 22.4087 8.24579C23.5989 6.86481 24.4573 5.25236 24.9235 3.52171C25.3577 1.88876 23.8804 0.5 22.1131 0.5Z" fill="#0093CB" />
            </svg>
          </div>
        </div>
        {/* end header */}

        {/* showing orders base on tab*/}
        <div className="w-full h-[54vh] flex flex-col gap-[18px] pb-[5px] items-center ml-[18px] overflow-y-auto">
          {
            // fetch and display current orders
            activeTab === "currently" ?
              (
                orders != null && orders.map((order, index) => {
                  return (
                    <OrderItemCard key={index}
                      customer={{ name: order.customer, address: order.customerAddress, quanity: order.quantity }}
                      onClick={() => setConfirmFormVisible(true)}
                      className="bg-white">
                    </OrderItemCard>
                  )
                })) : (
                ordersByDate != null && ordersByDate.map((orders, i) => {
                  return <div className="flex flex-col gap-[18px]" key={i}>
                    <DateSeparator date={orders.date}></DateSeparator>
                    {
                      orders.numberOfOrders.map((order, index) => {
                        return <div key={index}>
                          <OrderItemCard key={index}
                            customer={{ name: order.customer, address: order.customerAddress, quanity: order.quantity }}
                            onClick={() => setConfirmFormVisible(true)}
                            className="bg-white">
                          </OrderItemCard>
                        </div>
                      })
                    }
                  </div>
                })
              )
          }
        </div>
        {/* end show orders */}
      </div>

      {/* home page footer */}
      <button type="button" className="z-0 bg-[#D9D9D9] hover:cursor-pointer fixed bottom-[100px] right-[24px] flex items-center justify-center gap-4 rounded-[32.5px] w-[200px] h-[65px] text-black font-bold font-opensans text-[16px]">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5L10 18.5M18 10.5L2 10.5" stroke="black" strokeWidth="4" strokeLinecap="round" />
        </svg>
        Thêm đơn hàng
      </button>
      {/* end footer */}
    </div>
  )
}

export default HomePage
