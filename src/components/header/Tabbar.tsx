import { useSearchParams } from 'react-router-dom'
import Button from '../body/Button'

interface Props {
    contents: {
        id?: string
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
function Tabbar({ contents, className}: Props) {
    const [searchParams] = useSearchParams()
    const activeTab = searchParams.get('tab')
    
    return (
        <div className= {`tabbar w-full grid grid-flow-col grid-auto-columns-[minmax(0,1fr)] gap-4 rounded-[13px] bg-[#0093CB] py-[5px] px-[7px] text-white ${className}`} >
            {
                contents.map((content, index) => {
                    const isActive = content.id?.toLowerCase() === activeTab?.toLowerCase()
                    return (
                        <Button
                            textColor='text-white'
                            bgColor= {isActive?"bg-[#005ACD]":"bg-[#0093CB]"}
                            focus='focus:bg-[#005ACD]'
                            path={content.path}
                            text={content.text}
                            key={index}
                            className = " w-full rounded-[10px] py-[8px] pl-[15px] pr-[12px] font-bold font-[opensans]"
                            >
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default Tabbar
