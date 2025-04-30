import Button from '../body/Button'

interface Props {
    contents: {
        text: string,
        path: string,
    }[],
    className?: string
}

/*
    This tabbar component receives an object array that include text and a path's link
    Optional className prop for external style
    Reuse Button component for page link
*/ 
function Tabbar({ contents, className }: Props) {
    const tabbarClass = `tabbar grid grid-flow-col grid-auto-columns-[minmax(0,1fr)] gap-4 rounded-[13px] bg-[#0093CB] py-[5px] px-[7px] text-white ${className}`

    return (
        <div className= {tabbarClass} >
            {
                contents.map((content, index) => {
                    return (
                        <Button
                            bgColor='bg-[#0093CB]'
                            focus='focus:bg-[#005ACD]'
                            path={content.path}
                            text={content.text}
                            key={index}
                            className = " w-full rounded-[10px] py-[8px] pl-[15px] pr-[12px]"
                            >
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default Tabbar
