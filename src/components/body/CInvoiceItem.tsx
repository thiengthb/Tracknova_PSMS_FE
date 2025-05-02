import editIcon from '../../assets/svgs/edit.svg'
import star from '../../assets/svgs/star.svg'
interface Props {
    title: string,
    debt?: number,
}

/*
    Invoice item with debt
    + Ex:
        const InoviceChild = <InvoiceItem title='Nguyen Van A' debt={50000}></InvoiceItem>
        Card imgRound= 'rounded-full' 
             imgBg = "bg-[#D9D9D9]" 
             img={{ src:cardImgs.cusAvt.src, alt: cardImgs.cusAvt.alt }} 
             child={ InoviceChild }>
        </Card>

*/
function InvoiceItem({title, debt}:Props) {
  return (
    <div className="flex justify-between grow">
            <div>
                <p className="title text-[20px] font-bold">{title}</p>
                {
                    debt && <p className='text-[16px] text-[#565656]'>Còn nợ: <span className='text-[#F9B294]'>{debt}</span></p>
                }
            </div>
            <div className="flex items-center">
                {debt != null  ? <img className = "hover:cursor-pointer" src={star} alt="star icon" /> 
                               : <img className = "hover:cursor-pointer" src={editIcon} alt="edit icon" />}
            </div>
        </div>
  )
}

export default InvoiceItem
