import { Button } from "@/components/ui/button";
export interface HomeFormProps {
    onYesClick?: () => void;
    onNoClick?: () => void;
    onCancleClick?: () => void;
    onConfirmClick?: (amount: number) => void;
    tab?: string
}

function CompleteForm({ onNoClick, onYesClick }: HomeFormProps) {

    return (
        <div className='bg-white rounded-[15px] w-[300px] px-[25px] py-[30px]'>
            <p className='text-[24px] text-center mb-[30px] font-bold'>Khách trả hết ?</p>
            <div className="flex gap-[20px] justify-center">
                <Button onClick = {onNoClick} className='bg-[#F9B294] w-[100px] rounded-[10px] px-[10px] py-[20px] text-white text-[20px] font-bold font-monsterat hover:cursor-pointer' >Không</Button>
                <Button onClick={onYesClick} className='bg-[#0093CB] w-[110px] rounded-[10px] px-[10px] py-[20px] text-white text-[20px] font-bold font-monsterat hover:cursor-pointer' >Có</Button>
            </div>
        </div>
    )
}

export default CompleteForm
