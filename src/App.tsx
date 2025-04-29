import Logo from './components/header/Logo'
import LogoIcon from './assets/svgs/logo.svg'
import Button from './components/body/Button'
import Navbar from './components/footer/Navbar'
function App() {

  return (
    <>
      <Logo icon={{src:LogoIcon, alt:"My Logo"}} text="Tracknova" />
      <Button path='/' text='Thêm' bgColor='bg-[#BEF0FF]' focus = "focus:bg-[#0093CB]"></Button>
      <Button path='/' text='Xóa' bgColor='bg-[#F9B294]' focus = "focus:bg-[#E8754C]" textColor = "text-white"></Button>

      <Navbar></Navbar>

    </>
  )
}

export default App
