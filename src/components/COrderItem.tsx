export interface OrderProps {
    customer: string,
    customerAddress: string,
    quantity: number,
}

function COrderItem({ customer, customerAddress, quantity  }: OrderProps) {
    return (
        <div className="flex grow justify-between">
            <div>
                <p className="text-[20px] font-bold font-opensans">Đơn hàng</p>
                <p className="text-[#565656] font-bold font-lato">{customer}</p>
                <p className="text-[#565656] font-bold font-lato">{customerAddress}</p>
            </div>
            <div className="flex items-center">
                <p className="text-[32px] text-[#F9B294] font-bold">{quantity}</p>
            </div>
        </div>
    )
}

export default COrderItem
