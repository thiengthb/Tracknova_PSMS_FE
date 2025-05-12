export interface HomeFormProps {
    onYesClick?: () => void;
    onNoClick?: () => void;
    onCancleClick?: () => void;
    tab?: string
}

function CompleteForm({ onNoClick, onYesClick }: HomeFormProps) {
    return (
        <div className='bg-white rounded-[15px] w-[300px] px-[25px] py-[30px]'>
            <p className='text-[24px] text-center mb-[30px] font-bold'>Khách trả hết ?</p>
            <div className="flex gap-[20px] justify-center">
                <button type='button' onClick={onNoClick} className='bg-[#F9B294] w-[100px] rounded-[10px] px-[10px] py-[15px] text-white text-[20px] font-bold font-monsterat hover:cursor-pointer'>Không</button>

                <button type='button' onClick={onYesClick} className='bg-[#0093CB] w-[100px] rounded-[10px] px-[10px] py-[15px] text-white text-[20px] font-bold font-monsterat hover:cursor-pointer'>Có</button>
            </div>
        </div>
    )
}

export default CompleteForm
