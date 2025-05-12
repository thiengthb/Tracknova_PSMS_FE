import '../../../assets/style/logo.css'
import LogoIcon from '../../../assets/svgs/logo.svg'

interface Props {
    icon: {
        src: string;
        alt: string; 
    },
    text: string
}

/*
  This is the header logo of the app
  Which must receive an icon and a line of text
    + icon: an object with src and alt attribute (svg, img...)
    + text: pure text
*/ 

export function LogoTemplate({icon, text}: Props) {
  return (
    <div className="logo flex justify-center items-center gap-x-4 p-6 text-white h-[150px] font-bold font-popins">
        <img src = {icon.src} alt = {icon.alt} />
        <p>{text}</p>
    </div>
  )
}

function Logo() {
  return (<LogoTemplate icon={{ src: LogoIcon, alt: "My Logo" }} text="Tracknova" />)
}

export default Logo
