interface Props {
    title: string,
    debt: string
}
function DebtOrderItem({title, debt}:Props) {
  return (
    <div className="flex flex-col ">
      <p className="title text-[20px] font-bold">{title}</p>
      <p className="remain text-[16px] text-[#565656]">Còn nợ: <span className="text-[#F9B294]">{debt}</span></p>
    </div>
  )
}

export default DebtOrderItem
