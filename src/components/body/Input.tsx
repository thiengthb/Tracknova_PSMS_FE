interface Props {
    type: string,
    placeHolder: string,
    id?: string,
    name?: string
}


function Input({ type, placeHolder, id, name }: Props) {
    return (
        <input className="rounded-[15px] border-2 border-[#858390] px-[20px] py-[10px] w-full"
            type={type}
            placeholder={placeHolder}
            name={name}
            id={id}
            />
    )
}

export default Input
