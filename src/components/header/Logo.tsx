import '../../assets/style/logo.css'
interface Props {
    icon: {
        src: string;
        alt: string; 
    },
    text: string
}

function Logo({icon, text}: Props) {
  return (
    <div className="logo flex justify-center items-center p-6">
        <img src = {icon.src} alt = {icon.alt} />
        <p>{text}</p>
    </div>
  )
}

export default Logo
