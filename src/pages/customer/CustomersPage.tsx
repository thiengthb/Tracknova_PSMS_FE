import Logo from "@/components/layout/header/Logo"
import { CustomerCard } from "../../components/card/Card"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
type customer = {
  id: string,
  name: string,
  phone: string,
  address: string
}

const CUSTOMER_URL = "https://6816308932debfe95dbdb31f.mockapi.io/tracknova/api/Customers"

export function getCustomers() {
  const [customers, setCustomers] = useState<customer[]>([])
  useEffect(() => {
    axios.get(CUSTOMER_URL)
      .then((response) => {
        console.log(response)
        setCustomers(response.data)
      })
      .catch((error) => {
        console.error("fail to fetch customer " + error)
      })
  }, [])

  return customers
}

const CustomersPage = () => {
  const customers = getCustomers()

  return (
    <div className="bg-[#EBEFEE] relative min-h-screen overflow-hidden">
      <Logo></Logo>

      {/* main content */}
      <div className="main-container flex flex-col items-center gap-[18px] mt-[18px]">
        <div className="header-container w-[375px]">
          <Input placeholder="tìm" className="border-2 border-[#858390]"></Input>

          <div className="flex w-full justify-between mt-[18px]">
            <p className="font-bold font-monsterat text-[20px]">Tổng: <span className="text-[#F9B294]">{customers.length}</span></p>

            <svg className="hover:cursor-pointer" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1131 0.5H2.88634C1.11587 0.5 -0.359789 1.88876 0.0776205 3.52171C0.543479 5.25208 1.40135 6.86434 2.59101 8.24531C3.78067 9.62627 5.27327 10.7425 6.96402 11.5155C8.28266 12.1168 9.29527 13.298 9.29527 14.6898V23.9747C9.29542 24.2347 9.36532 24.4904 9.49835 24.7175C9.63137 24.9446 9.82311 25.1355 10.0554 25.2722C10.2876 25.4089 10.5527 25.4868 10.8254 25.4985C11.0981 25.5102 11.3695 25.4553 11.6137 25.339L14.8182 23.8129C15.0843 23.6863 15.3081 23.4916 15.4646 23.2506C15.6211 23.0096 15.704 22.7319 15.7042 22.4486V14.6898C15.7042 13.298 16.7168 12.1168 18.0339 11.5155C19.7252 10.7428 21.2184 9.62678 22.4087 8.24579C23.5989 6.86481 24.4573 5.25236 24.9235 3.52171C25.3577 1.88876 23.8804 0.5 22.1131 0.5Z" fill="#0093CB" />
            </svg>
          </div>
        </div>

        {/* display customers */}
        <div className="customer-container w-full h-[70vh] ml-[5px] pb-[18px] flex flex-col gap-[18px] items-center overflow-y-auto">
          {
            customers != null && (
              customers.map((customer, i) => {
                return (
                  <Link to={`${customer.id}`} key={i}>
                    <CustomerCard
                      customer={customer}>
                    </CustomerCard>
                  </Link>
                )
              })
            )
          }
        </div>
        {/* end display customers */}
      </div>
      {/* end main content */}

      {/* footer */}
      <div className="absolute bottom-15 right-5">
        <Button className="font-opensans text-[16px] font-bold w-[217px] h-[65px] rounded-[32.5px] bg-[#D9D9D9] text-black hover:cursor-pointer hover:bg-[#c2c0c0] focus:bg-[#c2c0c0]">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.5L10 18.5M18 10.5L2 10.5" stroke="black" strokeWidth="4" strokeLinecap="round" />
          </svg>
          Thêm khách hàng
        </Button>
      </div>
      {/* end footer */}
    </div>
  )
}

export default CustomersPage
