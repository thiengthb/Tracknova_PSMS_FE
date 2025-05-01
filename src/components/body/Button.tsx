import { Link } from 'react-router-dom'
interface Props {
    path: string,
    text: string,
    textColor?: string,
    bgColor: string,
    focus: string,
    className?: string
}

/*
    This button component acts as a Link to other path
    which may receive these props about the buttons properties
    such as: 
        + path: link to other page or service
        + text: the button content (them, xoa, xac nhan,...)
        + text color (optional): the text color
        + bgColor: color of the buttons background
        + focus: changes with focus property
        + className (optional): external style
*/ 
function Button({ path, text, textColor, bgColor, focus, className }: Props) {
    const colorClass =  textColor ?? "text-dark"
    
    // style of button
    const buttonClass = `
        ${colorClass} ${bgColor} ${focus}  
        hover:cursor-pointer
        ${className}`
    return (
        <Link to={path}>
            <button type="button" className={buttonClass} >
                {text}
            </button>
        </Link>
    )
}

export default Button
