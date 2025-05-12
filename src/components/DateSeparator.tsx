interface DateSeparatorProps {
    date: string,
    className?: string
}

function DateSeparator({date, className}: DateSeparatorProps) {
  return (
    <div className= {`w-full flex gap-3.5 items-end ${className}`}>
      <div className=" h-[3px] w-[25px] bg-[#858390]"></div>
      <time className="text-[#858390] text-[16px] font-bold">{date}</time>
      <div className="grow h-[3px]  bg-[#858390]"></div>
    </div>
  )
}

export default DateSeparator
