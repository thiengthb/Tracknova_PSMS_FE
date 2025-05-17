import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'

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
*/
function Tabbar({ contents, className }: Props) {
    const [searchParams] = useSearchParams()
    const activeTab = searchParams.get('tab')

    return (
        <div className={`tabbar w-full grid  ${contents.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4 rounded-[13px] bg-[#0093CB] py-[5px] px-[7px] text-white ${className}`} >
            {
                contents.map((content, index) => {
                    const isActive = content.id?.toLowerCase() === activeTab?.toLowerCase()
                    return (
                        <Button asChild key={index} className= {`${isActive? "bg-[#005ACD] hover:bg-[#005ACD]":"bg-[#0093CB] hover:bg-[#0093CB]"} text-[20px] font-monsterat font-bold`}>
                            <Link to={content.path}>{content.text}</Link>
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default Tabbar
