import React from 'react'
import { cardImgs } from './HCard-img'

interface CardProps {
  img: {
    src: string,
    alt: string
  };
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

interface OrderItemProps {
  customer: {
    name: string;
    address: string;
    quanity: number
  };
  onClick: () => void;
  className?: string;
}

export function OrderItemCard({ customer, onClick, className }: OrderItemProps) {
  return (
    <Card img={{ src: cardImgs.order.src, alt: cardImgs.order.alt }} onClick={onClick} className={className}>
      <div className="flex grow justify-between">
        <div>
          <p className="text-[20px] font-bold font-opensans">Đơn hàng</p>
          <p className="text-[#565656] font-bold font-lato">{customer.name}</p>
          <p className="text-[#565656] font-bold font-lato">{customer.address}</p>
        </div>
        <div className="flex items-center">
          <p className="text-[32px] text-[#F9B294] font-bold">{customer.quanity}</p>
        </div>
      </div>
    </Card>
  )
}

function Card({ img, className, children, onClick }: CardProps) {

  return (
    <div onClick={onClick} className={`card flex rounded-[15px] hover:cursor-pointer py-[6px] border-1 border-[#858390] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[376px] ${className}`}>
      <div className={`flex items-center`}>
        <img className="p-[20px]" src={img.src} alt={img.alt} />
      </div>
      <div className=" px-[10px] card-content grow flex items-center">
        {children}
      </div>
    </div>
  )
}

export default Card
