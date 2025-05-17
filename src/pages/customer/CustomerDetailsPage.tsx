import customerAvtr from '../../assets/pngs/detail-cus-avt.png'
"use client"
import axios from 'axios'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Customer {
  id: string,
  name: string,
  phone: string,
  address: string
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Tên khách hàng không được trống"
  }),
  phone: z
    .string()
    .regex(/^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5|8|9]|9[0-4|6-9])\d{7}$/, {
      message: "Số điện thoại không hợp lệ (ví dụ: 0912345678)",
    }),
  address: z.string().min(1, {
    message: "Địa chỉ khách hàng không được trống"
  })
})

type FormData = z.infer<typeof formSchema>
const FETCH_CUSTOMER_URL = ""

const CustomerDetailsPage = () => {
  const cusomerById = useParams()
  const [isloading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<Customer>({
    id: "",
    name: "",
    phone: "",
    address: ""
  })

  useEffect(() => {
    axios.get(FETCH_CUSTOMER_URL + cusomerById.customerId)
      .then((response) => {
        setCustomer(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("fail to fetch customer " + error)
      })
  })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: customer.name,
      phone: customer.phone,
      address: customer.address
    }
  });


  const handleSubmit = (data: FormData) => {
    console.log(data)
    form.reset({
      name: "",
      phone: "",
      address: ""
    }
    )
  }
  return (
    !isloading && (
      <div className="relative bg-[#EBEFEE] min-h-screen flex flex-col items-center">
        <Link className='absolute top-5 left-0' to="/customers">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.33337 25.0003C8.33337 23.8497 9.26611 22.917 10.4167 22.917H39.5834C40.734 22.917 41.6667 23.8497 41.6667 25.0003C41.6667 26.1509 40.734 27.0837 39.5834 27.0837H10.4167C9.26611 27.0837 8.33337 26.1509 8.33337 25.0003Z" fill="#414040" />
            <path fillRule="evenodd" clipRule="evenodd" d="M26.4732 8.9432C27.2868 9.75679 27.2868 11.0759 26.4732 11.8895L13.363 24.9997L26.4732 38.1099C27.2868 38.9235 27.2868 40.2426 26.4732 41.0561C25.6596 41.8697 24.3405 41.8697 23.5269 41.0561L8.94357 26.4728C8.12998 25.6592 8.12998 24.3401 8.94357 23.5265L23.5269 8.9432C24.3405 8.12961 25.6596 8.12961 26.4732 8.9432Z" fill="#414040" />
          </svg>
        </Link>

        <div className="p-[40px] bg-[#D9D9D9] rounded-full mt-[50px]">
          <img src={customerAvtr} alt={"Avatar của khách hàng"} />
        </div>

        <Form {...form}>
          <form className='w-[376px] flex flex-col gap-[20px]' onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-monsterat text-[20px]'>Họ và tên</FormLabel>
                  <FormControl>
                    <Input className="border-2 border-[#858390]" placeholder={customer.name} {...field} ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            >
            </FormField>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-monsterat text-[20px]'>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input className="border-2 border-[#858390]" placeholder={customer.phone} {...field} ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            >
            </FormField>


            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-monsterat text-[20px]'>Địa chỉ</FormLabel>
                  <FormControl>
                    <Input className="border-2 border-[#858390]" placeholder={customer.address} {...field} ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            >
            </FormField>

            <div className="flex justify-center">
              <Button className='bg-[#0093CB] w-[179px] h-[50px] hover:cursor-pointer hover:bg-[#04698f]' type="submit">Thêm</Button>
            </div>
          </form>
        </Form>
      </div >
    )
  )
}

export default CustomerDetailsPage
