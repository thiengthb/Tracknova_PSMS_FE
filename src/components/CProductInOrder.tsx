import editIcon from '../../assets/svgs/edit.svg'

interface Props {
    title: string,
    price: number,
    amount: number,
    edit?: boolean
}

/*
    Product in order without edit
    + Ex:
        const ProductInOrderChild = <ProductInOrder title='San pham' price= {50000} amount={1} ></ProductInOrder>
        <Card imgRound=' rounded-tl-[15px] rounded-bl-[15px]' 
              imgBg = "bg-[#D9D9D9]" 
              img={{ src:cardImgs.productInOrder.src, alt: cardImgs.productInOrder.alt }} 
              child={ProductInOrderChild}>
        </Card>
*/ 
function ProductInOrder({ title, price, amount, edit }: Props) {
    return (
        <div className="flex justify-between grow">
            <div>
                <p className="title text-[20px] font-bold font-[opensans]">{title}</p>
                <p className="remain text-[16px] text-[#0093CB] font-bold font-[lato]">{price}</p>
            </div>
            <div className="flex items-center">
                <p className="font-bold text-[18px]">x{amount}</p>
                {edit &&
                    <>
                        <span className="mx-2 w-px h-6 bg-[#858390]"></span>
                        <img className = "hover:cursor-pointer" src={editIcon} alt="edit icon" />
                    </>
                }
            </div>
        </div>
    )
}

export default ProductInOrder
