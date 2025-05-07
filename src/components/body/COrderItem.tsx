interface Props {
    title: string,
    customer: string,
    customerAddress: string,
    customerProduct: number
}

function COrderItem({ title, customer, customerAddress, customerProduct }: Props) {
    return (
        <div className="flex grow justify-between">
            <div>
                <p className="text-[20px] font-bold font-opensans">{title}</p>
                <p className="text-[#565656] font-bold font-lato">{customer}</p>
                <p className="text-[#565656] font-bold font-lato">{customerAddress}</p>
            </div>
            <div className="flex items-center">
                <p className="text-[32px] text-[#F9B294] font-bold">{customerProduct}</p>
            </div>
        </div>
    )
}

export default COrderItem
